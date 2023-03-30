export const hexToRgb = (hex: string): [number, number, number] => {
  //   const hexMatch = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  //   if (!hexMatch) {
  //     return null;
  //   }

  //   const [, r, g, b] = hexMatch;
  //   return { r: parseInt(r, 16), g: parseInt(g, 16), b: parseInt(b, 16) };
  hex = hex.replace('#', '');

  // Check if the hex string has a valid length
  if (hex.length !== 6) {
    // return null;
  }

  // Convert the hex string to RGB values
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  // Check if the RGB values are valid
  if (isNaN(r) || isNaN(g) || isNaN(b)) {
    // return null;
  }

  return [r, g, b];
};
