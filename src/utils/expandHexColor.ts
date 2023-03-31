export const expandHexColor = (hexColor: string) => {
  if (hexColor.substring(1).length !== (3 || 4)) return hexColor;

  const [r, g, b] = hexColor
    .substring(1)
    .split('')
    .map((char) => char.repeat(2));
  return `#${r}${g}${b}`;
};
