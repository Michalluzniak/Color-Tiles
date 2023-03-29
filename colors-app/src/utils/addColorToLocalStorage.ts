export const addColorToLocalStorage = (color: string): void => {
  const doesColorsArrayExist = localStorage.getItem('colors') !== null;

  const colors: string[] = doesColorsArrayExist ? JSON.parse(localStorage.getItem('colors')!) : [];

  colors.push(color);

  localStorage.setItem('colors', JSON.stringify(colors));
};
