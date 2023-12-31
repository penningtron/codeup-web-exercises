

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];


// let colorInput =prompt("Please input a color...");
//
// const analyzeColor = (color) => {
//     if (color === "blue") {
//         return 'The pen is blue.';

//     } else if (color === "red") {
//         return 'The apple is red.';
//
//     } else if (color === "orange") {
//         return 'oranges are orange';
//
//     } else if (color === "yellow") {
//         return 'The sun is yellow';
//
//     } else if (color === "green") {
//         return 'The grass is green';
//
//     } else if (color === "indigo") {
//         return 'Indigo is kind of purple'
//
//     } else if (color === "violet") {
//         return 'violet is turning violet'
//     }
// }
 // * TODO:
 // * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 // * You should see a different message every time you refresh the page
 // */
// alert(analyzeColor(colorInput));
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
// let colorInput = prompt("Please input a color.");
//
// switch(colorInput) {
//     case "red":
//         alert("This thing is red.");
//         break;
//     case "orange":
//         alert("Orange is my favorite color!");
//         break;
//     case "green":
//         alert("This grass is green.");
//         break;
//     case "violet":
//         alert("Violet is turning violet.");
//         break;
//     case "yellow":
//         alert("The sun is yellow");
//         break;
//     case "blue":
//         alert("The water is blue.");
//         break;
//     default:
//         alert(`${colorInput} is a color I dont know!`);
//         break;
// }

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */



const calculateTotal = (luckyNumber, totalAmount) => {
    if (luckyNumber === 0) {
        console.log(`lucky number is ${luckyNumber} and the total amount is ${totalAmount}`);
        return totalAmount;
    } else if (luckyNumber === 1) {
        let discount = .1;
        return totalAmount - (discount * totalAmount);
    } else if (luckyNumber === 2) {
        let discount = .25;
        return totalAmount - (discount * totalAmount);
    } else if (luckyNumber === 3) {
        let discount = .35;
        return totalAmount - (discount * totalAmount);
    } else if (luckyNumber === 4) {
        let discount = .50;
        return totalAmount - (discount * totalAmount);
    } else if (luckyNumber === 5) {
        return 0;
    }
}

// const message = calculateTotal(5, 100);
// console.log(message);

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// const luckyNumber = Math.floor(Math.random() * 6);
//
// let totalBill = prompt('What was your total bill?');
// let discountedBill = calculateTotal(luckyNumber, totalBill);
// alert(` Your bill before discount is ${totalBill} , your lucky number is ${luckyNumber}, and you bill after the disount is ${discountedBill}.`)

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

const numberSign = (number) => {
    let sign = Math.sign(number);
    if(sign === 1) {
        return(`${number} is positive.`);
    } else if (sign === -1){
        return(`${number} is negative.`);
    } else if (sign === 0){
        return(`${number} is zero.`);
    }
}
const numberPlusAHundo = (number) => {
    return(`${number} plus 100 is ${number+100}`);
}
const evenOdd = (number) => {
    let evenOrOdd = number % 2 === 0 ? 'Even' : 'Odd'; // Ternary Operator
    return(`${number} is ${evenOrOdd}`);
    }


let userConfirm = confirm("Would you like to enter a number?"); // Nested if with a switch
if (userConfirm === false) {
    alert("Psh, bye.");
} else {
    let userNumber = parseFloat(prompt("Please enter a number"));

    switch (isNaN(userNumber)) {
        case true: alert(`That's not a number, silly.`);
            break;
        case false:
            alert(evenOdd(userNumber));
            alert(numberPlusAHundo(userNumber));
            alert(numberSign(userNumber));

}
}

// INSTRUCTOR WALKTHROUGH!!!!!!!


"use strict";
/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// const analyzeColor = (colorName) => {
// 	let message;
// 	if (colorName === "blue") {
// 		message = "blue is the color of the sky";
// 	} else if (colorName === "cyan") {
// 		message = "I don't know anything about cyan";
// 	} else if (colorName === "red") {
// 		message = "Strawberries are red";
// 	} else {
// 		message = "I do not have a response for this color.";
// 	}
// 	return message;
// };

// const myMessage = analyzeColor("red");
// console.log(myMessage);

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// const myMessage = analyzeColor(randomColor);
// console.log(myMessage);
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

const analyzeColor = (colorName) => {
    let message;
    // if (colorName === "blue") {
    // 	message = "blue is the color of the sky";
    // } else if (colorName === "cyan") {
    // 	message = "I don't know anything about cyan";
    // } else if (colorName === "red") {
    // 	message = "Strawberries are red";
    // } else {
    // 	message = "I do not have a response for this color.";
    // }
    switch (colorName) {
        case "blue":
            message = "blue is the color of the sky";
            break;
        case "cyan":
            message = "I don't know anything about cyan";
            break;
        case "red":
            message = "Strawberries are red";
            break;
        default:
            message = "I do not have a response for this color.";
    }
    return message;
};

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// const userColor = prompt("What is your favorite color?");
// const userMessage = analyzeColor(userColor);
// alert(userMessage);

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

const calculateTotal = (luckyNumber, totalAmount) => {
    // validate
    if (luckyNumber > 5) {
        return false;
    }
    totalAmount = parseFloat(totalAmount);
    if (isNaN(totalAmount)) {
        return false;
    }
    // build and return
    let discountedPrice;
    switch (luckyNumber) {
        case 0:
            discountedPrice = totalAmount;
            break;
        case 1:
            // 10%
            discountedPrice = totalAmount * 0.9;
            break;
        case 2:
            // 25%
            discountedPrice = totalAmount * 0.75;
            break;
        case 3:
            // 35%
            discountedPrice = totalAmount * 0.65;
            break;
        case 4:
            discountedPrice = totalAmount * 0.5;
            // 50%
            break;
        case 5:
            // 100%
            discountedPrice = 0;
            break;
    }
    return discountedPrice;
};

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
const luckyNumber = Math.floor(Math.random() * 6);

// const userTotal = prompt("What was your bill's total?");
// const userDiscount = calculateTotal(luckyNumber, userTotal);
// alert(`Your lucky number was ${luckyNumber}`);
// alert(userDiscount);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

const doTheToDoThang = () => {
    const willEnterNumber = confirm("Would you like to enter a number?");
    if (!willEnterNumber) {
        return false;
    }
    const userNumber = prompt("Enter a number.");
    const userNumberFloat = parseFloat(userNumber);
    if (isNaN(userNumberFloat)) {
        return false;
    }

    const isEven = userNumberFloat % 2 === 0;
    const isEvenMessage = isEven ? "Your number is even" : "Your number is odd";
    alert(isEvenMessage);
    const plus100 = userNumberFloat + 100;
    alert(`Your number plus 100 is: ${plus100}`);
    const isPositive = userNumberFloat >= 0;
    const isPositiveMessage = isPositive ? "Your number is positive" : "Your number is negative";
    alert(isPositiveMessage);
};

// doTheToDoThang();










