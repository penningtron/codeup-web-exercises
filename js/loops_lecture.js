// let i = 0;
//
//
//
// for (let i = 0; i < 10; i++) {
//     console.log('for loop iteration #' + i);
// }
//
//
//
//
//
// while (i < 10) {
//     console.log('While loop iteration #' + i);
//     i++;
// }



// let favePizza = prompt(`What is your favorite pizza`);
// while (favePizza !== "pepperoni") {
//     favePizza = prompt("Wrong answer. try again.");
//
// }
//
// alert( "Thats what I thought. Good choice.");


// let myNumber = 0;
//
// do {
//     console.log(myNumber);
//     myNumber++;
//
// } while (myNumber >= 10);


// Write a function caller gbuld Pyramid that takes a number as an argument.
// the function should return an asterik pyramid that has as many rows as the number

const buildRow = (num) => {
    let result = "";
    for(let i = 0; i < num; i++){
        result += "*";
    }
    result += "\n";
    return result;
}

const buildPyramid = (rows) => {
    let result = "";
    for(let i = 1; i < rows; i++){
        result += buildRow(i);

    }
    return result;
}
let pyramid = buildPyramid(5);
console.log(pyramid);




// break and continue


for (let i = 0; i <= 10; i++){
    if (i=== 5) {
        continue
    }

    console.log(`the current index is ${i}`);

}