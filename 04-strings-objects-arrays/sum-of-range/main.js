function range1(start, end) {
    arr = [];
    for (let i = start; start < end ? i <= end : i >= end; start < end ? i++ : i--) {
        arr.push(i);
    }
    return arr;
}

function range2(start, end, step = 1) {
    arr = [];
    for (let i = start; start < end ? i <= end : i >= end; start < end ? i += step : i -= step) {
        arr.push(i);
    }
    return arr;
}

function sum(arr) {
    result = 0;
    for (el of arr) {
        result += el;
    }
    return result;
}

// range1
console.log(range1(2, 8));		// [2, 3, 4, 5, 6, 7, 8]
console.log(range1(8, 2));		// [8, 7, 6, 5, 4, 3, 2]

// range2 without step parameter
console.log(range2(2, 8));		// [2, 3, 4, 5, 6, 7, 8]
console.log(range2(8, 2));		// [8, 7, 6, 5, 4, 3, 2]

// range2 with step parameter
console.log(range2(2, 8, 2));	// [2, 4, 6, 8]
console.log(range2(8, 2, 2));	// [8, 6, 4, 2]

// sum
console.log(sum([1, 2, 3, 4]));	// 10
console.log(sum(range1(1, 4)));	// 10