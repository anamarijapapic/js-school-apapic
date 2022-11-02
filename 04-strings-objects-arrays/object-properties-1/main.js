var person = {
	'name': 'John Doe',
	'shoe size': 42
};

// how many properties are there in the person object? -> 2 (name, shoe size)

// there are 2 ways to access object properties: dot notation and bracket notation.

// change person's name and print it to console by using both notations.

person.name = 'Jane Doe';
console.log(person.name);

person['name'] = 'Bob';
console.log(person['name']);

// change persons's shoe size and print it to console. can we access shoe size by using both notations?

person['shoe size'] = 40;
console.log(person['shoe size']);

// no, dot notation doesn't work for accessing multiple word propeties, we can only use bracket notation