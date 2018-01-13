'use strict'
let vehicleType = function (x, y) {
    let z = y == 1 ? ' car' : ' motorbike';
    let k = 'a ' + x + z;
    return k;
};
console.log(vehicleType('blue', 2));