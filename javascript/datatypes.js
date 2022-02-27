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
// checking string method
username = username.toUpperCase();
let surnameY = "I WILL BE GOING to to IGANDO TODAY".toLowerCase();
console.log(surnameY.replace('to', 'the'));
console.log(surnameY.replaceAll('to', 'the'));
let trimMethod = "    I WILL BE GOING TO IGANDO       ".trim();
let tIndex = usernameS.indexOf('k')
let oldMan = 'Uncle Bob';

console.log(username, lengthy,indexVal, username.toUpperCase());
console.log(trimMethod, tIndex, oldMan.slice(0, 5));

// alert(typeof usernameS.indexOf('k'))

document.write("<h1>"+ username + " length is:"+ lengthy + "</h1>");

let oldboy = "emma izu"

console.log(oldboy.slice(5),oldboy.length,oldboy[oldboy.length -1] );
  
let girl = "olasumbo"

console.log(girl.slice(3),girl.length,girl[girl.length-1], girl.toUpperCase());