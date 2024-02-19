function createCar(manufacturer: string, modelName: string, options: { [key: string]: any }): object {
    let car: { [key: string]: any } = {
        manufacturer: manufacturer,
        modelName: modelName,
        ...options
    };
    return car;
}
let carInfo: object = createCar("Toyota", "Camry", { color: "Blue", year: 2022, features: ["Navigation", "Sunroof"] });
console.log(carInfo);