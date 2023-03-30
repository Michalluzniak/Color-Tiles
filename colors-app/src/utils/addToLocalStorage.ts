export const addToLocalStorage = (name: string, item: any): void => {
  localStorage.setItem('colors', JSON.stringify(item));
};
