function numericSort(arr) {
    return [...arr].sort((a, b) => a - b);
}

var arr1 = [135, 2, 5, 1, 23, 10];
var arr2 = numericSort(arr1);
console.log(arr1); // [135, 2, 5, 1, 23, 10]
console.log(arr2); // [1, 2, 5, 10, 23, 135]