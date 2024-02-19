function make_album(artist: string, title: string, tracks?: number): object {
    let album: object = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        (album as any).tracks = tracks;
    }
    return album;
}

let album1: object = make_album("Artist1", "Album1", 10);
let album2: object = make_album("Artist2", "Album2");
let album3: object = make_album("Artist3", "Album3", 15);

console.log(album1);
console.log(album2);
console.log(album3);
let album4: object = make_album("Artist4", "Album4", 8);
console.log(album4);