var obj1 = { name: 'John' };
var obj2 = obj1;

obj1 = { name: 'Mike' };

// koliko objekata postoji u memoriji sada? 2 -> { name: 'John' }, { name: 'Mike' }
// koja je vrijednost varijable obj2 sada? zasto?
// vrijednost obj2 je { name: 'John' } jer pokazuje na objekt
// na koji je prethodno pokazivao i obj1
// obj1 se promijenio i sada pokazuje na drugi objekt, ali to ne utjece na obj2

obj1 = obj2;

// na sto referenca obj1 pokazuje sada?
// pokazuje ponovno na objkt { name: 'John' }
// mozemo li ikako pristupiti objektu "{ name: 'Mike' };" kojeg smo stvorili u liniji 4?
// ne, vise nemamo ni jednu referencu koja pokazuje na njega
// koliko objekata postoji u memoriji sada? 2 -> { name: 'John' }, { name: 'Mike' }
