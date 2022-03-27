/**
 * data types in javascript
 * primitive data types
 * String, Number, Boolean, null, undefined
 */
let username = 'olatunji';
let usernameS = 'olatunji';

// checking string property
let lengthy = username.length

let indexVal = username[username.length-1]
console.log('res:'+indexVal);

// checking string method
username = username.toUpperCase();
let surnameY = "I WILL BE GOING to to IGANDO TODAY".toLowerCase();
console.log(surnameY.replace('to', 'the'));
console.log(surnameY.replaceAll('to', 'the'));
let trimMethod = "    I WILL BE GOING TO IGANDO       ".trim();
let tIndex = usernameS.indexOf('k')
let oldMan = 'Uncle Bob';

console.log(username, lengthy,indexVal, username.toUpperCase());
console.log('mnm', trimMethod, tIndex, oldMan.slice(0, 5));

// alert(typeof usernameS.indexOf('k'))

document.write("<h1>"+ username + " length is:"+ lengthy + "</h1>");

let oldboy = "emma izu"

console.log(oldboy.slice(5),oldboy.length,oldboy[oldboy.length -1] );
  
let girl = "olasumbo"

console.log(girl.slice(3),girl.length,girl[girl.length-1], girl.toUpperCase());

let surname = "onyinye";
console.log('eee', surname.slice(4),surname.length, surname[surname.length-2], surname.toUpperCase());
let num = 3;
let num2 = '5';
// console.log(num + num2);

// let userInput1 = prompt("Give first value");
// console.log(userInput1);
// let userInput2 = prompt("Give second value");
// console.log(parseFloat(userInput1) + parseFloat(userInput2));
// document.writeln("result: ", parseInt(userInput1) + parseInt(userInput2))


console.log(Math.floor(Math.sqrt(34)), '|', Math.sqrt(34));
console.log(Math.ceil(Math.sqrt(34)), '|', Math.sqrt(34));
let ty = Math.random() * 345;
console.log(ty.toString(), ty.toString().replace('.', ''));