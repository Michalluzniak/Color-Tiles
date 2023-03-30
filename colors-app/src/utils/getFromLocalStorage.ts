export const getColorsFromLocalStorage = (name: string) => {
  if (localStorage.getItem(name)) {
    return JSON.parse(localStorage.getItem(name) || '[]');
  }
};
