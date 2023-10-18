

//FizzBuzz: Write a program that prints numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz." For numbers which are multiples of both 3 and 5, print "FizzBuzz."


for (let i = 1; i < 100; i++){
    if (i % 15 === 0){
       // console.log("FizzBuzz");
    } else if (i % 3 === 0){
        //console.log('Buzz');
    } else if (i % 5 === 0) {
       // console.log('Fizz');

    } else {
       // console.log(i)
    }


}


// anagram checker

let stringOne = "heythere"
let stringTwo = "erehtye"

const stringAnogram = (stringone, stringtwo) => {
    let stringOneReverse = stringOne.split("").reverse().join();
    //console.log(stringOneReverse)
    let stringTwoReverse = stringTwo.split("").join();
    //console.log(stringTwoReverse);
    if (stringOneReverse === stringTwoReverse) {
        //console.log("These strings are anagrams.")
    } else {
        //console.log("These strings are not anagrams.")
    }

}

stringAnogram(stringOne,stringTwo)


// finding the largest number exercise
const findLargestNumber = (arr) => {
    //validate and return early
    if(!Array.isArray(arr) && arr.length === 0) {
        return false;
    }

    //start a variable "largest" at 0
    let largest = arr[0];

    //loop through arr and replace "largest" if value is greater
    for (let number of arr) {
        if (number > largest) {
            largest = number;
        }
    }
    //return largest
    return largest;

}

(() => {
    //sample array of numbers
    const numbers = [42,17,8,94,23,61,12,51,6];
    //call the function and display the result
    const result = findLargestNumber(numbers);
    //console.log(result);


})();
const calculateAverageGrade = (studentList) => {
    let sum = 0;
    for(let student of studentList){
        sum += student.grade;
    }

    let classAverage = sum / studentList.length;

    return classAverage;
};

const findTopStudent = (studentList) => {
    let topStudent = studentList[0];
    for(let student of studentList){
        if (student.grade > topStudent.grade) {
            topStudent = student;
        }
    }

    return topStudent;
}

const students = [
    { id: 1, name:"Alice",grade:90},
    { id: 2, name:"Bob",grade:85},
    { id: 3, name:"Charlie",grade:78},
    { id: 4, name:"David",grade:92},
    { id: 5, name:"Eva",grade:88},

];

