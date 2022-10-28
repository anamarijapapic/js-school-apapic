function concatenateString(str, n = 1) {
    newStr = '';
    for (let i = 0; i < n; i++) {
        newStr += str;
    }
    return newStr;
}

console.log(concatenateString('lorem'));	// lorem
console.log(concatenateString('lorem', 0));	// 
console.log(concatenateString('lorem', 3));	// loremloremlorem