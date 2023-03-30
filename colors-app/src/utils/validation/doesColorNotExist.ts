import React from 'react';

type Colors = {
  name: string;
  value: string;
};

export const doesColorNotExist = (colors: Colors[], newColor: string) => {
  return !colors.find((color: any) => color.value === newColor);
};
