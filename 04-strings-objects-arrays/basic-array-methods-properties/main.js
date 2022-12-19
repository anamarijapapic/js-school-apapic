var arr = [ 1, 2, 3, 4, 5 ];
console.log( arr.length) ; // sto je length property? -> vraca broj elemenata u nizu (ili ga moze setirati na fixnu duljinu)

// Mutator methods: 
// (permanantly modify the array in place) 
arr.push( 6 );                                  // dodaje element na kraj niza
arr.unshift( 0 );                               // dodaje element na pocetak niza
arr.pop();                                      // uklanja element s kraja niza i vraca uklonjeni element
arr.shift();                                    // uklanja element s pocetka niza i vraca uklonjeni element
arr.splice( 1, 0, 'splice' );                   // uklanja n elemenata iz niza pocevsi s x pozicije, 
                                                // i moze dodati nove elemente pocevsi od te pozicije
console.log( arr.reverse() );                   // vraca niz s elementima u obrnutom redosijedu
console.log( arr.sort( ( a, b ) => a - b ) );   // sortira niz prema kriteriju iz callback funkcije (koja returna -1, 0, 1)

// Accessor methods:
// (do not modify the array)
console.log( arr.join( ' ' ) );             // spaja elemente niza u string sa danim delimiterom
console.log( arr.indexOf( 3 ) );            // vraca index na kojem se trazeni element nalazi u nizu (-1 ako nije pronaden)
console.log( arr.filter( x => x % 2 ) );    // vraca niz od elemenata koji su zadovoljili kriterije callback funkcije

// opisi i demonstriraj sto radi svaka od metoda nabrojanih gore. koje od ovih metoda mijenjaju array in place a koje ne?
// koje od ovih metoda nerade u IE8? zasto nerade?
// indexOf() ne radi u IE8 -> not supported
// filter() ne radi u IE8 -> not supported
