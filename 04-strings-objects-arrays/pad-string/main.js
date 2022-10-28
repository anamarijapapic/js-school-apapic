// function padString(str, padStr, length) {
//     return str.padStart(length, padStr);
// }

function padString(str, padStr, length) {
    newStr = '';
    padLength = length - str.length;
    for (let i = 0; i < padLength; i++) {
        for (let j = 0; j < padStr.length; j++) {
            newStr += padStr.charAt(j);
            if (newStr.length === padLength) {
                i = padLength;
                break;
            }
        }
    }
    newStr += str;
    return newStr;
}

console.log(padString('2', '-', 5));			// ----2
console.log(padString('cat', '-', 5));			// --cat
console.log(padString('house', '-', 5));		// house
console.log(padString('lorem ipsum', '-', 5));	// lorem ipsum

console.log(padString('2', '0', 7));			// 0000002
console.log(padString('15', '0', 7));			// 0000015
console.log(padString('3014', '0', 7));			// 0003014