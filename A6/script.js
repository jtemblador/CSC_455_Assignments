function startGame() {
    // Generate a random number between 1 and 10
    let secretNumber = Math.floor(Math.random() * 10) + 1;
    let maxAttempts = 3;
    
    // Loop through each attempt
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        // Ask user for guess
        let userGuess = prompt('Attempt ' + attempt + ' of ' + maxAttempts + ': Enter a number between 1 and 10');
        
        // Convert input to a number
        userGuess = Number(userGuess);
        
        // Check if the guess is correct (using if)
        if (userGuess === secretNumber) {
            alert('Congratulations! You guessed the number ' + secretNumber + '!');
            return; // End the game if correct
        } else if (userGuess > secretNumber) {
            alert('Too high! Try again.');
        } else {
            alert('Too low! Try again.');
        }
    }
    
    // If the player runs out of attempts
    alert('Game over! The number was ' + secretNumber + '. Better luck next time!');
}