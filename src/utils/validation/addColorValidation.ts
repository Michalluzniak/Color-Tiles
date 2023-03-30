export const addColorValidation = (inputValue: string) => {
  const hexRegex = /^#([a-f\d]{3,4}|[a-f\d]{6}|[a-f\d]{8})$/;

  const isInputValid = inputValue.match(hexRegex);

  return !!isInputValid;
};
