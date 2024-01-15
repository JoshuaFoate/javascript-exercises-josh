const fibonacci = function(a) {
    if (a < 0) {
        return "OOPS";
    }
    else if (typeof a === 'string') {
        Number(a);
    }
    let fibonacci = []
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    if (a > 1) {
        for (let i = 2; i < (a+1); i++){
            fibonacci[i] = fibonacci[(i - 1)] + fibonacci[(i - 2)];
        }
        return fibonacci[a];
    }
    return fibonacci[a];
};

// Do not edit below this line
module.exports = fibonacci;
