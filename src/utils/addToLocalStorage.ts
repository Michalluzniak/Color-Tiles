import { Colors } from '../hooks/useColorFilter';

export const addToLocalStorage = (name: string, item: Colors[]): void => {
  localStorage.setItem('colors', JSON.stringify(item));
};
