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
  //
  const DEFAULT_COLORS: Colors[] = [
    { name: 'WHITE', value: '#FFFFFF' },
    { name: 'BLACK', value: '#000000' },
    { name: 'RED', value: '#FF0000' },
    { name: 'GREEN', value: '#00FF00' },
    { name: 'BLUE', value: '#0000FF' },
  ];

  const [colors, setColors] = useState<Colors[]>([]);
  const [newColor, setNewColor] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState({
    red: false,
    green: false,
    blue: false,
    saturation: false,
  });

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

  const removeColor = (color: string): void => {
    setColors(colors.filter((c) => c.value !== color));
  };

  const filteredColors: Colors[] = useMemo(() => {
    if (!filter.red && !filter.green && !filter.blue && !filter.saturation && searchTerm === '') {
      // Return original colors array if no color option is checked
      return colors;
    }
    return colors.filter((color) => {
      const [r, g, b] = hexToRgb(color.value);
      const [h, s, l] = rgbToHsl(r, g, b);
      console.log(searchTerm);
      const redOver50 = r > 127;
      const greenOver50 = g > 127;
      const blueOver50 = b > 127;
      const saturationOver50 = s > 50;

      const searchTermMatch = color.value.toLowerCase().includes(searchTerm.toLowerCase());

      if (!filter.red && !filter.green && !filter.blue && !filter.saturation) {
        return searchTermMatch;
      }

      return (
        (filter.red && redOver50 && searchTermMatch) ||
        (filter.green && greenOver50 && searchTermMatch) ||
        (filter.blue && blueOver50 && searchTermMatch) ||
        (filter.saturation && saturationOver50 && searchTermMatch)
      );
    });
  }, [colors, filter.red, filter.green, filter.blue, filter.saturation, searchTerm]);

  const sortedColors: Colors[] = filteredColors.sort((c1, c2) => {
    const [r1, g1, b1] = hexToRgb(c1.value);
    const [r2, g2, b2] = hexToRgb(c2.value);

    if (r1 !== r2) {
      return r2 - r1;
    } else if (g1 !== g2) {
      return g2 - g1;
    } else {
      return b2 - b1;
    }
  });

  return [sortedColors, setColors, removeColor, newColor, setNewColor, filter, setFilter, setSearchTerm] as const;
};
