if ('') {
	console.log('Block #1');
}
if (' ') {
	console.log('Block #2');
}
if ('  ') {
	console.log('Block #3');
}
if (0) {
	console.log('Block #4');
}
if ('0') {
	console.log('Block #5');
}
if (1) {
	console.log('Block #6');
}
if ('1') {
	console.log('Block #7');
}

/* 
ispisat ce se: 
Block #2 - non-empty string -> truthy, 
Block #3 - non-emty string -> truthy, 
Block #5 - non-empty string -> truthy, 
Block #6 - all numbers except 0, -0, 0n -> truthy, 
Block #7 - non-empty string -> truthy

nece se ispisati:
Block #1 - empty string -> falsy, 
Block #4 - 0 -> falsy
*/