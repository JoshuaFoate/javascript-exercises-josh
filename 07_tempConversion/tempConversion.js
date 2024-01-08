const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * (5/9);
  if (celsius === 0) {
    return 0;
  }
  else {
    return Number(celsius.toFixed(1));
  }
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius * (9/5) + 32)
  if (fahrenheit === 0) {
    return 0;
  }
  else {
    return Number(fahrenheit.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
