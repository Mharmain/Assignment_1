function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("A " + size + "-sized shirt will be printed with the message: \"" + message + "\".");
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "I Love Programming");
