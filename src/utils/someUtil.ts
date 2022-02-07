export const someUtilFunc1 = (number) => number * 2;
export const someUtilFunc2 = (number) => number / 2;
export const putComma = (number) => {
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
