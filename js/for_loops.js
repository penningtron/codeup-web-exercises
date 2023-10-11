

const showMultiplicationTable =  (number) => {
    for (let i = 1; i <= 10; i++){
        let result = i * number;

        console.log(`${number} * ${i} = ${result}`);
    }
}

showMultiplicationTable(7);

// Class walkthrough





for (let i = 1; i <= 10; i++){
    let randomNumber = Math.floor(Math.random() *200) +20;
    let isOddEven;
    if (randomNumber % 2 === 0 ){
        isOddEven= "even";

    }else {
        isOddEven = "odd";
    }
    console.log(`${randomNumber} is ${isOddEven} `);
}



const buildRow = (num) => {
    let result = "";
    for(let i = 0; i < num; i++){
        result += num;
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
let pyramid = buildPyramid(10);
console.log(pyramid);

// using a repeat

const numberPyramid = (num) => {
    for (let i = 1; i <= num; i++) {
        const message = 1.toString().repeat(i);
        console.log(message);

        }
    }
}


for (let i = 0; i < 20; i++){
    let num = 100;
    console.log(num-i*5);
}






let i = 1;
let allCones = Math.floor(Math.random() * 50) + 50;

do {
    let orderSimulator = Math.floor(Math.random() * 5) + 1;
    let coneSubtractor = allCones - orderSimulator;
    if (coneSubtractor > 0) {
        console.log(`order number - ${i} is for ${orderSimulator}cones. There are ${coneSubtractor} cones left`);
    } else {
        console.log(`I cannot sell you ${orderSimulator}, there are only ${allCones} left.`);
    }
    i++;
}while(i <= allCones);



