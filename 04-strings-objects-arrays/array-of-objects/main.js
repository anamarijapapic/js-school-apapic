( function () {

    function Car( name, price, topSpeed ) {
        this.name = name;
        this.price = price;
        this["top speed"] = topSpeed;
    }

    let cars = [
        new Car( 'Opel Corsa 1.2 TDI', '14.780€', '160 km/h' ),
        new Car( 'Opel Corsa 1.3 TDI', '15.780€', '170 km/h' ),
        new Car( 'Opel Astra 1.4 TDI', '16.780€', '180 km/h' ),
        new Car( 'BMW 3-Series', '24.780€', '200 km/h' ),
        new Car( 'Audi A1 1.6 TDI', '24.780€', '200 km/h' ),
        new Car( 'Audi A2 1.7 TDI', '34.780€', '210 km/h' ),
        new Car( 'Audi A3 1.8 TDI', '44.780€', '220 km/h' ),
    ];

    function printCar( car ) {
        console.log( car.name + ' costs ' + car.price + ' and has a top speed of ' + car["top speed"] + '.' );
    }

    function sortCarsByName( cars ) {
        cars = [...cars].sort( ( a, b ) => a.name.localeCompare( b.name ) );
        console.log( 'Cars sorted by name:' );
        for ( car of cars ) {
            printCar( car );
        }
    }

    function sortCarsByPrice( cars ) {
        cars = [...cars].sort( ( a, b ) => a.price.localeCompare( b.price ) );
        console.log( 'Cars sorted by price:' );
        for ( car of cars ) {
            printCar( car );
        }
    }

    function carsFasterThan( cars, speed ) {
        console.log( 'Cars faster than ' + speed + 'km/h:' );
        for ( car of cars ) {
            if ( car["top speed"].slice( 0, -5 ) > speed ) {
                printCar( car );
            }
        }
    }

    sortCarsByName( cars );
    sortCarsByPrice( cars );
    carsFasterThan( cars, 200 );

} ) ();
