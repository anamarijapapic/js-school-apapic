var arr1 = [1, 2, 3];
arr1.pop();
arr1.pop();
arr1.pop();

var arr2 = [1, 2, 3];
arr2.length = 0;

// jesu li ova 2 bloka ekvivalentna? da li je stanje oba arraya sada isto?
// ekvivalentna su, stanje je isto, oba niza u prazni arrayevi znaci duljine 0
// niz arr1 je pozivima metode pop() uklonio sve elemente iz niza i postao duljine 0
// nizu arr2 se, nakon inicijalizacije, setirala duljina na 0 i tako su uklonjeni svi elementi 