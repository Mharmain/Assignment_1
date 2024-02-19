function show_magicians(MagiciansNames: string[]): void {
    console.log("The names of magicians are:")
    for (let i = 0; i < MagiciansNames.length; i++) {
        console.log((i + 1) + ": " + MagiciansNames[i]);
    }
}
let magicians: string[] = ["Zoada", "Ramla", "Cinchu"];
show_magicians(magicians);