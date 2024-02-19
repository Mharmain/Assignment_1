function show_magicians(MagiciansNames) {
    console.log("The names of magicians are:");
    for (var i = 0; i < MagiciansNames.length; i++) {
        console.log((i + 1) + ": " + MagiciansNames[i]);
    }
}
var magicians = ["Zoada", "Ramla", "Cinchu"];
show_magicians(magicians);
