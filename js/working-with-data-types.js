let a = 1;
let b = a++;
let c = ++a;
console.log("a", a , "b", b, "c", c);

let d = "hello";
let e = false;
d++;
e++;
console.log("d", d, "e", e);

let perplexed;
perplexed + 2;
console.log("perplexed" , perplexed);

let price = 2.7;
let priceFixed = price.toFixed(2);
console.log("price", price , "price toFixed", priceFixed);

let pricestring = "2.7";
let price2 = parseFloat(pricestring).toFixed(2);
console.log("price 2", price2);

console.log("isNaN 0", isNaN(0));
console.log("isNaN 1", isNaN(1));
console.log("isNaN ' ' ", isNaN(""));
console.log("isNaN string", isNaN("string"));
console.log("isNaN '0' ", isNaN("0"));
console.log("isNaN '1' ", isNaN("1"));
console.log("isNaN '3.145' ", isNaN("3.145"));
console.log("isNaN 'number.max' ", isNaN(Number.MAX_VALUE));
console.log("isNaN 'Infinity' ", isNaN(Infinity));
console.log("isNaN 'true - string' ", isNaN("true"));
console.log("isNaN 'true - boolean' ", isNaN(true));
console.log("isNaN 'false - string' ", isNaN("false"));
console.log("isNaN 'false - boolean' ", isNaN(false));

console.log("Using the Not !");
console.log("!true", !true);
console.log("!false", !false);
console.log("!!true", !!true);
console.log("!!false", !!false);
console.log("!!0", !!0);
console.log("!!-0", !!-0);
console.log("!!1", !!1);
console.log("!!-1", !!-1);
console.log("!!0.1", !!0.1);
console.log("!!hello", !!"hello");
console.log("!!''", !!"");
console.log("!true", !true);













// Exercise 2
console.log("Exercise 2")

let sample = "Hello Codeup";
let sampleLength = sample.length;
console.log(sampleLength);

//Make Upper Case
let upperSample = sample.toUpperCase();
console.log(upperSample);

// Add Students
sample = sample + " Students";
console.log(sample);

// Replace students with class
let sampleReplace = sample.replace("Students", "Class");
console.log(sampleReplace);

// Find index of "c"
let indexOfc = sampleReplace.indexOf("c");
console.log(indexOfc);

// Find index of "C"
let indexOfC = sampleReplace.indexOf("C");
console.log(indexOfC);

// Exercise 3 - 1
let littleMermaid = 3;
let brotherBear = 5;
let hercules = 1;
let totalDay = littleMermaid + brotherBear + hercules;
let pricePerDay = 3
let totalPrice = pricePerDay * totalDay;

console.log("total price" , totalPrice);

// Exercise 3 - 2
let googleHourly = 400 * 6;
let amazonHourly = 380 * 4;
let facebookHourly = 350 * 10;

let weeklyPayment = googleHourly + amazonHourly + facebookHourly;
console.log(`Weekly Payout: ${weeklyPayment}`);


// Exercise 4
const username = 'codeup';
const password = 'notastrongpassword';

// Check if at least 5 char
let passLength = password.length >= 5;
console.log("Is pass at least 5 char", passLength);

// Check if password is not username
let passIncludesUserName = password.toLowerCase().includes(username.toLowerCase());
console.log("Does not include username.", passIncludesUserName);

// Check if pass is not more than 20 Characters
let twentyChar = passLength <= 20;
console.log("Has no more than 20 char", twentyChar);

// Check for whitespace
let hasWhiteSpace = password.includes(" ") && username.includes(" ");
console.log("Has whitespace", hasWhiteSpace);





