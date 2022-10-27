function maxNumber(a, b , c) {
    if (! arguments.length) {
        return -Infinity;
    }

    let numbers = [];
    for (let i = 0; i < arguments.length; i++) {
        numbers.push(Number(arguments[i]));
    }

    for (let i = 0; i < numbers.length; i++) {
        if (isNaN(numbers[i])) {
            return NaN;
        }
    }

    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max;
}

console.log(maxNumber());						// -Infinity
console.log(maxNumber(1, 2, "lorem ipsum"));	// NaN
console.log(maxNumber(1, 2, 3));				// 3
console.log(maxNumber(5, 14));					// 14
console.log(maxNumber(5, "14"));				// 14