function orderSandwich() {
    var toppings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        toppings[_i] = arguments[_i];
    }
    console.log("Sandwich Order:");
    if (toppings.length === 0) {
        console.log("You ordered an empty sandwich.");
    }
    else {
        console.log("Toppings:");
        for (var _a = 0, toppings_1 = toppings; _a < toppings_1.length; _a++) {
            var topping = toppings_1[_a];
            console.log("- " + topping);
        }
        console.log("Enjoy your sandwich!");
    }
    console.log();
}
orderSandwich("Ham", "Cheese", "Lettuce");
orderSandwich("Turkey", "Tomato");
orderSandwich();
