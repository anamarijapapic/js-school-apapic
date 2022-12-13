var a = 1;
function foo() {
	console.log( a ); // kojoj varijabli se pristupa? koja vrijednost ce se ispisati? zasto?
	
	var a = 2;
}
foo();

/*
Pristupa se varijabli a iz lokalnog scopea funkcije foo.
Ispisana vrijednost bit ce undefined jer hoista deklaraciju, ali ne i vrijednost. 

Variable hoisting zapravo cini:
function foo() {
    var a;
    
	console.log( a );
	
	a = 2;
}
*/
