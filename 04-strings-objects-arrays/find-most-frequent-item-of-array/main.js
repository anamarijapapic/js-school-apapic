( function () {

    function findMostPopularItem( arr ) {
        dict = {};
        arr.forEach( ( el ) => dict[el] ? dict[el]++ : dict[el] = 1 );
        return Object.keys( dict ).sort( ( a, b ) => dict[b] - dict[a] )[0];
    }

    console.log( findMostPopularItem( [ 1, 1, 1, 2, 2 ] ) );		// 1
    console.log( findMostPopularItem( [ 'a', 'b', 'b', 'c' ] ) );	// b

} ) ();
