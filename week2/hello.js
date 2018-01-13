'use strict';
//no.1 exercise
console.log('***<<< exercise no.1 >>>***');
console.log('Salam, donia! // Iranian');
console.log('Ciao, mondo! // Italian');
console.log('Merhaba, dunya! // Turkish');
console.log('Hallo, wereld! // Dutch');
//no.2 exercise
console.log('***<<< exercise no.2 >>>***');
console.log("I'm awesome");
//no.3 exercise
console.log('***<<< exercise no.3 >>>***');
let x;
console.log('the value of my variable x will be undefined!');
console.log(x);
x = 123;
console.log('the value of my variable x will be 123!');
console.log(x);
//no.4 exercise
console.log('***<<< exercise no.4 >>>***');
let y = 'I am y variable';
console.log('the value of my variable y will be "I am y variable"!');
console.log(y);
y = 'I am second assignment of variable y!';
console.log('the value of my variable y will be "I am second assignment of variable y"!');
console.log(y);
//no.5 exercise
console.log('***<<< exercise no.5 >>>***');
const z = 7.25;
console.log(z);
const a = Math.round(z);
console.log(a);
if (z > a) { console.log(z); } else { console.log(a); }
//no.6 exercise
console.log('***<<< exercise no.6 >>>***');
let pets =[];
console.log('the value of variable pets will be []');
console.log(pets);
pets =
        ['dog',
        'cat',
        'sheep',
        'hen',
        'chicken',
        'horse'];
console.log(pets);
pets.push('baby pig');
console.log(pets);
//no.7 exercise
console.log('***<<< exercise no.7 >>>***');
let myString = "this is a test string for calculating it's length!"
console.log(myString);
console.log(myString.length);
//no.8 exercise
console.log('***<<< exercise no.8 >>>***');
let x8 = 9;
console.log('The value of my variable x8 is: ' + x8);
let y8 = 'hello';
console.log('The value of my variable y8 is: ' + y8);
let z8 = 3.45;
console.log('The value of my variable z8 is: ' + z8);
let k8 = [32, 'age'];
console.log('The value of my variable k8 is: ' + k8);
console.log('I think the type of my variable x8 is:' + typeof (x8));
console.log('I think the type of my variable y8 is:' + typeof (y8));
console.log('I think the type of my variable z8 is:' + typeof (z8));
console.log('I think the type of my variable k8 is:' + typeof (k8));
if (typeof x8 == typeof y8) { console.log(x8 + ' and ' + y8 + ' have SAME TYPE.') } 
else { console.log(x8 + ' and ' + y8 + ' have different types.') }
if (typeof x8 == typeof z8) { console.log(x8 + ' and ' + z8 + ' have SAME TYPE.') }
else { console.log(x8 + ' and ' + z8 + ' have different types.') }
if (typeof x8 == typeof k8) { console.log(x8 + ' and ' + k8 + ' have SAME TYPE.') }
else { console.log(x8 + ' and ' + k8 + ' have different types.') }
if (typeof y8 == typeof z8) { console.log(y8 + ' and ' + z8 + ' have SAME TYPE.') }
else { console.log(y8 + ' and ' + z8 + ' have different types.') }
if (typeof y8 == typeof k8) { console.log(y8 + ' and ' + k8 + ' have SAME TYPE.') }
else { console.log(y8 + ' and ' + k8 + ' have different types.') }
if (typeof z8 == typeof k8) { console.log(z8 + ' and ' + k8 + ' have SAME TYPE.') }
else { console.log(z8 + ' and ' + k8 + ' have different types.') }
//no.9 exercise
console.log('***<<< exercise no.9 >>>***');
var xx = 7;
var xx = xx % 3;
console.log('7 % 3 = 1');
console.log('the result of operator % is the remainder amount "MODULUS" of dividing the first number by the second number. ');
console.log('7 divide by 3 equals 2 and the remain amount is "1"');
//no.10 exercise
console.log('***<<< exercise no.10 >>>***');
let array1 = [];
console.log('now we have a blank array variable, we push one time a number "54" and another time a string "i am an item in an array" to the array.');
array1.push(54);
array1.push('i am an item in an array');
console.log(array1);
console.log('now we can see that we can store multiple types in an array!');
if (6 / 0 === 10 / 0) { console.log('We can compare infinities!') }
else { console.log('We can not compare infinities!') };
console.log('If the result of two operation are infinity, we know them as equal items and we can compare them together!')
