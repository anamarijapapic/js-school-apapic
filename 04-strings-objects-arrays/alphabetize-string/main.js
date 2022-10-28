function alphabetizeString(str) {
    return str.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('').trim();
}

console.log(alphabetizeString('Lorem ipsum'));	// Leimmoprsu
console.log(alphabetizeString('gfedcba'));	// abcdefg