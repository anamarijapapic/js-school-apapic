function isString(param) {
    return typeof param === 'string' || param instanceof String;
}

console.log(isString());		// false
console.log(isString(2));		// false
console.log(isString(''));		// true
console.log(isString('abc'));	// true