type Colors = {
  name: string;
  value: string;
};

export const doesColorNotExist = (colors: Colors[], newColor: string) => {
  return !colors.find((color) => color.value === newColor);
};
