const sum = (a, b) => {
  if (!b && a) return a;
  if (typeof a === 'string' || typeof b === 'string' || !a || !b) {
    return 'error';
  }
  return a + b;
};
const substract = (a, b) => {
  if (!b && a) return a;
  if (typeof a === 'string' || typeof b === 'string' || !a || !b) {
    return 'error';
  }
  return a - b;
};
const multiply = (a, b) => {
  if (!b && a) return a;
  if (typeof a === 'string' || typeof b === 'string' || !a || !b) {
    return 'error';
  }
  return a * b;
};
const divide = (a, b) => {
  if (!b && a) return a;
  if (typeof a === 'string' || typeof b === 'string' || !a || !b) {
    return 'error';
  }
  return a / b;
};


module.exports = {
  sum,
  substract,
  multiply,
  divide
};