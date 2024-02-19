var ordinaNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < ordinaNumbers.length; i++) {
    if (ordinaNumbers[i] == 1) {
        console.log(ordinaNumbers[i] + "st");
    }
    else if (ordinaNumbers[i] == 2) {
        console.log(ordinaNumbers[i] + "nd");
    }
    else if (ordinaNumbers[i] == 3) {
        console.log(ordinaNumbers[i] + "rd");
    }
    else {
        console.log(ordinaNumbers[i] + "th");
    }
}
