// Variable hoisting
/*
Default JS behavior where interpreter moves all variable declarations to the top of the current scope.
 var:
 - Type 2 behavior: 
 Being able to reference a variable in its scope before the line it is declared, 
 without throwing a ReferenceError, but the value is always undefined. ("Declaration hoisting")
 let:
 -Type 3 behavior:
 (lexical declarations)
 The declaration of the variable causes behavior changes in its scope before the line in which it is declared.
Only hoist the declaration but not its value.
*/

alert(example1);

var example1 = "Variable hoisting";

// Function hoisting
/*
Default JS behavior where interpreter moves all function declarations to the top of the current scope.
 - Type 1 behavior: 
 Being able to use a variable's value in its scope before the line it is declared. ("Value hoisting")
Function hoisting only works with function declarations — not with function expressions.
*/

example2();

function example2() {
    alert("Function hoisting");
}