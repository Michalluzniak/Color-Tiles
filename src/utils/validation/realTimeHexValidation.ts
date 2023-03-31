export const realTimeHexValidation = (input: string): boolean => {
  const hexRegex = /^#[0-9a-fA-F]{0,8}$/;
  return hexRegex.test(input);
};
