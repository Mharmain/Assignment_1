var fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[3]); // This will cause an index error
if (fruits.length > 3) {
    console.log("This won't be reached because the array index error was caught.");
}
else {
    console.log("Index is out of bounds, please correct it.");
}
