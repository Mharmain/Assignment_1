function make_great(MagiciansNames: string[]): void {
    for (let i = 0; i < MagiciansNames.length; i++) {
        MagiciansNames[i] = "Great " + MagiciansNames[i];
    }
}
function show_magicians(MagiciansNames: string[]): void {
    console.log("The names of magicians are:")
    for (let i = 0; i < MagiciansNames.length; i++) {
        console.log((i + 1) + ": " + MagiciansNames[i]);
    }
}
let magicians: string[] = ["Zoada", "Ramla", "Cinchu"];
show_magicians(magicians);
make_great(magicians);
show_magicians(magicians);