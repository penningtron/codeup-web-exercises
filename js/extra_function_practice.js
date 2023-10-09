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

const concat = (arg1, arg2) => {
    if (typeof arg1 && typeof arg2 === "string") {
        return arg1 + arg2;

    } else if (typeof arg1 && typeof arg2 === "number"){
        return (arg1.toString()+arg2.toString());

    } else if (typeof arg1 && typeof arg2 === "boolean") {
        return  (arg1.toString()+arg2.toString());

    }

}

