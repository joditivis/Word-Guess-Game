$(document).ready(function() {
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

    console.log(chosenWord);
    console.log(lettersInWord);
    console.log(blankLetters);

    //reset for each round
    guessesLeft = 10;
    wrongGuesses = [];

}

// MAIN PROCESS
gameStart()

});