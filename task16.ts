let GuestList: string[] = ["Ali", "Ahmed", "Usman"];
for (let i = 0; i < GuestList.length; i++) {
    console.log(GuestList[i] + ", I would like to invite you for dinner.");
}
console.log(GuestList[1] + " can not come for dinner.");
GuestList[1] = "Zain";
for (let i = 0; i < GuestList.length; i++) {
    console.log(GuestList[i] + ", I would like to invite you for dinner. So I am inviiting three more guests for dinner");
}
console.log("Dear Guests, now I have a bigger table for dinner.");
GuestList.push("Hadi");
GuestList.push("Mohsin");
GuestList.push("Rizwan");
for (let i = 0; i < GuestList.length; i++) {
    console.log(GuestList[i] + ", I would like to invite you for dinner.");
}