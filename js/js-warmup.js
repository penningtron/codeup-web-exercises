// Generate a random number between 1 and 100 (inclusive)
const targetNumber = Math.floor(Math.random() * 100) + 1;
// Initialize the number of attempts
let attempts = 0;
// Function to handle the user's guess
function checkGuess() {
    // Get the user's guess from the input field
    const userGuess = parseInt(prompt("Guess a number between 1 and 100:"));
    // Check if the guess is valid
    if (!(userGuess < 100 && userGuess > 1)) {
        alert("Not a valid number, try again.")
        checkGuess();
    } else {
        // Increment the number of attempts
        attempts++;
    }
    // Check if the guess is correct
    if (userGuess > targetNumber) {
        alert(`This is your ${attempts} attempt and your number is too high, try again.`)
        checkGuess();
    } else if  ( userGuess < targetNumber){
        alert(`This is your ${attempts} attempt and your number is too low, try again.`)
        checkGuess();
    } else if (userGuess === targetNumber){
        alert("You won!!")
        attempts = 0;
        checkGuess();
    }
    // if true, display a winning message
}
// if false, provide a hint and call checkGuess() again


// Start the game
checkGuess();