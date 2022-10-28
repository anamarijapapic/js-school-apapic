var arr = [1, 2, 3, 4];

arr.push(5);

// koliko elemenata array ima? koji su? -> 5 elemenata : 1, 2, 3, 4, 5

arr.length = 0;
arr.push(6);

// koliko elemenata array ima? koji su? -> 1 element : 6

arr[3] = 7;

// koliko elemenata array ima? koji su? sto se nalazi na indexima 1 i 2?
// -> 2 neprazna elementa : 6, 7 (i 2 empty elementa); na indexima 1 i 2 nalaze se empty itemi 
// koja je vrijednost length property-a? 4

arr.length = 0;
arr[arr.length] = 8;

// koliko elemenata array ima? koji su? koja je vrijednost length property-a?
// -> 1 element : 8, arr.length je 1

arr.push(8);

// u svakoj od zadnje 2 linije smo dodali novi element u array.
// ima li razlike izmedu ta 2 nacina dodavanja elementa u array?
// isti je efekt 
// arr[arr.length] = 8; === arr.push(8);
// pod uvjetom da je u nacinu 1 u uglatim zagradama kao index proslijedeno arr.length