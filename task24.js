var string1 = 'hello';
var string2 = 'world';
var number1 = 10;
var number2 = 5;
var array1 = [1, 2, 3, 4, 5];
// Tests for equality and inequality with strings
console.log("\nTests for equality and inequality with strings:");
console.log(string1 === string1);
console.log(string1 !== string2);
console.log(string1 === 'Hello');
console.log(string2 !== 'World');
// Tests using the lower case function
console.log("\nTests using the lower case function:");
console.log(string1.toLowerCase() === 'hello');
console.log(string2.toLowerCase() === 'WORLD');
// Numerical tests
console.log("\nNumerical tests:");
console.log(number1 > number2);
console.log(number1 < number2);
console.log(number1 >= number2);
console.log(number1 <= number2);
// Tests using "and" and "or" operators
console.log("\nTests using 'and' and 'or' operators:");
console.log((number1 > 5) && (number2 < 10));
console.log((number1 > 10) || (number2 < 5));
console.log((number1 > 10) && (number2 < 5));
// Test whether an item is in an array
console.log("\nTest whether an item is in an array:");
console.log(array1.includes(3));
console.log(array1.includes(6));
// Test whether an item is not in an array
console.log("\nTest whether an item is not in an array:");
console.log(!array1.includes(6));
console.log(!array1.includes(3));
