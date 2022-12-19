var date1 = new Date();
var date2 = date1;

console.log( date1 );
console.log( date2 );

date2.setFullYear( 2000 );

console.log( date1 );
console.log( date2 );

// demonstrate that the date object is a reference data type, i.e. show that both references change the same object in memory
