let fahrenheit = prompt(
  "Enter a number value in fahrenheit and we will convert it to celcius"
);

function convertToCelcius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}
let celcius = convertToCelcius(fahrenheit);

function describeTemperature() {
  if (celcius < 0) {
    return `${fahrenheit} fahrenheit is ${celcius} celcius. That would feel very cold`;
  } else if (celcius < 20) {
    return `${fahrenheit} fahrenheit is ${celcius} celcius. That would feel cold`;
  } else if (celcius < 30) {
    return `${fahrenheit} fahrenheit is ${celcius} celcius. That would feel warm`;
  } else if (celcius < 40) {
    return `${fahrenheit} fahrenheit is ${celcius} celcius. That would feel hot`;
  } else if (celcius >= 40) {
    return `${fahrenheit} fahrenheit is ${celcius} celcius. That would feel very hot`;
  }
}

alert(describeTemperature());
