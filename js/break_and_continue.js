


let userInput;

    userInput = prompt("Enter an odd number:");

    const number = parseInt(userInput);
    if (!isNaN(number) && number % 2 !== 0) {
        alert (`You entered an odd number: ${number}`);
        for (let i = 1; i<= 50; i +=2) {
            if (i === number) {
                console.log(`Ohh Noooo Skipping ${number}`)
                continue;
            }
            console.log(i);

        }

    } else {
        alert(`That's not a valid odd number.`)
    }








