( function() {

    do {
        let num = Number( prompt( "Unesite broj:" ) );
        if ( ! num ) {
            console.log( "Unijeli ste 0 ili nevaljali broj, prekid." );
        }
        else if ( num % 2 ) {
            console.log( "Broj " + num  + " je neparan." );
        }
        else {
            console.log( "Broj " + num  + " je paran." );
        }
    } while ( ! Number.isNaN( num ) && Number.isInteger( num ) && num !== 0 );

}() );
