( function () {

    function isPrimeNumber( num ) {
        if ( num <= 1 ) {
            return false;
        }

        for ( let i = 2; i < num; i++ ) {
            if ( ! ( num % i ) ) {
                return false;
            }
        }

        return true;
    }

    console.log( isPrimeNumber( -2 ) );	// false
    console.log( isPrimeNumber( 1 ) );	// false
    console.log( isPrimeNumber( 7 ) );	// true
    console.log( isPrimeNumber( 13 ) );	// true

} ) ();
