
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RotateCcw } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface DhikrCounterProps {
  title?: string;
  target?: number;
}

const DhikrCounter: React.FC<DhikrCounterProps> = ({ title = 'الذكر', target = 33 }) => {
  const [count, setCount] = useState(0);
  
  const incrementCount = () => {
    setCount(prev => {
      const newCount = prev + 1;
      
      if (newCount === target) {
        toast({
          title: 'مبارك!',
          description: 'لقد أكملت العدد المستهدف',
          duration: 2000,
        });
      } else if (newCount > target) {
        return prev; // Don't increment past target
      }
      
      return newCount;
    });
  };
  
  const resetCount = () => {
    setCount(0);
    toast({
      title: 'تم إعادة التعيين',
      description: 'تم إعادة تعيين العداد',
      duration: 1500,
    });
  };

  return (
    <Card className="w-full max-w-md mx-auto mb-6">
      <CardHeader>
        <CardTitle className="text-center font-ibm-plex-arabic">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          <div 
            onClick={incrementCount}
            className={`tasbih-counter bg-gradient-to-br from-khair-primary to-khair-secondary hover:from-khair-primary/90 hover:to-khair-secondary/90 cursor-pointer mb-4 ${
              count >= target ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            <div className="counter-text font-ibm-plex-arabic">{count}</div>
            <div className="text-sm mt-2 font-ibm-plex-arabic">
              {`${count} / ${target}`}
            </div>
          </div>
          
          <Button 
            onClick={resetCount}
            variant="outline" 
            size="sm"
            className="font-ibm-plex-arabic"
          >
            <RotateCcw className="ml-2 h-4 w-4" />
            إعادة التعيين
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DhikrCounter;
