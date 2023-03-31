export const expandHexColor = (hexColor: string) => {
  const [r, g, b] = hexColor
    .substring(1)
    .split('')
    .map((char) => char.repeat(2));
  return `#${r}${g}${b}`;
};
