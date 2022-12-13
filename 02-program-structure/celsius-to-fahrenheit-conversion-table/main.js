( function() {

    let line = [];
    for ( let c = -50; c < 50; c += 5 ) {
        let f = ( 9 / 5 ) * c + 32;
        line.push( f );
        if ( line.length == 5 ) {
            console.log( line.join( "\t" ) );
            line = [];
        }
    }

}() );
