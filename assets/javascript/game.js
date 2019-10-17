// GLOBAL VARIABLES
var words = [
     "empire state building", 
     "taxi", 
     "broadway", 
     "china town", 
     "central park", 
     "statue of liberty",
     "coney island",
     "big apple",
     "traffic",
     "concrete jungle",
     "times square",
     "brooklyn bridge",
     "the metropolitan museum",
     "hot dogs",
     "rockefeller center",
     "fifth avenue",
     "grand central station",
     "wall street"]; 

var chosenWord = "";
var lettersInWord = [];
var blankLetters = 0; 
var blanksAndGuesses = [];
var wrongGuesses = [];

var winCount = 0;
var guessesLeft = 10;

// FUNCTIONS
function gameStart() {   
    chosenWord = words[Math.floor(Math.random() * words.length)];
    lettersInWord = chosenWord.split("");
    blankLetters = lettersInWord.length;

//reset for each round
function reset() {
    guessesLeft = 10;
    blanksAndGuesses = [];
    wrongGuesses = [];


//fill blanks and guesses with the number of letters in the chosen word
    for (var i = 0; i < blankLetters; i++) {
        blanksAndGuesses.push("_");
    }

//connecting html aspects
    document.getElementById("currentWord").innerHTML = blanksAndGuesses.join("   ");
    document.getElementById("lives").innerHTML = guessesLeft;
    document.getElementById("wins").innerHTML = winCount;


//logging to make sure it's showing up correctly
    console.log(chosenWord);
    console.log(lettersInWord);
    console.log(blankLetters);
    console.log(blanksAndGuesses)

}

// MAIN PROCESS
gameStart()
reset()
}
