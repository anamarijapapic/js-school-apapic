( function () {

    /*
     jjjjjjjj
    i # # # #\n
    i# # # # \n
    i # # # #\n
    i# # # # \n
    i # # # #\n
    i# # # # \n
    i # # # #\n
    i# # # # \n
    */

    const size = 8;

    let pattern = "";

    for ( let i = 0; i < size; i++ ) {
        for ( let j = 0; j < size; j++ ) {
            pattern += ( i % 2 && ! ( j % 2 ) || ! ( i % 2 ) && j % 2 ) ? "#" : " ";
        }
        pattern += "\n";
    }

    console.log( pattern );

} ) ();
