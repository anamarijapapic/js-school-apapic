var a = 1;
function foo() {
	function bar() {
		console.log( a ); // kojoj varijabli se pristupa? koja vrijednost ce se ispisati? zasto?
	}
	bar();
	var a = 2;
}
foo();

/*
Pristupa se varijabli a iz lokalnoh scopea funkcije foo
(funkcija bar je zawrapana u funkciju foo -> scope chain).
Ispisana vrijednost bit ce undefined jer hoista deklaraciju, ali ne i vrijednost.

Variable hoisting zapravo cini:
function foo() {
    var a;
    
	function bar() {
		console.log( a );
	}
	bar();
	
	a = 2;
}
*/
