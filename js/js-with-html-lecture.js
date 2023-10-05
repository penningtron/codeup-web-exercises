// console.log("testing");
//
// let easyMath = 2 + 2;
//
// console.log(easyMath);

let x = 1;

// x = x + 1;
//
// x += 1;

// x -= 1;

// unary Operators

// let y = 5;
// y ++;
//
// y --;
//
// console.log(x);

// let pi = 3.14;
//
// let pistring = "" + pi;
//
// console.log(pistring);
// let pistring = pi.toString();
// console.log(pistring)


// let nmrOfStudents = "19";
//
// nmrOfStudents = parseInt(nmrOfStudents);
//
// console.log(nmrOfStudents);

// let bankAccount = "19.45453453"
// bankAccount = parseFloat(bankAccount);
//
//
// console.log(bankAccount);

let emptyString = "" == false;
console.log(emptyString);

let noDate;

console.log(typeof noDate);

let middleName = "Thomas"

if (middleName) {
    console.log("Truthy");
} else {
    console.log("Falsey");

}

//String Methods
// let username = "Justino(Nova)";
// let guildName;
//
// let nameLength = username.length;
// console.log('nameLength =>' , nameLength);
// //find the index of the ")" character
// let guildNameStart = username.index("(");
// console.log('guildNameStart =>', guildNameStart)
//
// console.log()


// Template Strings
let guildName = "Nova";
let username = "Nathan";

let channelMessage = "username from the guildName guild has logged in.";

channelMessage = username + "from the " + guildName + " guild has logged in.";

console.log(channelMessage);

channelMessage = `${username} from the ${guildName} guild has logged in.`;

console.log(channelMessage);





