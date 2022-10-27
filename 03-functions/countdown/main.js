function countDown(num) {
    if (num < 1) {
        return;
    }
    console.log(num);
    countDown(num - 1);
}

function countUp(num) {
    if (num < 1) {
        return;
    }
    countUp(num - 1);
    console.log(num);
}

countDown(10);
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

countUp(10);
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10