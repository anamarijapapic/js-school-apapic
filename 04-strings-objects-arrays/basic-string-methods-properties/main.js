var str = '  Lorem ipsum, lorem ipsum.  ';

console.log(str.length); // sto vraca length property? -> duljina stringa (29)

console.log(str.toUpperCase());     // -> string u UPPERCASEU ('  LOREM IPSUM, LOREM IPSUM.  ')
console.log(str.toLowerCase());     // -> string u lowercaseu ('  lorem ipsum, lorem ipsum.  ')
console.log(str.indexOf('ipsum'));  // -> index na kojem pocinje substring "ipsum" (8)
console.log(str.split(' '));        // -> array stringova nastalih odvajanjem stringa po danom characteru (' ') 
                                    //    (['', '', 'Lorem', 'ipsum,', 'lorem', 'ipsum.', '', ''])
console.log(str.slice(-8, -3));     // -> string sekciju izmedu startnog indexa (-8) i end indexa (-3) ('ipsum')
console.log(str.trim());            // -> string s uklonjenim whitespaceovima s početka i kraja ('Lorem ipsum, lorem ipsum.')
console.log(str.charAt(2));         // -> string representing a character na index poziciji 2 ('L')

// sto vraca svaka od ovih metoda? koje od ovih metoda nerade u IE8? zasto nerade?
// trim() ne radi u IEB -> not supported