function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];

    for (let magician of magicians) {
        greatMagicians.push(magician + " the Great");
    }

    return greatMagicians;
}
let magiciansArray: string[] = ["Zoada", "Ramla", "Cinchu"];
console.log("Original Magicians:");
show_magicians(magiciansArray);
let greatMagiciansArray: string[] = make_great([...magiciansArray]);
console.log("\nOriginal Magicians (unchanged):");
show_magicians(magiciansArray);
console.log("\nGreat Magicians:");
show_magicians(greatMagiciansArray);