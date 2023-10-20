"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

const isTrue = (anyInput) => {
    if (Boolean (anyInput) === true && anyInput === true) {
        return true;
    } else {
        return false;
    }
}

const isFalse = (anyInput) => {
    if (Boolean (anyInput) === false && anyInput === false) {
        return true;

    } else {
        return false;
    }
}

const not = (anyInput) => {
    return !(Boolean(anyInput));

}

const addOne = (anyInput) => {
    return  (parseFloat(anyInput) + 1);
}

const isEven = (anyInput) => {
    if (parseFloat(anyInput) % 2 === 0) {
        return true
    } else {
        return false;
    }

}

const isIdentical = (arg1, arg2) => {
    if (arg1 === arg2 && typeof arg1 === typeof arg2){
        return true;
    } else {
        return false;
    }

}

const isEqual = (arg1, arg2) => {
    if (arg1 == arg2) {
        return true;
    } else {
        return false;
    }
}

const or = (arg1, arg2) => {
    return (arg1 || arg2);
}

const  and = (arg1, arg2) => {
    return(arg1 && arg2);
}

// const concat = (arg1, arg2) => {
//     if (typeof arg1 && typeof arg2 === "string") {
//         return arg1 + arg2;
//
//     } else if (typeof arg1 && typeof arg2 === "number"){
//         return (arg1.toString()+arg2.toString());
//
//     } else if (typeof arg1 && typeof arg2 === "boolean") {
//         return  (arg1.toString()+arg2.toString());
//
//     }






/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

// 1. Define a function named isANumber that takes in a value and returns true if the input is numeric or not. Numeric strings are not considered as numbers and should return false.

// const isNumber = (num) => {
//     if (typeof num !== "number"){
//         return false;
//
//     } else if (typeof num === "number"){
//         return true;
//     }
//
//     }

const isANumber = (input) => {
    if(typeof input !== "number"){
       return false;
    }
    return true;
}

// 2. Define a function named increment that takes in an input and adds 1 to it if the input is numeric. If the input is not numeric, then return false.

const increment = (input) => {
    input = parseFloat(input);
    if (typeof input !== "number") {
        return false;
    }
    return input + 1;

}


// 3. Define a function named decrement. If the provided input is numeric, the function should subtract 1 and return the result. If the input is not numeric, decrement should return false.

const decrement = (input) => {
    input = parseFloat(input);
    if (typeof input !== "number") {
        return false;
    }
    return input - 1;

}


// 4. Write a function named getHighestNumber that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return the highest number. If any of the 3 inputs is missing or non-numeric, then return false.





// 5. Define a function named parseNumber that parses (converts) a numeric String and returns it's value as a number, the function should be able to decide if it should be parsing an Integer or a Float value.

const parseNumber = (input) => {
    input = parseFloat(input);
    if (isNaN(input)) {
        return false;
    }
    return input

}



// 6. Write a function named add that takes in two inputs. If both inputs provided are numeric, add will return the sum of both inputs. If one or both inputs is not numeric, add should return false.

const add = (num1, num2) => {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num2) || isNaN(num1)){
        return false;
    }
    return num1 + num2;
}



// 7. Write a function named multiply that takes in two inputs. If both inputs provided are numeric, multiply returns the product of the first input multiplied by the second. If either or both inputs are not numeric, multiply should return false.

// const add = (num1, num2) => {
//     num1 = parseFloat(num1);
//     num2 = parseFloat(num2);
//
//     if (isNaN(num2) || isNaN(num1)){
//         return false;
//     }
//     return num1 * num2;
// }


// 8. Define a function named square. If the provided input is numeric, square should return the number multiplied by itself. If the input is not numeric, square, should return false.

// const add = (num) => {
//     num = parseFloat(num1);
//     if ( isNaN(num)){
//         return false;
//     }
//     return num * num;
// }



// 9. Write a function named sumOfSquares that takes in two inputs. If both inputs are numeric, sumOfSquares should square each input and return the sum of them added together. For example, if we pass a and b then we should square a and add it to the square of b. If either or both inputs are not numeric, sumOfSquares should return false.




// 10. Write a function named isPalindrome that takes in a single input. If the input is a numeric string, then return false. If the input is a string, then return true if the string is the same forwards as it is backwards. Return false if the string is different forwards from backwards. Ignore capitalization.


// const isPalindrome = (input) => {
//
//     if (typeof input !== "string"){
//         return false;
//     }
//    let inputArr = input.split("");
//    let inputArrReverse = inputArr.reverse();
//    let inputReversed = inputArrReverse.join("");
//    return input.toLowerCase() === inputReversed.toLowerCase();
//
//
// }


// const fizzBuzz = (start, end) => {
//     start = parseFloat(start);
//     end = parseFloat(end);
//     if (isNaN(start) || isNaN(end)) {
//         return false;
//     }
//
//     for (let i = start; i <= end; i ++){
//         if (i % 15 === 0){
//             console.log("FizzBuzz")
//         } else if ( i % 5 === 0) {
//             console.log("Buzz");
//         } else if ( i % 3 === 0) {
//             console.log("Fizz");
//         } else {
//             console.log(i);
//         }
//     }
//
// }
//
// fizzBuzz(1,100);



// Anagram Detector: Create a function that determines if two strings are anagrams of each other.



const anagramChecker = (string1, string2) => {
    if (typeof string1 && typeof string2 !== "string"){
        return false;
    }
    if (string1.length !== string2.length){
        return false;
    }

    let arrString1 = string1.split("");
    let arrString2 = string2.split("");

    let sorted1 = arrString1.sort();
    let sorted2 = arrString2.sort();

    let alphaArr1 = sorted1.join();
    let alphaArr2 = sorted2.join();

    if (alphaArr2 === alphaArr1){
        console.log( ` the string ${string1} and ${sorted2} are anagrams.`);
    } else {
        console.log( ` the string ${string1} and ${sorted2} are NOT anagrams.`);
    }
}
anagramChecker("cat", "ctb");



// Array Intersection: Write a function that takes two arrays as input and returns an array containing elements that are present in both input arrays.


let newArr = [];
const arrIntersect = (arr1, arr2) => {
    for (let i of arr1) {
        if (arr2.includes(i)){
            newArr.push(i)
        } else {
            console.log(`${i} is not a common element.`)
        }
    }
    console.log(`the new array with common elements is ${newArr}`);
}

let testArr1 = [1,2,3,4,5];
let testArr2 = [5,8,6,3,9];

arrIntersect(testArr1,testArr2)



// Your solutions will go here :)

//1. Define a function named lowerCase that takes in an input and returns that input as a string in all lower case letters. Returns false if the input passed is not a string.

const lowerCase = (input)=>{
    if(typeof input !== "string"){
        return false;
    } else {
        return input.toLowerCase();
    }

}

//2. Define a function named isAllLowerCase that takes in a string and returns true if all characters in the string are lowercase otherwise it should return false.

const isAllLowerCase = (input) =>{
    if (typeof input !== "string"){
        return false;
    }
    if (input === input.toLowerCase()){
        return true;
    } else {
        return false;
    }
}

//3. Define a function named isAllUpperCase that takes in a string and returns true if all characters in the string are uppercase otherwise it should return false.

const isAllUpperCase = (input) =>{
    if (typeof input !== "string"){
        return false;
    }
    if (input === input.toUpperCase()){
        return true;
    } else {
        return false;
    }
}

//4. Define a function named isNotPalindrome that takes in a string and returns true if that string is not palindrome, if the string is palindrome should return false.

const isNotPalindrome = (input) => {

    if (typeof input !== "string"){
        return true;
    }
    let inputArr = input.split("");
    let inputArrReverse = inputArr.reverse();
    let inputReversed = inputArrReverse.join("");
    if ( input.toLowerCase() === inputReversed.toLowerCase()){
        return false;
    } else {
        return true;
    }


}

//5. Define a function named multiplyBy2 that takes in an input and multiplies it by 2 if the input is numeric. If the input is Not A Number, then return false.

const multiplyBy2 = (input) => {

    if (typeof input !== "number" && typeof input !== "string"){
        return false;
    }
    let makeNumeric = parseInt(input);
    if (isNaN(makeNumeric)){
        return false;
    }

    return makeNumeric * 2;
}

//6. Define a function named convertHourToSec that takes in one input Hours. Return the conversation of the number of hours into total seconds. If the input is not numeric or a numeric string, convertHourToSec, should return false.

const convertHourToSec = (hours) => {

    let makeNumeric = parseInt(hours);
    if (isNaN(makeNumeric) || makeNumeric < 0){
        return false;
    } else {
        return makeNumeric * 3600;

    }


}

//7. Write a function named getLowestNumber that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return the lowest number. If any of the 3 inputs is missing or non-numeric, then return false.

const getLowestNumber = (num1,num2,num3) => {
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    num3 = parseFloat(num3)

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)){
        return false;
    } else {
        return (Math.min(num3,num2,num1))
    }

}

// 8. Write a function named addStringLengths that takes in two inputs. If both inputs provided are strings, addStringLengths returns the sum after adding the length (number of characters) of both strings. If either or both inputs are not strings, return false.

const addStringLengths = (in1, in2) => {
    if (typeof in2 !== "string" || typeof in1 !== "string"){
        return false;
    }
    let length1 = in1.length;
    let length2 = in2.length;

    return length1 + length2;
}

//9. Write a function named subtract that takes in two inputs. If both inputs provided are numeric or numeric strings, subtract will return the difference when the second input is subtracted from the first input. If one or both inputs is not numeric or numeric strings, subtract should return false.

const subtract = (arg1, arg2 ) => {
    let arg1Num = parseInt(arg1);
    let arg2Num = parseInt(arg2);
    if (isNaN(arg1Num) || isNaN(arg2Num)){
        return false;
    }

    return arg1Num - arg2Num;
}

//10. Write a function named calculateChange that takes in two inputs, totalPaid and totalCost. If both inputs are numeric or numeric strings, calculateChange should return the change after subtracting the cost from the amount paid. The return should be in $x.xx format as a string Note: it should return with two decial places. If either or both inputs are not numeric or numeric strings, calculateChange should return false.

const calculateChange = (totalPaid,totalCost ) => {

    let paidNum = parseFloat(totalPaid);
    let costNum = parseFloat(totalCost);
    if (isNaN(paidNum) || isNaN(costNum)){
        return false;
    }

    let subracted = paidNum - costNum;
    const formatter = new Intl.NumberFormat(`en-US`,{
        style:'currency',
        currency:'USD',
    });

    return formatter.format(subracted);


}










