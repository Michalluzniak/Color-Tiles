import { Colors } from '../hooks/useColorFilter';

export const getColorsFromLocalStorage = (name: string): Colors[] | undefined => {
  if (localStorage.getItem(name)) {
    return JSON.parse(localStorage.getItem(name) || '[]');
  }
};
