function city_country(cityName: string, CountryName: string): string {
    let a: string = cityName + ", " + CountryName;
    return a;
}
let locat: string = city_country("Lahore", "Pakistan");
console.log(locat);
locat = city_country("Gujrat", "India");
console.log(locat);
locat = city_country("Tokyo", "Japan");
console.log(locat);