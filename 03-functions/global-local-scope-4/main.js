var a = 1; // globalni scope
function foo() {
	var a = 2; // lokalni scope funkcije foo

	function bar() {
		var a = 3; // lokalni scope funkcije bar
	}
	bar();

	if (true) {
		console.log(a); // kojoj varijabli se pristupa? koja vrijednost ce se ispisati? zasto?
	}
}
foo();

/*
Pristupa se i ispisat ce se varijabla a vrijednosti 2 iz lokalnog scopea funkcije foo.
Jer trazi varijable iz lokalnog prema globalnom scopeu.
*/