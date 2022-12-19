( function () {

    function isBlank( param ) {
        if ( typeof param !== 'string' && ! ( param instanceof String ) ) {
            return false;
        }
        return ! ( param.length );
    }

    console.log( isBlank( 2 ) );		// false
    console.log( isBlank( '' ) );		// true
    console.log( isBlank( 'abc' ) );	// false

} ) ();
