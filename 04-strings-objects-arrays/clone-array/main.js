function arrayClone(arr) {
    copyArr = [];
    for (el of arr) {
        copyArr.push(el);
    }
    return copyArr;
}

var arr1 = [1, 2, 3, 4];
var arr2 = arrayClone(arr1);

arr2.push(5);

console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4, 5]