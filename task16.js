var GuestList = ["Ali", "Ahmed", "Usman"];
for (var i = 0; i < GuestList.length; i++) {
    console.log(GuestList[i] + ", I would like to invite you for dinner.");
}
console.log(GuestList[1] + " can not come for dinner.");
GuestList[1] = "Zain";
for (var i = 0; i < GuestList.length; i++) {
    console.log(GuestList[i] + ", I would like to invite you for dinner.");
}
console.log("Dear Guests, now I have a bigger table for dinner.");
GuestList.push("Hadi");
GuestList.push("Mohsin");
GuestList.push("Rizwan");
for (var i = 0; i < GuestList.length; i++) {
    console.log(GuestList[i] + ", I would like to invite you for dinner.");
}
