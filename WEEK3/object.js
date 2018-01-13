'use strict'
// Create an empty object.
let emptyObject = [];
// Create an object that contains the teachers that you have had so far for the different modules.
let teacherNames = [
    'Fillip', 
   'Dine',
    'Unmesh',
   'Jim'
]
console.log(teacherNames);
// Add a property to the object you just created that contains the languages that they have taught you.
teacherNames.languages = "HTML/CSS; GIT; JS";
console.log(teacherNames);
// Write some code to test two arrays for equality using == and ===. Test the following

let x1 = [1, 2, 3];
let y1 = [1, 2, 3];
let z1 = y1;
console.log(x1 == y1); //false
console.log(x1 === y1);//false
console.log(z1 == y1);//true
console.log(z1 == x1);//false
// Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;
let u = o1 == o3 ? '01 changes 03' : 'o1 doesn not change o3'; //else
let r = o2 == o3 ? '02 changes 03' : 'o2 doesn not change o3'; //if
//changing o2 changes o3 .but changing o1 does not change o3

// What does the following code return? (And why?)
let bar = 42;
console.log(typeof typeof bar);//string