
# 03 Functions

### Min of 2 numbers

Write a function minNumber that takes two numbers and returns their minimum.  
Ne koristiti native JS funkcije `Math.min()` i `Math.max()`.

```js
console.log(minNumber(0, 10));	// 0
console.log(minNumber(0, -10));	// -10
```

### Max of 3 numbers

Napisi funkciju koja prima 3 broja i vraca najveci.  
Ako se funkcija pozove bez argumenata neka vrati `-Infinity`.  
Ako se funckija pozove sa argumentom koji se nemoze pretvorit u broj neka vrati `NaN`.  
Parametre pokusati pretvoriti u broj pomocu `Number()` funkcije, npr. `var a = Number(a)`.  
Ne koristiti native JS funkcije `Math.min()` i `Math.max()`.  
Omoguciti da se funkcija moze pozvati i sa manje od 3 argumenta.  
Primjer outputa funkcije:

```js
console.log(maxNumber());						// -Infinity
console.log(maxNumber(1, 2, "lorem ipsum"));	// NaN
console.log(maxNumber(1, 2, 3));				// 3
console.log(maxNumber(5, 14));					// 14
console.log(maxNumber(5, "14"));				// 14
```

### Prime number

Write a JavaScript function that accepts a number as a parameter and checks if the number is prime or not.  
A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

### Bean counting

You can get the Nth character, or letter, from a string by writing "string".charAt(N), similar to how you get its length with "s".length. The returned value will be a string containing only one character (for example, "b"). The first character has position zero, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

```js
console.log(countBs("BBC"));				// 2
console.log(countChar("kakkerlak", "k"));	// 4
```

### Countdown

Using recursion write a JavaScript function that counts down from a number to 1 to console. Write a similar function that counts up from 1 to number.

```js
countDown(10);
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

countUp(10);
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
```

### Even/odd number

Operator % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to check whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

* Zero is even.
* One is odd.
* For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

```js
console.log(isEven(50));	// true
console.log(isEven(75));	// false
console.log(isEven(-1));	// ??
```

### Factorial

Using recursion write a JavaScript function to calculate the factorial of a number.  
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120  
The value of 0! is 1.

### Global and local scope #1

```js
<script>
var a = 1;
function foo() {
	var a = 2;
	console.log(a); // koja vrijednost ce se ispisati? zasto? sto treba dodati da se ispise globalna varijabla?
}
foo();
</script>
```

* Eloquent JavaScript > Functions > Parameters and scopes  
http://eloquentjavascript.net/03_functions.html#h_u4j2OhpYkg
* Eloquent JavaScript > Functions > Nested scope  
http://eloquentjavascript.net/03_functions.html#h_c/Ms2Ed/N0
* Pogledat video do 09:15 - https://www.youtube.com/watch?v=iSlSxDNarDY
* Pogledat video - https://www.youtube.com/watch?v=WqXeFiii9k0

### Global and local scope #2

```js
<script>
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
</script>
```

### Global and local scope #3

```js
<script>
var a = 1;
function foo() {
	var a = 2;
	function bar1() {
		console.log(a); // kojoj varijabli se pristupa?
	}
	var bar2 = function() {
		console.log(a); // kojoj varijabli se pristupa?
	};
	bar3 = function() {
		console.log(a); // kojoj varijabli se pristupa?
	}
	window.bar4 = function() {
		console.log(a); // kojoj varijabli se pristupa?
	}
	bar1();
	bar2();
	bar3();
	bar4();
}
foo();

// mozemo li odavde pozvati funkciju bar1()? zasto?
// mozemo li odavde pozvati funkciju bar2()? zasto?
// mozemo li odavde pozvati funkciju bar3()? zasto?
// mozemo li odavde pozvati funkciju bar4()? zasto?
</script>
```

### Global and local scope #4

```js
<script>
var a = 1;
function foo() {
	var a = 2;

	function bar() {
		var a = 3;
	}
	bar();

	if (true) {
		console.log(a); // kojoj varijabli se pristupa? koja vrijednost ce se ispisati? zasto?
	}
}
foo();
</script>
```

### Global and local scope #5

```js
<script>
var a = 1; // a je globalna varijabla

if (true) {
	var b = 1; // da li je b globalna varijabla? zasto?
}
</script>
```

### Global and local scope, hoisting #1

Explain what is variable hoisting. Write a simple example.  
Explain what is function hoisting. Write a simple example.

### Global and local scope, hoisting #2

```js
<script>
var a = 1;
function foo() {
	console.log(a); // kojoj varijabli se pristupa? koja vrijednost ce se ispisati? zasto?
	
	var a = 2;
}
foo();
</script>
```

### Global and local scope, hoisting #3

```js
<script>
var a = 1;
function foo() {
	function bar() {
		console.log(a); // kojoj varijabli se pristupa? koja vrijednost ce se ispisati? zasto?
	}
	bar();
	var a = 2;
}
foo();
</script>
```

### Global and local scope, hoisting #4

```js
<script>
var a = 1;

foo(); // pozvali smo funkciju prije njene definicije u kodu. da li ovo radi? zasto?
bar(); // pozvali smo funkciju prije njene definicije u kodu. da li ovo radi? zasto?

function foo() {
	console.log(a);
}
var bar = function() {
	console.log(a);
}
</script>
```


