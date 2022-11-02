var person = {
	'name': 'John Doe',
	'shoe size': 42
};

// what happens when we try to access a property that's undeclared (e.g. person.address)?
// do we get a reference error like when trying to access a variable that's undeclared?

console.log(person.address);
person.address = '10 Downing Street';
console.log(person.address);

// reading an undeclared property returns undefined, and no errors
// assigning a value to an undefined property creates that property on the object with given value

// how can we remove properties from objects? -> using delete operator
// remove all properties from the person object.
// show with console.dir() that the properties are really removed.

delete person.name;
delete person["shoe size"];
delete person.address;
console.dir(person);