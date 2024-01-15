const add = function(a, b) {
  let sum = a + b;
  return sum;
};

const subtract = function(a, b) {
	let sum = a - b;
  return sum;
};

const sum = function(array) {
  let sum = 0;
  if (array.length === 0) {
    return 0;
  }
  else if (array.length === 1) {
    return array[0];
  }
  else {
    for (i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  }
};

const multiply = function(array) {
  let product = 1;
  for (i = 0; i < array.length; i++) {
    product *= array[i];
  }
  return product;
};

const power = function(a, b) {
	let power = a**b;
  return power;
};

const factorial = function(a) {
  let factorial = 1
	for (i = a; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
