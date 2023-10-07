

if(true){
    console.log('condition is true');


} else {
    console.log(" The condition is false.");


}

console.log("This is after the conditional statement");

// else if stuff


const nmrOfUsers = 1000;

if (nmrOfUsers >= 10000) {
    console.log('Too many users');
}else if(nmrOfUsers >= 10000) {
    console.log('Thats a lot of users.');


} else {
    console.log('marketing needs to do a better job.');

}

const userRole = "admin";

if (userRole === "student"){
    console.log('let them see curriculum');

} else if (userRole === "admin") {
    console.log('let them see the curriculum and the instructor portal.');


} else {
    console.log('Dont let them see anything');

}

// Tip Calculator
const calculateTip = (tipPercent, billTotal) => {
    const isTheTipBogus = isNaN(parseFloat(tipPercent));
    const isTheTotalBogus = isNaN(parseFloat(billTotal));
    if(isTheTipBogus || isTheTotalBogus) {
        return "not able to be calculated.";

    } else if (parseFloat(tipPercent) < 0) {
        return 'not able to be calculated.';
    }
    let tipDecimal = parseFloat(tipPercent) / 100;
    let result = parseFloat(billTotal) * parseFloat(tipDecimal);
    return result.toLocaleString(("en-US", {style:"currency", currency:"USD"}));

};
const myTotal = prompt("What was your bill total?");
const myTipPercentage = prompt("What PERCENT would you like to tip?");

const myTip = calculateTip(myTipPercentage, myTotal);

console.log(`The tip is ${myTip}`);

// TERNARY OPERATOR (shorthand for if/else)

let message = isLoggedIn ? "Welcome back." : "Please log in." ;

