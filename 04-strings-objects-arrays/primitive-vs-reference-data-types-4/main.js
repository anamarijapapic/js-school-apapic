var obj1 = {name: 'John'};
var obj2 = obj1;

obj1 = 5;

// koja je vrijednost obj2 sada? zasto?
// vrijednost obj2 je {name: 'John'}
// obj1 vise ne pokazuje na objekt nego mu je pridjeljena vrijednost 5
// ali obj2 je i dalje referenca na objekt (na koji je prethodno pokazivao i obj1)