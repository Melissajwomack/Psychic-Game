//Variables

var letterOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;

var loses = 0;

var guessesLeft = 9;

var guessesSoFar = [];

//Computer choses a letter

var computerGuess = letterOptions[Math.floor(Math.random() * letterOptions.length)];
console.log("Correct letter: " + computerGuess)

//Function to reset game

function resetGame() {
    console.log("GAME RESET");

    computerGuess = letterOptions[Math.floor(Math.random() * letterOptions.length)];
    console.log("Correct letter: " + computerGuess)

    guessesLeft = 9;

    guessesSoFar = [];

}

//User makes a guess
document.onkeyup = function (event) {

    var userGuess = event.key.toLowerCase();
    console.log("Current guess: " + userGuess)

    //Wins increase if user's letter matches computer's and game resets

    if (userGuess === computerGuess) {
        wins++;
        console.log("YOU WON");
        console.log("Number of wins: " + wins);
        resetGame();
    }

    //Number of guesses left decreases (starting at 9, until reaching 0) when user makes a guess and doesn't match computer

    else {

        --guessesLeft;
        console.log("Guesses left: " + guessesLeft);

        guessesSoFar.push(userGuess)
        console.log("Letters guessed: " + guessesSoFar);

    }

    //Game resets if user guesses 9 times without getting correct answer
    if (guessesLeft < 1) {
        loses++;
        console.log("YOU LOST");
        console.log("Number of loses: " + loses);
        resetGame();
    }

}

//Still need:

//User's guesses are logged in the guessesSoFar array, which is recorded on HTML

//HTML gets updated during game and after each reset



