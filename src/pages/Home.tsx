
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { allAzkarCategories } from '@/data/azkar';
import { defaultTasbihOptions } from '@/data/azkar';
import { toast } from '@/components/ui/use-toast';
import { BookOpen, Check, RotateCcw } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface TasbihState {
  selectedZikr: string;
  customZikr: string;
  targetCount: number;
  currentCount: number;
  rounds: number;
  completedRounds: number;
  history: Array<{
    zikr: string;
    count: number;
    date: string;
  }>;
}

const Home: React.FC = () => {
  const { t } = useLanguage();
  const [completedZikrs, setCompletedZikrs] = useState<Record<string, Set<number>>>({});
  const [activeTab, setActiveTab] = useState<string>('morning');
  
  // عرض الوقت بتوقيت القاهرة
  const [currentTime, setCurrentTime] = useState<string>(
    new Date().toLocaleTimeString('ar-EG', {
      timeZone: 'Africa/Cairo',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })
  );
  
  // حالة السبحة
  const [tasbihState, setTasbihState] = useState<TasbihState>({
    selectedZikr: 'subhanAllah',
    customZikr: '',
    targetCount: 33,
    currentCount: 0,
    rounds: 3,
    completedRounds: 0,
    history: [],
  });
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString('ar-EG', {
          timeZone: 'Africa/Cairo',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        })
      );
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // استعادة حالة السبحة من التخزين المحلي عند تحميل الصفحة
  useEffect(() => {
    const savedState = localStorage.getItem('khair-tasbih-state');
    if (savedState) {
      setTasbihState(JSON.parse(savedState));
    }
    
    // استعادة الأذكار المكتملة
    const savedCompletedZikrs = localStorage.getItem('khair-completed-zikrs');
    if (savedCompletedZikrs) {
      // تحويل الكائن المخزن إلى كائن مع مجموعات Set
      const parsedCompletedZikrs = JSON.parse(savedCompletedZikrs);
      const reconvertedCompletedZikrs: Record<string, Set<number>> = {};
      
      for (const categoryId in parsedCompletedZikrs) {
        reconvertedCompletedZikrs[categoryId] = new Set(parsedCompletedZikrs[categoryId]);
      }
      
      setCompletedZikrs(reconvertedCompletedZikrs);
    }
  }, []);
  
  // حفظ حالة السبحة في التخزين المحلي كلما تغيرت
  useEffect(() => {
    localStorage.setItem('khair-tasbih-state', JSON.stringify(tasbihState));
  }, [tasbihState]);
  
  // حفظ الأذكار المكتملة في التخزين المحلي
  useEffect(() => {
    // تحويل كائن مع مجموعات Set إلى كائن قابل للتخزين في localStorage
    const serializableCompletedZikrs: Record<string, number[]> = {};
    
    for (const categoryId in completedZikrs) {
      serializableCompletedZikrs[categoryId] = Array.from(completedZikrs[categoryId]);
    }
    
    localStorage.setItem('khair-completed-zikrs', JSON.stringify(serializableCompletedZikrs));
  }, [completedZikrs]);
  
  // التعامل مع النقر على الذكر
  const handleZikrClick = (categoryId: string, zikrId: number, maxCount: number) => {
    setCompletedZikrs(prev => {
      const categoryZikrs = prev[categoryId] || new Set<number>();
      const newCategoryZikrs = new Set(categoryZikrs);
      
      if (!newCategoryZikrs.has(zikrId)) {
        newCategoryZikrs.add(zikrId);
        
        toast({
          title: 'تم تسجيل الذكر',
          description: `تم تسجيل هذا الذكر بنجاح`,
          duration: 3000,
        });
      } else {
        newCategoryZikrs.delete(zikrId);
        
        toast({
          title: 'تم إلغاء تسجيل الذكر',
          description: `تم إلغاء تسجيل هذا الذكر`,
          duration: 3000,
        });
      }
      
      return {
        ...prev,
        [categoryId]: newCategoryZikrs
      };
    });
  };

  // التعامل مع النقر على "عرض"
  const handleViewCategory = (categoryId: string) => {
    setActiveTab(categoryId);
  };
  
  // وظائف السبحة
  const handleZikrSelect = (value: string) => {
    const selected = defaultTasbihOptions.find(option => option.id === value);
    setTasbihState(prev => ({
      ...prev,
      selectedZikr: value,
      targetCount: selected ? selected.count : prev.targetCount,
      currentCount: 0,
      completedRounds: 0,
    }));
    
    toast({
      title: 'تم تغيير الذكر',
      description: `تم اختيار ${selected?.text || 'ذكر مخصص'}`,
      duration: 1500,
    });
  };
  
  const handleCustomZikrChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTasbihState(prev => ({
      ...prev,
      customZikr: e.target.value,
      selectedZikr: 'custom',
    }));
  };
  
  const handleTargetCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTasbihState(prev => ({
      ...prev,
      targetCount: parseInt(e.target.value) || 1,
      currentCount: 0,
      completedRounds: 0,
    }));
  };
  
  const handleRoundsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTasbihState(prev => ({
      ...prev,
      rounds: parseInt(e.target.value) || 1,
      completedRounds: 0,
    }));
  };
  
  const incrementCount = () => {
    if (tasbihState.completedRounds >= tasbihState.rounds) {
      // تم الانتهاء من جميع الجولات، لا يمكن التقدم أكثر
      toast({
        title: 'اكتملت السبحة',
        description: 'لقد أكملت جميع الجولات، يمكنك إعادة التعيين للبدء من جديد',
        duration: 3000,
      });
      return;
    }
    
    setTasbihState(prev => {
      const newCount = prev.currentCount + 1;
      
      // عرض رسالة تأكيد بعدد المرات
      toast({
        title: `تم التكرار ${newCount} مرة`,
        duration: 1000,
      });
      
      // إذا وصلنا للعدد المستهدف
      if (newCount >= prev.targetCount) {
        const newCompletedRounds = prev.completedRounds + 1;
        const currentDate = new Date().toISOString();
        const currentZikr = prev.selectedZikr === 'custom' ? prev.customZikr : getCurrentZikrText();
        
        // إضافة إلى سجل الأذكار
        const newHistory = [...(prev.history || []), {
          zikr: currentZikr,
          count: prev.targetCount,
          date: currentDate
        }];
        
        // إذا أكملنا جميع الجولات
        if (newCompletedRounds >= prev.rounds) {
          toast({
            title: 'مبارك!',
            description: `لقد أكملت ${prev.rounds} جولات من الذكر`,
            duration: 3000,
          });
        } else {
          toast({
            title: 'أحسنت!',
            description: `أكملت جولة ${newCompletedRounds} من ${prev.rounds}`,
            duration: 1500,
          });
        }
        
        return {
          ...prev,
          currentCount: 0,
          completedRounds: newCompletedRounds,
          history: newHistory
        };
      }
      
      return {
        ...prev,
        currentCount: newCount,
      };
    });
  };
  
  const resetTasbih = () => {
    setTasbihState(prev => ({
      ...prev,
      currentCount: 0,
      completedRounds: 0,
    }));
    
    toast({
      title: 'تم إعادة التعيين',
      description: 'تم إعادة تعيين العداد',
      duration: 1500,
    });
  };
  
  const getCurrentZikrText = () => {
    if (tasbihState.selectedZikr === 'custom') {
      return tasbihState.customZikr || 'ذكر مخصص';
    }
    
    const selected = defaultTasbihOptions.find(option => option.id === tasbihState.selectedZikr);
    return selected ? selected.text : '';
  };
  
  const getProgressPercentage = () => {
    return (tasbihState.currentCount / tasbihState.targetCount) * 100;
  };
  
  // إعادة ضبط جميع الأذكار المكتملة
  const resetAllCompletedZikrs = () => {
    setCompletedZikrs({});
    toast({
      title: 'تم إعادة التعيين',
      description: 'تم إعادة تعيين جميع الأذكار المكتملة',
      duration: 2000,
    });
  };
  
  return (
    <div className="khair-container">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-center font-ibm-plex-arabic">
          {t('appName')}
        </h1>
        <div className="flex items-center text-khair-primary">
          <span className="ml-2">{t('currentTime')}:</span>
          <span dir="ltr" className="mr-2">{currentTime}</span>
        </div>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mb-8 overflow-x-auto">
          {allAzkarCategories.slice(0, 5).map(category => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.title}
            </TabsTrigger>
          ))}
          <TabsTrigger value="tasbih">{t('tasbih')}</TabsTrigger>
          <TabsTrigger value="more">
            {t('more')}
          </TabsTrigger>
        </TabsList>
        
        {allAzkarCategories.map(category => (
          <TabsContent key={category.id} value={category.id} className="mt-0">
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">{category.title}</h2>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={resetAllCompletedZikrs}
                  className="font-ibm-plex-arabic"
                >
                  {t('reset')}
                </Button>
              </div>
              
              {category.azkar.map((zikr) => {
                const isCompleted = completedZikrs[category.id]?.has(zikr.id);
                
                return (
                  <Card 
                    key={zikr.id} 
                    className={`prayer-card overflow-hidden ${isCompleted ? 'border-khair-accent bg-opacity-10' : ''}`}
                    onClick={() => !isCompleted && handleZikrClick(category.id, zikr.id, zikr.count)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <Badge variant={isCompleted ? "outline" : "default"} className="mb-2 flex items-center gap-1">
                          <span className="material-icons text-sm">repeat</span>
                          {`${t('repeat')}: ${zikr.count}`}
                        </Badge>
                        {isCompleted && (
                          <Badge variant="secondary" className="bg-khair-accent text-black flex items-center gap-1">
                            <Check size={14} />
                            {t('done')}
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="pb-3">
                      <div className="whitespace-pre-line text-lg font-ibm-plex-arabic">
                        {zikr.text}
                      </div>
                    </CardContent>
                    <CardFooter className="pt-3 text-xs text-muted-foreground border-t flex items-start">
                      <BookOpen size={14} className="ml-2 mt-0.5 flex-shrink-0" />
                      <p className="whitespace-pre-line">
                        {zikr.source}
                      </p>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        ))}
        
        {/* تاب السبحة */}
        <TabsContent value="tasbih" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="font-ibm-plex-arabic">{t('tasbihSettings')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="zikr-select" className="font-ibm-plex-arabic">{t('chooseZikr')}</Label>
                  <Select 
                    value={tasbihState.selectedZikr} 
                    onValueChange={handleZikrSelect}
                  >
                    <SelectTrigger id="zikr-select">
                      <SelectValue placeholder={t('chooseZikr')} />
                    </SelectTrigger>
                    <SelectContent>
                      {defaultTasbihOptions.map(option => (
                        <SelectItem key={option.id} value={option.id} className="font-ibm-plex-arabic">
                          {option.text} ({option.count})
                        </SelectItem>
                      ))}
                      <SelectItem value="custom" className="font-ibm-plex-arabic">
                        {t('customZikr')}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {tasbihState.selectedZikr === 'custom' && (
                  <div className="space-y-2">
                    <Label htmlFor="custom-zikr" className="font-ibm-plex-arabic">
                      {t('customZikr')}
                    </Label>
                    <Input
                      id="custom-zikr"
                      value={tasbihState.customZikr}
                      onChange={handleCustomZikrChange}
                      placeholder="أدخل الذكر المخصص"
                      className="font-ibm-plex-arabic"
                    />
                  </div>
                )}
                
                <div className="space-y-2">
                  <Label htmlFor="target-count" className="font-ibm-plex-arabic">
                    {t('tasbihCount')}
                  </Label>
                  <Input
                    id="target-count"
                    type="number"
                    value={tasbihState.targetCount}
                    onChange={handleTargetCountChange}
                    min={1}
                    max={1000}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="rounds" className="font-ibm-plex-arabic">
                    {t('totalRounds')}
                  </Label>
                  <Input
                    id="rounds"
                    type="number"
                    value={tasbihState.rounds}
                    onChange={handleRoundsChange}
                    min={1}
                    max={100}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full font-ibm-plex-arabic" onClick={resetTasbih}>
                  <RotateCcw className="ml-2 h-4 w-4" />
                  {t('reset')}
                </Button>
              </CardFooter>
            </Card>
            
            <div className="flex flex-col items-center justify-center">
              <div 
                className={`tasbih-counter ${tasbihState.completedRounds >= tasbihState.rounds ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`} 
                onClick={incrementCount}
              >
                <div className="counter-text">{tasbihState.currentCount}</div>
                <div className="counter-label font-ibm-plex-arabic">
                  {getCurrentZikrText()}
                </div>
                <div className="text-sm mt-2 font-ibm-plex-arabic">
                  {`${tasbihState.completedRounds} / ${tasbihState.rounds} ${t('rounds')}`}
                </div>
                
                <div className="mt-4 w-4/5 bg-white/30 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-white h-full rounded-full transition-all duration-300" 
                    style={{ width: `${getProgressPercentage()}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="flex justify-center mt-4 space-x-4 rtl:space-x-reverse">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground font-ibm-plex-arabic">
                    {t('completed')}
                  </div>
                  <div className="text-2xl font-bold">{tasbihState.completedRounds}</div>
                </div>
                
                <div className="border-r mx-2"></div>
                
                <div className="text-center">
                  <div className="text-sm text-muted-foreground font-ibm-plex-arabic">
                    {t('target')}
                  </div>
                  <div className="text-2xl font-bold">{tasbihState.rounds}</div>
                </div>
              </div>
              
              {tasbihState.completedRounds >= tasbihState.rounds && (
                <div className="mt-4 text-center">
                  <Button variant="default" className="bg-khair-accent text-black hover:bg-khair-accent/90 font-ibm-plex-arabic">
                    <Check className="ml-2 h-4 w-4" />
                    {t('congratulations')}! {t('completedAllRounds')}
                  </Button>
                </div>
              )}
            </div>
          </div>
              
          {/* سجل التسبيحات */}
          {tasbihState.history && tasbihState.history.length > 0 && (
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="font-ibm-plex-arabic">
                  {t('tasbihHistory')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {tasbihState.history.slice(-5).reverse().map((entry, index) => (
                    <div key={index} className="flex justify-between items-center p-2 border-b">
                      <div className="flex-1">
                        <span className="font-medium font-ibm-plex-arabic">{entry.zikr}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="font-ibm-plex-arabic">
                          {`${entry.count} مرة`}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {new Date(entry.date).toLocaleString('ar-EG')}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="more" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allAzkarCategories.slice(5).map(category => (
              <Card key={category.id} className="cursor-pointer hover:border-khair-accent transition-colors">
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>
                    {`${t('numberOfAzkar')}: ${category.azkar.length}`}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button 
                    variant="default" 
                    className="w-full"
                    onClick={() => handleViewCategory(category.id)}
                  >
                    <span className="material-icons mr-2">visibility</span>
                    {t('view')}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Home;
