



// let num = 2;
//
//
// while (num < 65536) {
//     num = num*2;
//     console.log(num);
// }


// DO WHILE ICECREAM SHOP

// This is how you get a random number between 50 and 100

let allCones = Math.floor(Math.random() * 50) + 50;

// This expression will generate a random number between 1 and 5

do {
    let orderSimulator = Math.floor(Math.random() * 5) + 1;

    if (allCones - orderSimulator > 0){
        allCones = allCones - orderSimulator;
        console.log(`${orderSimulator} cones sold. There are ${allCones} left.`);


    } else if (orderSimulator > allCones) {
        console.log(`Cannot sell you ${orderSimulator}, I only have ${allCones} cones left.`);
        allCones = 0;
        console.log(`Yay! I sold them all!`);
    }


} while (allCones > 0);