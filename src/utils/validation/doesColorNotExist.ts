import { expandHexColor } from '../expandHexColor';

type Colors = {
  name: string;
  value: string;
};

export const doesColorNotExist = (colors: Colors[], newColor: string): boolean => {
  return !colors.find((color) => color.value === expandHexColor(newColor));
};
