// function isCoding(name) {
//     console.log(`${name} loves coding!`)
//
// }
//
// isCoding('Nathan')
//
//
// function alertUser(message) {
//     console.log(message);
//
// }
//
// alertUser('hey there');
//
// function sayHello(userFullName);

//Function Declaration

//Anonamous Function

// Arrow Function

// const sayHello = (usersFullName) => {
//     console.log(`Hello, ${usersFullName}`);
// };
//
// sayHello('Nathan')





// const isCoding = (name) => {
//     console.log(`${name} loves coding!`);
// };
//
// isCoding('Nathan');

// const sayHello = (name) => {
//     return `Hello, ${name}`;
// };
//
// const greeting = sayHello('nathan');
//
// console.log(greeting);


// const findTotalPrice = (numberDays, pricePer) => {
//     var totalPrice = numberDays * pricePer;
//     return totalPrice;
// }



//var price = findTotalPrice(5, 6);

// let littleMermaidDays = prompt('How many days did you rent Little Mermaid');
// let littleMerMaidInput = parseInt(littleMermaidDays);
// alert(`You rented Little Mermaid for ${littleMerMaidInput} days.`)

// Contractor Pay
const hoursInput = (Hours) => {
    var googleHourly = 200;
    var amazonHourly = 250;
    var facebookHourly = 500;
    var totalPay = Hours * googleHourly + Hours * amazonHourly + Hours * facebookHourly;
    return totalPay;
}

//alert(hoursInput(10));



const googlePayCalculator = (googlePay, googleHours) => {
    alert(`You worked at Google for ${googleHours} hours at ${googlePay} dollars an hour.`);
    alert(`Your total pay is ${googlePay * googleHours} `);
}
let pay = prompt('What were your hours at google?');
let hours = prompt('What was your hourly at google?');

googlePayCalculator(pay, hours);