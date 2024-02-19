function city_country(cityName, CountryName) {
    var a = cityName + ", " + CountryName;
    return a;
}
var locat = city_country("Lahore", "Pakistan");
console.log(locat);
locat = city_country("Gujrat", "India");
console.log(locat);
locat = city_country("Tokyo", "Japan");
console.log(locat);
