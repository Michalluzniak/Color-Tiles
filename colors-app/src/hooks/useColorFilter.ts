import { useEffect, useMemo, useState } from 'react';
import { addToLocalStorage } from '../utils/addToLocalStorage';
import { hexToRgb } from '../utils/colorsForm/hexToRgb';
import { rgbToHsl } from '../utils/colorsForm/rgbToHsl';

import { getColorsFromLocalStorage } from '../utils/getFromLocalStorage';

export interface Colors {
  name: string;
  value: string;
}

export const useColorFilter = () => {
  const DEFAULT_COLORS: Colors[] = [
    { name: 'WHITE', value: '#FFFFFF' },
    { name: 'BLACK', value: '#000000' },
    { name: 'RED', value: '#FF0000' },
    { name: 'GREEN', value: '#00FF00' },
    { name: 'BLUE', value: '#0000FF' },
  ];

  const [colors, setColors] = useState<Colors[]>([]);
  const [newColor, setNewColor] = useState('');
  const [filter, setFilter] = useState({
    red: true,
    green: false,
    blue: false,
    saturation: false,
  });

  console.log(filter);

  useEffect(() => {
    const savedColors = getColorsFromLocalStorage('colors');
    if (savedColors) {
      setColors(savedColors);
    } else {
      setColors(DEFAULT_COLORS);
    }
  }, []);

  useEffect(() => {
    if (colors.length > 1) addToLocalStorage('colors', colors);
  }, [colors]);

  const removeColor = (color: Colors) => {
    console.log('a');
    setColors(colors.filter((c) => c.value !== color.value));
    console.log(colors);
  };

  const filteredColors = useMemo(() => {
    return colors.filter((color) => {
      const [r, g, b] = hexToRgb(color.value);
      const [h, s, l] = rgbToHsl(r, g, b);

      const redOver50 = r > 127;
      const greenOver50 = g > 127;
      const blueOver50 = b > 127;
      const saturationOver50 = s > 50;

      return (
        (filter.red && redOver50) ||
        (filter.green && greenOver50) ||
        (filter.blue && blueOver50) ||
        (filter.saturation && saturationOver50)
      );
    });
  }, [colors, filter.red, filter.green, filter.blue, filter.saturation]);

  return [colors, setColors, removeColor, newColor, setNewColor, filter, setFilter];
};
