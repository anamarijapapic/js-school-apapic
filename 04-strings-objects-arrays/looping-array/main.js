var arr = [1, 2, 3, 4, 5];

// napisi petlju koja ce proci kroz sve elemente (od prvog do zadnjeg) array-a i ispisati ih u konzoli.
for (el of arr) {
    console.log(el);
}

// napisi drugu petlju koja radi isto samo obrnutim redosljedom (od zadnjeg do prvog).
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}