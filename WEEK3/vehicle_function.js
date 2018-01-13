'use strict'
let codeOfVehicle = {
    1: "car",
    2: "motorbike",
    3: "caravan",
    4: "bike"
}
   

let vehicle = function (color, code, age) { 
    let vehicleName = codeOfVehicle[code]; 
    
    let ageStatus = age <= 1 ? ' new' : ' used';
    return 'a ' + color + ageStatus + ' '+vehicleName;
};
console.log(vehicle('blue', 1, 5));
// Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new caravan".
console.log(vehicle('green', 3, 1));
// print something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.".

console.log("Amazing Joe's Garage, we service ");
for (let i = 1; i < 4; i++) {
    console.log(codeOfVehicle[i] + "s,"); 
}
console.log(codeOfVehicle[4]+"s.");
