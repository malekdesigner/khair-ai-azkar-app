
export interface Zikr {
  id: number;
  text: string;
  count: number;
  source: string;
}

export interface AzkarCategory {
  id: string;
  title: string;
  azkar: Zikr[];
}

export const morningAzkar: AzkarCategory = {
  id: 'morning',
  title: 'أذكار الصباح',
  azkar: [
    {
      id: 1,
      text: 'أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ\nاللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ.',
      count: 1,
      source: 'البقرة: 255، فضلها: «من قالها حين يصبح أجير من الجن حتى يمسي، ومن قالها حين يمسي أجير من الجن حتى يصبح» [صححه الألباني].',
    },
    {
      id: 2,
      text: 'بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم\nقُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ.',
      count: 3,
      source: 'سورة الإخلاص، فضلها: «من قالها حين يصبح وحين يمسي ثلاث مرات كفته من كل شيء» [رواه أبو داود والترمذي].',
    },
    {
      id: 3,
      text: 'بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم\nقُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ.',
      count: 3,
      source: 'سورة الفلق، فضلها: «من قالها حين يصبح وحين يمسي ثلاث مرات كفته من كل شيء» [رواه أبو داود والترمذي].',
    },
    {
      id: 4,
      text: 'بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم\nقُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَ النَّاسِ.',
      count: 3,
      source: 'سورة الناس، فضلها: «من قالها حين يصبح وحين يمسي ثلاث مرات كفته من كل شيء» [رواه أبو داود والترمذي].',
    },
    {
      id: 5,
      text: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ.',
      count: 1,
      source: 'رواه مسلم.',
    }
  ]
};

export const eveningAzkar: AzkarCategory = {
  id: 'evening',
  title: 'أذكار المساء',
  azkar: [
    {
      id: 1,
      text: 'أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ\nاللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ.',
      count: 1,
      source: 'البقرة: 255، فضلها: «من قالها حين يصبح أجير من الجن حتى يمسي، ومن قالها حين يمسي أجير من الجن حتى يصبح» [صححه الألباني].',
    },
    {
      id: 2,
      text: 'بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم\nقُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ.',
      count: 3,
      source: 'سورة الإخلاص، فضلها: «من قالها حين يصبح وحين يمسي ثلاث مرات كفته من كل شيء» [رواه أبو داود والترمذي].',
    },
    {
      id: 3,
      text: 'بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم\nقُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ.',
      count: 3,
      source: 'سورة الفلق، فضلها: «من قالها حين يصبح وحين يمسي ثلاث مرات كفته من كل شيء» [رواه أبو داود والترمذي].',
    },
    {
      id: 4,
      text: 'بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم\nقُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَ النَّاسِ.',
      count: 3,
      source: 'سورة الناس، فضلها: «من قالها حين يصبح وحين يمسي ثلاث مرات كفته من كل شيء» [رواه أبو داود والترمذي].',
    },
    {
      id: 5,
      text: 'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلةِ وَشَرِّ مَا بَعْدَهَا، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ.',
      count: 1,
      source: 'رواه مسلم.',
    }
  ]
};

export const sleepAzkar: AzkarCategory = {
  id: 'sleep',
  title: 'أذكار النوم',
  azkar: [
    {
      id: 1,
      text: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',
      count: 1,
      source: 'رواه البخاري ومسلم.',
    },
    {
      id: 2,
      text: 'اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ',
      count: 3,
      source: 'رواه أبو داود وصححه الألباني.',
    },
    {
      id: 3,
      text: 'اللَّهُمَّ أَسْلَمْتُ نَفْسِي إِلَيْكَ، وَفَوَّضْتُ أَمْرِي إِلَيْكَ، وَوَجَّهْتُ وَجْهِي إِلَيْكَ، وَأَلْجَأْتُ ظَهْرِي إِلَيْكَ، رَغْبَةً وَرَهْبَةً إِلَيْكَ، لَا مَلْجَأَ وَلَا مَنْجَا مِنْكَ إِلَّا إِلَيْكَ، آمَنْتُ بِكِتَابِكَ الَّذِي أَنْزَلْتَ، وَبِنَبِيِّكَ الَّذِي أَرْسَلْتَ',
      count: 1,
      source: 'رواه البخاري ومسلم.',
    }
  ]
};

export const wakeupAzkar: AzkarCategory = {
  id: 'wakeup',
  title: 'أذكار الاستيقاظ',
  azkar: [
    {
      id: 1,
      text: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
      count: 1,
      source: 'رواه البخاري.',
    },
    {
      id: 2,
      text: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ، رَبِّ اغْفِرْ لِي',
      count: 1,
      source: 'رواه البخاري.',
    }
  ]
};

export const prayerOpeningAzkar: AzkarCategory = {
  id: 'prayer-opening',
  title: 'دعاء الاستفتاح للصلاة',
  azkar: [
    {
      id: 1,
      text: 'اللَّهُمَّ بَاعِدْ بَيْنِي وَبَيْنَ خَطَايَايَ كَمَا بَاعَدْتَ بَيْنَ الْمَشْرِقِ وَالْمَغْرِبِ، اللَّهُمَّ نَقِّنِي مِنْ خَطَايَايَ كَمَا يُنَقَّى الثَّوْبُ الْأَبْيَضُ مِنَ الدَّنَسِ، اللَّهُمَّ اغْسِلْنِي مِنْ خَطَايَايَ بِالثَّلْجِ وَالْمَاءِ وَالْبَرَدِ',
      count: 1,
      source: 'رواه البخاري ومسلم.',
    },
    {
      id: 2,
      text: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَلَا إِلَهَ غَيْرُكَ',
      count: 1,
      source: 'رواه أبو داود والترمذي وصححه الألباني.',
    }
  ]
};

export const afterTashahhudAzkar: AzkarCategory = {
  id: 'after-tashahhud',
  title: 'أذكار بعد التشهد',
  azkar: [
    {
      id: 1,
      text: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ جَهَنَّمَ، وَمِنْ عَذَابِ الْقَبْرِ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ',
      count: 1,
      source: 'رواه البخاري ومسلم.',
    },
    {
      id: 2,
      text: 'اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا، وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ، فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ وَارْحَمْنِي، إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ',
      count: 1,
      source: 'رواه البخاري ومسلم.',
    }
  ]
};

export const rukuSujudAzkar: AzkarCategory = {
  id: 'ruku-sujud',
  title: 'أذكار الركوع والسجود',
  azkar: [
    {
      id: 1,
      text: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ',
      count: 3,
      source: 'رواه أبو داود والترمذي.',
    },
    {
      id: 2,
      text: 'سُبْحَانَكَ اللَّهُمَّ رَبَّنَا وَبِحَمْدِكَ، اللَّهُمَّ اغْفِرْ لِي',
      count: 1,
      source: 'رواه البخاري ومسلم.',
    },
    {
      id: 3,
      text: 'سُبْحَانَ رَبِّيَ الْأَعْلَى',
      count: 3,
      source: 'رواه أبو داود والترمذي.',
    }
  ]
};

export const azanAzkar: AzkarCategory = {
  id: 'azan',
  title: 'أذكار سماع الأذان',
  azkar: [
    {
      id: 1,
      text: 'يقول مثل ما يقول المؤذن إلا في "حي على الصلاة" و"حي على الفلاح" فيقول: "لا حول ولا قوة إلا بالله"',
      count: 1,
      source: 'رواه البخاري ومسلم.',
    },
    {
      id: 2,
      text: 'اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ، وَالصَّلَاةِ الْقَائِمَةِ، آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ، وَابْعَثْهُ مَقَامًا مَحْمُودًا الَّذِي وَعَدْتَهُ',
      count: 1,
      source: 'رواه البخاري.',
    }
  ]
};

export const betweenSujudAzkar: AzkarCategory = {
  id: 'between-sujud',
  title: 'أذكار الجلسة بين السجدتين',
  azkar: [
    {
      id: 1,
      text: 'رَبِّ اغْفِرْ لِي، رَبِّ اغْفِرْ لِي',
      count: 1,
      source: 'رواه أبو داود وابن ماجه.',
    },
    {
      id: 2,
      text: 'اللَّهُمَّ اغْفِرْ لِي، وَارْحَمْنِي، وَاهْدِنِي، وَاجْبُرْنِي، وَعَافِنِي، وَارْزُقْنِي، وَارْفَعْنِي',
      count: 1,
      source: 'رواه أبو داود والترمذي وابن ماجه.',
    }
  ]
};

export const mosqueAzkar: AzkarCategory = {
  id: 'mosque',
  title: 'أذكار دخول المسجد والخروج منه',
  azkar: [
    {
      id: 1,
      text: 'بِسْمِ اللهِ، وَالصَّلاَةُ وَالسَّلاَمُ عَلَى رَسُولِ اللهِ، اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ',
      count: 1,
      source: 'رواه مسلم.',
    },
    {
      id: 2,
      text: 'بِسْمِ اللهِ، وَالصَّلاَةُ وَالسَّلاَمُ عَلَى رَسُولِ اللهِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ',
      count: 1,
      source: 'رواه مسلم.',
    }
  ]
};

export const wuduAzkar: AzkarCategory = {
  id: 'wudu',
  title: 'أذكار الوضوء',
  azkar: [
    {
      id: 1,
      text: 'بِسْمِ اللَّهِ',
      count: 1,
      source: 'رواه أبو داود وابن ماجه.',
    },
    {
      id: 2,
      text: 'أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ. اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ',
      count: 1,
      source: 'رواه الترمذي.',
    }
  ]
};

export const afterFoodAzkar: AzkarCategory = {
  id: 'after-food',
  title: 'الدعاء بعد الطعام والشراب',
  azkar: [
    {
      id: 1,
      text: 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا، وَرَزَقَنِيهِ، مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ',
      count: 1,
      source: 'رواه أبو داود والترمذي.',
    },
    {
      id: 2,
      text: 'الْحَمْدُ لِلَّهِ حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ، غَيْرَ مَكْفِيٍّ وَلَا مُوَدَّعٍ، وَلَا مُسْتَغْنًى عَنْهُ رَبَّنَا',
      count: 1,
      source: 'رواه البخاري.',
    }
  ]
};

export const beforeFoodAzkar: AzkarCategory = {
  id: 'before-food',
  title: 'الدعاء قبل الطعام والشراب',
  azkar: [
    {
      id: 1,
      text: 'بِسْمِ اللَّهِ',
      count: 1,
      source: 'رواه أبو داود والترمذي.',
    },
    {
      id: 2,
      text: 'اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا، وَقِنَا عَذَابَ النَّارِ. بِسْمِ اللَّهِ',
      count: 1,
      source: 'رواه ابن ماجه.',
    }
  ]
};

export const travelAzkar: AzkarCategory = {
  id: 'travel',
  title: 'دعاء السفر',
  azkar: [
    {
      id: 1,
      text: 'اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ، اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَى، وَمِنَ الْعَمَلِ مَا تَرْضَى، اللَّهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا، وَاطْوِ عَنَّا بُعْدَهُ، اللَّهُمَّ أَنْتَ الصَّاحِبُ فِي السَّفَرِ، وَالْخَلِيفَةُ فِي الْأَهْلِ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ وَعْثَاءِ السَّفَرِ، وَكَآبَةِ الْمَنْظَرِ، وَسُوءِ الْمُنْقَلَبِ فِي الْمَالِ وَالْأَهْلِ',
      count: 1,
      source: 'رواه مسلم.',
    }
  ]
};

export const istikhaaraAzkar: AzkarCategory = {
  id: 'istikhara',
  title: 'دعاء الاستخارة',
  azkar: [
    {
      id: 1,
      text: 'اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ، وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ، فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ، وَتَعْلَمُ وَلَا أَعْلَمُ، وَأَنْتَ عَلَّامُ الْغُيُوبِ، اللَّهُمَّ إِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ (وتسمي حاجتك) خَيْرٌ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي - أو قال: عَاجِلِ أَمْرِي وَآجِلِهِ - فَاقْدُرْهُ لِي وَيَسِّرْهُ لِي، ثُمَّ بَارِكْ لِي فِيهِ، اللَّهُمَّ وَإِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ شَرٌّ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي - أو قال: عَاجِلِ أَمْرِي وَآجِلِهِ - فَاصْرِفْهُ عَنِّي وَاصْرِفْنِي عَنْهُ، وَاقْدُرْ لِي الْخَيْرَ حَيْثُ كَانَ، ثُمَّ ارْضِنِي بِهِ',
      count: 1,
      source: 'رواه البخاري.',
    }
  ]
};

export const homeAzkar: AzkarCategory = {
  id: 'home',
  title: 'أذكار المنزل',
  azkar: [
    {
      id: 1,
      text: 'بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى رَبِّنَا تَوَكَّلْنَا',
      count: 1,
      source: 'رواه أبو داود.',
    },
    {
      id: 2,
      text: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلِجِ وَخَيْرَ الْمَخْرَجِ، بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا',
      count: 1,
      source: 'رواه أبو داود.',
    }
  ]
};

export const clothesAzkar: AzkarCategory = {
  id: 'clothes',
  title: 'دعاء لبس الثوب الجديد',
  azkar: [
    {
      id: 1,
      text: 'الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَذَا (الثَّوْبَ)، وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ',
      count: 1,
      source: 'رواه أبو داود والترمذي.',
    }
  ]
};

export const wearingClothesAzkar: AzkarCategory = {
  id: 'wearing-clothes',
  title: 'دعاء لبس الثوب',
  azkar: [
    {
      id: 1,
      text: 'بِسْمِ اللَّهِ',
      count: 1,
      source: 'رواه الترمذي وابن ماجه.',
    }
  ]
};

export const removingClothesAzkar: AzkarCategory = {
  id: 'removing-clothes',
  title: 'دعاء وضع الثوب',
  azkar: [
    {
      id: 1,
      text: 'بِسْمِ اللَّهِ',
      count: 1,
      source: 'رواه الترمذي.',
    }
  ]
};

export const bathroomAzkar: AzkarCategory = {
  id: 'bathroom',
  title: 'أذكار دخول الخلاء',
  azkar: [
    {
      id: 1,
      text: 'بِسْمِ اللَّهِ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ',
      count: 1,
      source: 'رواه البخاري ومسلم.',
    },
    {
      id: 2,
      text: 'غُفْرَانَكَ',
      count: 1,
      source: 'رواه أبو داود والترمذي وابن ماجه.',
    }
  ]
};

// Export the array of all Azkar categories
export const allAzkarCategories: AzkarCategory[] = [
  morningAzkar,
  eveningAzkar,
  sleepAzkar,
  wakeupAzkar,
  prayerOpeningAzkar,
  afterTashahhudAzkar,
  rukuSujudAzkar,
  azanAzkar,
  betweenSujudAzkar,
  mosqueAzkar,
  wuduAzkar,
  afterFoodAzkar,
  beforeFoodAzkar,
  travelAzkar,
  istikhaaraAzkar,
  homeAzkar,
  clothesAzkar,
  wearingClothesAzkar,
  removingClothesAzkar,
  bathroomAzkar
];

// Add defaultTasbihOptions for the Tasbih component
export interface TasbihOption {
  id: string;
  text: string;
  count: number;
}

export const defaultTasbihOptions: TasbihOption[] = [
  {
    id: 'subhanAllah',
    text: 'سبحان الله',
    count: 33
  },
  {
    id: 'alhamdulillah',
    text: 'الحمد لله',
    count: 33
  },
  {
    id: 'allahuAkbar',
    text: 'الله أكبر',
    count: 34
  },
  {
    id: 'lailahaillallah',
    text: 'لا إله إلا الله',
    count: 100
  },
  {
    id: 'astaghfirullah',
    text: 'أستغفر الله',
    count: 100
  },
  {
    id: 'subhanAllahWabihamdihi',
    text: 'سبحان الله وبحمده',
    count: 100
  },
  {
    id: 'subhanAllahAlazim',
    text: 'سبحان الله العظيم',
    count: 100
  },
  {
    id: 'astaghfirullahAlazim',
    text: 'أستغفر الله العظيم',
    count: 100
  }
];
