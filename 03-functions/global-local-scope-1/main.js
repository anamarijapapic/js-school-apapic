var a = 1;
function foo() {
	var a = 2;
	console.log( a ); // koja vrijednost ce se ispisati? zasto? sto treba dodati da se ispise globalna varijabla?
    console.log( window.a );
}
foo();

/*
Ispisat ce se vrijednost 2 jer je varijabla a te vrijednosti 
u lokalnom scopeu funkcije foo, a prvo u lokalnom trazi.

Da bi se ispisala globalna varijabla treba dodati keyword window jer su globalne varijable
"zakacene" na njega, ili keyword this koji isto pokazuje na globalni window u trenutnom slucaju.
console.log(window.a); // console.log(this.a);
*/
