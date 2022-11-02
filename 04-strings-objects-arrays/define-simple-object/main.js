let car = {
    'name': 'Audi A1 1.6 TDI',
    'price': '24.780€',
    'top speed': '200 km/h',

    toString() {
        return this.name + ' costs ' + this.price + ' and has a top speed of ' + this["top speed"] + '.';
    }
}

function printCar(car) {
    console.log(car.toString());
}

printCar(car); // Audi A1 1.6 TDI costs 24.780€ and has a top speed of 200 km/h.