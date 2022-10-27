function isEven(num) {
    num = Math.abs(num);
    if (num == 0) {
        return true;
    }
    if (num == 1) {
        return false;
    }
    return isEven(Math.abs(num) - 2);
}

console.log(isEven(50));	// true
console.log(isEven(75));	// false
console.log(isEven(-1));	// ??

/*
Behavior on -1:
Uncaught RangeError: Maximum call stack size exceeded
Why?
-1 - 2 -> ... -> goes to -infinity and will never be equal to 0 or 1 to break recursion
Fix: num = Math.abs(num);
*/
