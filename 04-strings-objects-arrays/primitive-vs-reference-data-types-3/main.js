var obj1 = { name: 'John' };
var obj2 = obj1;
var obj3 = { name: 'John' };

console.log( obj1 );
console.log( obj3 );

// koliko referenci imamo u programu? 3 -> obj1, obj2, obj3
// koliko objekata imamo u memoriji? 2 -> { name: 'John' }, { name: 'John' }

if ( obj1 === obj2 ) {
	// hoce li program uci u ovaj if block? zasto?
    // da, reference obj1 i obj2 pokazuju na isti objekt 
    // pa jednakost vrijedi jer se objekt zapravo usporeduje sam sa sobom
}

if ( obj1 === obj3 ) {
	// hoce li program uci u ovaj if block? zasto?
    // ne, referenca obj1 ne pokazuje na isti objekt kao referenca obj3 
    // i nece vrijediti jednakost jer se ne radi o istom objektu
}
