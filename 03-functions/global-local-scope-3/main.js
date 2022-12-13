var a = 1;
function foo() {
	var a = 2;
	function bar1() {
		console.log( a ); // kojoj varijabli se pristupa? -> varijabla a iz lokalnog scopea funckcije foo
	}
	var bar2 = function() {
		console.log( a ); // kojoj varijabli se pristupa? -> varijabla a iz lokalnog scopea funckcije foo
	};
	bar3 = function() {
		console.log( a ); // kojoj varijabli se pristupa? -> varijabla a iz lokalnog scopea funckcije foo
	}
	window.bar4 = function() {
		console.log( a ); // kojoj varijabli se pristupa? -> varijabla a iz lokalnog scopea funckcije foo
	}
	bar1();
	bar2();
	bar3();
	bar4();
}
foo();

// mozemo li odavde pozvati funkciju bar1()? zasto?
// -> ne, nalazi se u lokalnom scopeu funkcije foo, a ovdje je globalni scope
// mozemo li odavde pozvati funkciju bar2()? zasto?
// -> ne, nalazi se u lokalnom scopeu funkcije foo, a ovdje je globalni scope
// mozemo li odavde pozvati funkciju bar3()? zasto?
// -> da, ona se nalazi u globalnom scopeu
// mozemo li odavde pozvati funkciju bar4()? zasto?
// -> da, ona se nalazi u globalnom scopeu
