var a = 1;
function foo() {
	var a = 2;
	function bar() {
		var a = 3;
		console.log(a); // koja vrijednost ce se ispisati? zasto?
		// mozemo li odavde pristupiti i ispisati varijablu "a" koja ima vrijednost "2"
        
	}
	bar();
}
foo();

/*
Ispisat ce se vrijednost 3 jer je varijabla a te vrijednosti u lokalnom scopeu funkcije bar.

Varijabla a vrijednosti 2 je u lokalnom scopeu funkcije foo 
i ne mozemo joj pristupiti i ispisati je unutar scopea funkcije bar.
*/