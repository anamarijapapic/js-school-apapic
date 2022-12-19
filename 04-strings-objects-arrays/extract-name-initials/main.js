( function () {

    function getInitials( str ) {
        initials = [];
        fullName = str.split( ' ' );
        for ( namePart of fullName ) {
            initials.push( namePart[0] + '.' );
        }
        return initials.join( ' ' );
    }

    console.log( getInitials( 'John Doe' ) );		// J. D.
    console.log( getInitials( 'Donald Trump' ) );	// D. T.

} ) ();
