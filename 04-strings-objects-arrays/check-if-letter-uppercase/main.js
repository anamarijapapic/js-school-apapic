( function () {

    function isUpperCase( str, pos ) {
        return str.charAt( pos ) === str.charAt( pos ).toUpperCase();
    }

    console.log( isUpperCase( 'Hello World.', 0 ) );	// true
    console.log( isUpperCase( 'Hello World.', 1 ) );	// false
    console.log( isUpperCase( 'Hello World.', 6 ) );	// true

} ) ();
