'use strict'
let objectString = function (x) {
    let y = x.toString();
    return y.replace(/,/g, ' ');
};
console.log(objectString([1, 'plus', 2, 'equals', 3]));