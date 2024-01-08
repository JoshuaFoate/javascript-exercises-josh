const sumAll = function(int1, int2) {
    if (int1 < 0 || int2 < 0) {
        return 'ERROR';
    }
    if (typeof int1 !== "number" || typeof int2 !== "number") {
        return 'ERROR';
    }
    let sum;
    let largerNum;
    let smallerNum;
    if (int1 > int2) {
        sum = int2;
        largerNum = int1;
        smallerNum = int2;
    }
    else if (int2 > int1) {
        sum = int1;
        largerNum = int2;
        smallerNum = int1;
    }
    for (i = smallerNum + 1; i <= largerNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
