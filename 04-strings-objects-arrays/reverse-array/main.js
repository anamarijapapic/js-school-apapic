function reverseArray(arr) {
    myArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        myArr.push(arr[i]);
    }
    return myArr;
}

function reverseArrayInPlace(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr.splice(i, 0, arr.pop());
    }
}

console.log(reverseArray(['A', 'B', 'C'])); // ['C', 'B', 'A'];

var arr = [1, 2, 3, 4, 5];
reverseArrayInPlace(arr);
console.log(arr); // [5, 4, 3, 2, 1]