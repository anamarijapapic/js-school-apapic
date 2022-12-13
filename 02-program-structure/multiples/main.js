( function() {

    let num = Number( prompt( "Unesite broj:", "" ) );
    
    if ( ! num ) {
        console.log( "0 je visekratnik broja " + num );
    }
    if ( num !== 0 && ! ( num % 2 ) ) {
        console.log( "2 je visekratnik broja " + num );
    }
    if ( num !== 0 && ! ( num % 3 ) ) {
        console.log( "3 je visekratnik broja " + num );
    }
    if ( num !== 0 && ! ( num % 5 ) ) {
        console.log( "5 je visekratnik broja " + num );
    }
    if ( num !== 0 && ! ( num % 7 ) ) {
        console.log( "7 je visekratnik broja " + num );
    }

}() );
