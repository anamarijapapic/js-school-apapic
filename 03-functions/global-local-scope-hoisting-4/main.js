var a = 1;

foo(); // pozvali smo funkciju prije njene definicije u kodu. da li ovo radi? zasto?
/*
Radi.
Function hoisting podize cijelu deklaraciju funkcije foo (value hoisting) 
na vrh trenutnog scopea i mozemo je pozvati prije linije gdje je deklarirana.
*/
bar(); // pozvali smo funkciju prije njene definicije u kodu. da li ovo radi? zasto?
/*
Ne radi.
Function hoisting ne radi sa function expressionsima.
Bacit ce Uncaught TypeError: bar is not a function.
*/

function foo() {
	console.log( a );
}
var bar = function() {
	console.log( a );
}
