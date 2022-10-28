function updateObject(param) {
	param.name = 'Mike';
}

function updateArray(param) {
	param.push(4);
}

var obj = {name: 'John'};
var arr = [1, 2, 3];

updateObject(obj);
updateArray(arr);

// koju vrijednost obj ima sada? zasto?
// {name: 'Mike'}
// pass by reference
// obj je inicijaliziran na vrijednost {name: 'John'}, onda je pozvana funkcija
// updateObject koja je setirala name na Mike (s obzirom da smo funkciji kao parametar 
// dali referencu na objekt ona ga moze modificirati), radi se o istom objektu samo izmijenjenom
// koju vrijednost arr ima sada? zasto?
// [1, 2, 3, 4]
// pass by reference
// arr je inicijaliziran na vrijednost [1, 2, 3], onda je pozvana funkcija
// updateArray koja je pushala jos jedan clan (4) u taj niz (s obzirom da smo funkciji 
// kao parametar dali referencu na niz ona ga moze modificirati)