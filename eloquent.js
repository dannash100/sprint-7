//Exercise 1:

function min(num1, num2) {
    return Math.min(num1, num2);
}

console.log(min(21, 32));


//Exercise 2:

function isEven(num) {
    if (num === 1) {
        return false;
    } else if (num === 0) {
        return true;
    } else return isEven(num - 2)
}

console.log(isEven(-1));

//Exercise 3:

function countBs(str){
    var count = 0
    for (i=0; i < str.length; i++) {
        if (str[i] === 'B') {
            count ++;
        } 
    } return count;
}

console.log(countBs("BBC"));

function countChar(str, letter) {
    var count = 0
    for (i=0; i < str.length; i++) {
    if (str[i] === letter) {
        count ++
    }
} return count
}


console.log(countChar("kakkerlak", "k"));