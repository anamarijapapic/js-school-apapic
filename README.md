
# 03 Functions

### Max of 3 numbers

Napisi funkciju koja prima 3 broja i vraca najveci.  
Ako se funkcija pozove bez argumenata neka vrati `-Infinity`.  
Ako se funckija pozove sa argumentom koji se nemoze pretvorit u broj neka vrati `NaN`.  
Parametre pokusati pretvoriti u broj pomocu `Number()` funkcije, npr. `var a = Number(a)`.  
Omoguciti da se funkcija moze pozvati i sa manje od 3 argumenta.  
Primjer outputa funkcije:

```js
maxNumber();					// -Infinity
maxNumber(1, 2, "lorem ipsum");	// NaN
maxNumber(1, 2, 3);				// 3
maxNumber(5, 14);				// 14
maxNumber(5, "14");				// 14
```

### Prime number

Write a JavaScript function that accepts a number as a parameter and checks if the number is prime or not.  
A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

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

### Factorial

Using recursion write a JavaScript function to calculate the factorial of a number.  
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120  
The value of 0! is 1.


