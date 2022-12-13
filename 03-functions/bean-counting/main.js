( function() {

    function countBs( str ) {
        return countChar( str, 'B' );
    }

    function countChar( str, ch ) {
        let cnt = 0;
        for ( let i = 0; i < str.length; i++ ) {
            if ( str[i] == ch ) {
                cnt++;
            }
        }
        return cnt;
    }

    console.log( countBs( "BBC" ) );				// 2
    console.log( countChar( "kakkerlak", "k" ) );	// 4

}() );
