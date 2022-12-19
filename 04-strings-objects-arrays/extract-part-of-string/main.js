( function () {

    function extractString( str, pos ) {
        return str.slice( 0, pos );
    }

    console.log( extractString( 'Lorem ipsum dolor sit.', 5 ) );	// Lorem

} ) ();
