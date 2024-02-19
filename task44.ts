function orderSandwich(...toppings: string[]): void {
    console.log("Sandwich Order:");

    if (toppings.length === 0) {
        console.log("You ordered an empty sandwich.");
    }
    else {
        console.log("Toppings:");
        for (let topping of toppings) {
            console.log("- " + topping);
        }
        console.log("Enjoy your sandwich!");
    }
    console.log();
}
orderSandwich("Ham", "Cheese", "Lettuce");
orderSandwich("Turkey", "Tomato");
orderSandwich();