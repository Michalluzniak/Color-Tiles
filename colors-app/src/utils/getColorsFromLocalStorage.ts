export const getColorsFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('colors') || '');
};
