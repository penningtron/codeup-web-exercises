// todo:
// Create an array of months for printing dates
let months = [];

// todo:
// Create the date corresponding to your birthday using the JavaScript Date object.
//let jsBirthday

let jsBirthday = new Date("June 14, 1986");
console.log(jsBirthday);

// todo:
// Log your birthday in the format: January 1, 2014 using the JavaScript Date object.
// See link below for methods needed:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#Getter
console.log(`Here is my birthday using JavaScript: ${jsBirthday} ` );

console.log('Here is my birthday', jsBirthday.getMonth());