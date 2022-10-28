function updateObject(param) {
	param = {name: 'John'};
}

function updateArray(param) {
	param = [1, 2, 3, 4];
}

var obj = {name: 'Chris'};
var arr = [1, 2, 3];

updateObject(obj);
updateArray(arr);

// koju vrijednost obj ima sada? zasto?
// {name: 'Chris'}
// obj je inicijaliziran da pokazuje na objekt {name: 'Chris'}, a zatim pozvana funkcija updateObject
// ne smije overwriteati referencu danu joj kao parametar -> sama referenca je pass by value
// koju vrijednost arr ima sada? zasto?
// [1, 2, 3]
// arr je inicijaliziran da pokazuje na niz [1, 2, 3], a zatim pozvana funkcija updateArray
// ne smije overwriteati referencu danu joj kao parametar -> sama referenca je pass by value