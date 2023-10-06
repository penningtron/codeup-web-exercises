"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
const sayHello = (name) => {
    return `Hello ${name}.`;
};

console.log(sayHello('nathan'));
/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

let helloMessage = sayHello('Nathan');
console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

const myName = 'Nathan';
console.log(sayHello(myName));

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
const random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

const isTwo = (number) => {
    return (number === 2);
}

console.log(`The number ${random} is ${isTwo(random)}`);

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
const calculateTip = (tipPercent,totalBill) => {
    return (tipPercent * totalBill);
}
console.log(calculateTip(.20,20));


/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

let billTotal =  parseInt(prompt(`How much was the bill?`));
let tipPercent = prompt(`What is the percent you would like to tip?`);
alert(`You need to tip ${calculateTip(tipPercent,billTotal)} dollars`);



/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > let originalPrice = 100;
 * > let discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

const applyDiscount = (priceBefore,discountPercent) => {
    let percentToDecimal = discountPercent * .01 // Coverts whole number percent to decimal

    return priceBefore - (priceBefore * percentToDecimal);
}

console.log(applyDiscount(45.99,20));

//Argument Objects
// function func2(a,b,c) {
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     console.log(arguments[2]);
//
// }
//
// func2(1,2,3);
//
// const func1 = (a,b,c) => {
//     console.log(arguments[0]);
//
//     console.log(arguments[1]);
//
//     console.log(arguments[2]);
//
// }
// func1(1,2,3);