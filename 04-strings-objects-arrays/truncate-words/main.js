function truncateWords(str, n) {
    return str.split(' ').slice(0, n).join(' ');
}

console.log(truncateWords('Lorem ipsum dolor sit amet.', 3));	// Lorem ipsum dolor