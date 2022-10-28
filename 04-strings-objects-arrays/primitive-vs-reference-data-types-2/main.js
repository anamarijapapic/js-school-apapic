var obj1 = {name: 'John'};
var obj2 = obj1;

// koliko referenci imamo u programu? 2 -> obj1, obj2
// koliko objekata imamo u memoriji? 1 -> {name: 'John'}

obj1.name = 'Mike';	// ako promijenimo obj1.name da li se promijenila vrijednost obj2.name? zasto?
// da, promijenila se jer reference obj1 i obj2 pokazuju na isti objekt 
// a promjena objekta utjece na sve njegove reference
obj2.name = 'Alex';	// ako promijenimo obj2.name da li se promijenila vrijednost obj1.name? zasto?
// da, promijenila se jer reference obj1 i obj2 pokazuju na isti objekt
// a promjena objekta utjece na sve njegove reference

// koja je trenutacna vrijednost name property-a objekta {name: 'John'}? -> Alex