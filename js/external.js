console.log("Hello from external JavaScript");


alert("Welcome to my website!");
let userInput = prompt('What is your favorite color?');
alert(`${userInput} is my favorite color too!`);

// Exercise 3 - 1

let littleMermaidDays = prompt('How many days did you rent Little Mermaid');
let littleMerMaidInput = parseInt(littleMermaidDays);
alert(`You rented Little Mermaid for ${littleMerMaidInput} days.`)

let brotherBearDays = prompt('How many days did you rent Brother Bear');
let brotherBearInput = parseInt(brotherBearDays);
alert(`You rented Brother Bear for ${brotherBearInput} days.`)

let herculesDays = prompt('How many days did you rent Hercules');
let herculesInput = parseInt(herculesDays);
alert(`You rented Little Mermaid for ${herculesInput} days.`)

let pricePerDay = 3
let totalDay = littleMerMaidInput + brotherBearInput + herculesInput;
let totalPrice = pricePerDay * totalDay;
alert(`The price per day for each of these movies is 3. Your total is ${totalPrice} dollars.`)

// Exercise 3 - 2


let googleHours = prompt('How many hours did you work at google?');
let googleHourly = prompt('What is your hourly for google?');

let amazonHours = prompt('How many hours did you work at amazon?');
let amazonHourly = prompt('What is your hourly for amazon?');

let facebookHours = prompt('How many hours did you work at facebook?');
let facebookHourly = prompt('What is your hourly for facebook?');


let weeklyPayment = parseInt(googleHourly) * parseInt(googleHours) + parseInt(amazonHourly) * parseInt(amazonHours) + parseInt(facebookHourly) * parseInt(facebookHours);
alert(`You earned a total of ${weeklyPayment} dollars this week.`)
