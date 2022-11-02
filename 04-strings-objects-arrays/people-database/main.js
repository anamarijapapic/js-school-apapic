var persons = [];

function padMonthTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

function formatDate(date) {
    return date.getDate() + '.' + padMonthTo2Digits(date.getMonth() + 1) + '.' + date.getFullYear() + '.';
}

function updatePerson(person, personUpdated) {
    person.name = personUpdated.name;
    person.surname = personUpdated.surname;
    person.dateOfBirth = personUpdated.dateOfBirth;
    person.city = personUpdated.city;
    person.zip = personUpdated.zip;
    person.oib = personUpdated.oib;
}

function addPersonToDatabase(person) {
	// add person to the persons array
	// make sure we don't add the same person twice (based on OIB)
	// if person with person.oib already exists in the array update the person with new data

    let oibExists = persons.find(el => el.oib === person.oib);
    if (! oibExists) {
        persons.push(person);
    }
    else {
        updatePerson(oibExists, person);
    }
}

function printPerson(person) {
	console.log('#' + person.oib + ' - ' + person.surname + ', ' + person.name + ' - ' + 
    '(' + formatDate(person.dateOfBirth)  + ')' +
    ' - ' + person.city + ' ' + person.zip);
}

function printPersonsSortedByDateOfBirth(desc = false) {
	// sort persons by date of birth and print to console
	// sort ascending or descending depending if parameter is true or false - set default to ascending

	// how to compare dates:
	// http://stackoverflow.com/questions/492994/compare-two-dates-with-javascript/493018#493018

	// ascending sort example:
	// 22.04.1995
	// 23.04.1995
	// 24.04.1995

    let sortedPersons = [];
    if (! desc) {
        sortedPersons = [...persons].sort((a, b) => a.dateOfBirth.getTime() - b.dateOfBirth.getTime());
    }
    else {
        sortedPersons = [...persons].sort((a, b) => b.dateOfBirth.getTime() - a.dateOfBirth.getTime());
    }
    for (person of sortedPersons) {
        printPerson(person);
    }
}

function printPersonsSortedByName(desc) {
	// sort persons by their full name and print to console
	// sort ascending or descending depending if parameter is true or false - set default to ascending

	// ascending sort example:
	// Bandic Zoran
	// Josipovic Ivo
	// Karamarko Tomislav

    let sortedPersons = [];
    if (! desc) {
        sortedPersons = [...persons].sort((a, b) => (a.surname + ' ' + a.name).localeCompare(b.surname + ' ' + b.name));
    }
    else {
        sortedPersons = [...persons].sort((a, b) => (b.surname + ' ' + b.name).localeCompare(a.surname + ' ' + a.name));
    }
    for (person of sortedPersons) {
        printPerson(person);
    }
}

function printPersonsFilteredByZip(zip) {
	// print all persons with specific zip to console

    let personsWithZip = persons.filter(el => {return el.zip === zip});
    for (person of personsWithZip) {
        printPerson(person);
    }
}

// database usage:

var person = {
	name: 'Ivan',
	surname: 'Horvat',
	dateOfBirth: new Date(1995, 3, 23),
	city: 'Split',
	zip: '21000',
	oib: '12345678912'
};

printPerson(person); // #12345678912 - Horvat, Ivan - (23.04.1995) - Split 21000

addPersonToDatabase(person);
addPersonToDatabase({
    name: 'Ivan',
	surname: 'Horvat',
	dateOfBirth: new Date(1995, 3, 23),
	city: 'Solin',
	zip: '21210',
	oib: '12345678912'
});
addPersonToDatabase({
    name: 'Ana',
	surname: 'Anic',
	dateOfBirth: new Date(1992, 6, 5),
	city: 'Split',
	zip: '21000',
	oib: '00000000000'
});
addPersonToDatabase({
    name: 'Iva',
	surname: 'Ivic',
	dateOfBirth: new Date(1990, 0, 9),
	city: 'Solin',
	zip: '21210',
	oib: '11111111111'
});
addPersonToDatabase({
    name: 'Ante',
	surname: 'Antic',
	dateOfBirth: new Date(1997, 8, 16),
	city: 'Split',
	zip: '21000',
	oib: '22222222222'
});
addPersonToDatabase({
    name: 'Jure',
	surname: 'Juric',
	dateOfBirth: new Date(1997, 8, 17),
	city: 'Split',
	zip: '21000',
	oib: '33333333333'
});
addPersonToDatabase({
    name: 'Mate',
	surname: 'Matic',
	dateOfBirth: new Date(1999, 2, 30),
	city: 'Split',
	zip: '21000',
	oib: '44444444444'
});
addPersonToDatabase({
    name: 'Matea',
	surname: 'Matic',
	dateOfBirth: new Date(1999, 2, 30),
	city: 'Split',
	zip: '21000',
	oib: '55555555555'
});

console.log('Persons sorted by date of birth (ASC):');
printPersonsSortedByDateOfBirth();
console.log('Persons sorted by date of birth (DESC):');
printPersonsSortedByDateOfBirth(true);

console.log('Persons sorted by full name (ASC):');
printPersonsSortedByName();
console.log('Persons sorted by full name (DESC):');
printPersonsSortedByName(true);

console.log('Persons with zip 21000:');
printPersonsFilteredByZip('21000');