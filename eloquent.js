//Exercise:1

function min(num1, num2) {
    return Math.min(num1, num2);
}

console.log(min(21, 32));


//Exercise:2

function isEven(num) {
    if (num === 1) {
        return false;
    } else if (num === 0) {
        return true;
    } else return isEven(num - 2)
}

console.log(isEven(-1));