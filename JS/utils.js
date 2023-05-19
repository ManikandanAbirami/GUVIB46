const sum = (...arr) => {
  return arr.reduce((accumlator, currentValue) => accumlator + currentValue);
};
const average = (...arr) => {
  return sum(...arr) / arr.length;
};

export { sum, average };
