//temparature in Kelvin//
const kelvin=293;
//Kelvin to celsius//
const celsius=kelvin-273;
//Celsius to fahrenheit//
let fahrenheit = celsius * (9 / 5) + 32;
//No decimal number//
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)