( function () {

    function humanizeNumber( num ) {
        ordinalNum = '' + num;

        if ( ordinalNum.endsWith( '11' ) || ordinalNum.endsWith( '12' ) || ordinalNum.endsWith( '13' ) ) {
            ordinalNum += "th";
        }
        else if ( ordinalNum.endsWith( '1' ) ) {
            ordinalNum += 'st';
        }
        else if ( ordinalNum.endsWith( '2' ) ) {
            ordinalNum += 'nd';
        }
        else if ( ordinalNum.endsWith( '3' ) ) {
            ordinalNum += 'rd';
        }
        else {
            ordinalNum += 'th';
        }

        return ordinalNum;
    }

    console.log( humanizeNumber( 1 ) );		// 1st
    console.log( humanizeNumber( 2 ) );		// 2nd
    console.log( humanizeNumber( 3 ) );		// 3rd
    console.log( humanizeNumber( 4 ) );		// 4th
    console.log( humanizeNumber( 9 ) );		// 9th
    console.log( humanizeNumber( 10 ) );	// 10th
    console.log( humanizeNumber( 11 ) );	// 11th
    console.log( humanizeNumber( 12 ) );	// 12th
    console.log( humanizeNumber( 13 ) );	// 13th
    console.log( humanizeNumber( 21 ) );	// 21st
    console.log( humanizeNumber( 302 ) );	// 302nd
    console.log( humanizeNumber( 1103 ) );	// 1103rd

} ) ();
