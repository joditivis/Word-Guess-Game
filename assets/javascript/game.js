console.log("javascripts loaded") // makes sure javascript is loading from html

// GLOBAL VARIABLES

//words that will rotate throughout the game for the player
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


//variables that will be used later for functions
var chosenWord = "";  //chosen word from array
var lettersInWord = []; //how many letters are in the word
var blankLetters = 0;  //how many blanks we need to display the word
var blanksAndRightGuesses = [];  //letters still remaining to be guessed (blanks) and correct letters guessed (revealed)


//variables used for the start of the game settings and will be used later for if and else 
var winCount = 0;  //keeps track of how many times player has won
var guessesLeft = 10;  //keeps track of the number of guesses the player has left
var losses = 0;  //keeps track of how many times the player lost
var wrongGuesses = [];  //letters stored under letters already guessed

//________________________________________________________
// FUNCTIONS to generate the arrays

//chooses a random word from words array
function gameStart() { //start of game function
    chosenWord = words[Math.floor(Math.random() * words.length)]; //generates a random word from the array
    lettersInWord = chosenWord.split("");  //.split adds an array of individual letters
    blankLetters = lettersInWord.length;  //calling the correct amount of letters in the word to display as a blank

    //reset
    guessesLeft = 10;
    blanksAndRightGuesses = [];
    wrongGuesses = [];

//populate blanksAndRightGuesses with correct number of blanks
    for (var i = 0; i < blankLetters; i++) { //takes the lettersInWord.length and determines the number of blanks needed
        blanksAndRightGuesses.push("_"); //pushes the _ to show in place of each blank letter
    }
    
//connecting html aspects
    document.getElementById("currentWord").innerHTML = blanksAndRightGuesses.join(" "); //.join makes the blank letters appear without the commas like they are in the console
    document.getElementById("lives").innerHTML = guessesLeft;
    document.getElementById("wins").innerHTML = winCount;
    document.getElementById("losses").innerHTML = losses;

//logging to make sure everything is showing up and working correctly
    console.log(chosenWord);
    console.log(lettersInWord);
    console.log(blankLetters);
    console.log(blanksAndRightGuesses);
}

function checkLetters(letter) {     
    //check if letter exists in word at all
    var isletterInWord = false; //variable for below statment for (isletterInWord)
      for (var j = 0; j < blankLetters; j++) { 
         if (chosenWord[j] == letter) {
           isletterInWord = true; //if the letter is in the word
       }
   }
   
   //check where in the word the letter exists then populate blanksAndRightGuesses
     if (isletterInWord) { //if letter isn't in the word
        for(var i = 0; i < blankLetters; i++) {
           if (chosenWord[i] == letter) {
               blanksAndRightGuesses[i] = letter;
          }
      }
  }
  //if letter wasn't found
  else {
      wrongGuesses.push(letter); //pushes wrong guessed letter to letters already guessed
      guessesLeft--; //subtracts from the amount of guesses player has left
  }

 //testing and debugging
  console.log(blanksAndRightGuesses);
  console.log(isletterInWord);
  console.log(letter);
}

function roundComplete() { 
    console.log("Wins: " + winCount + " Losses: " + losses + " Guesses left:" + guessesLeft);

    //make sure each round updates HTML to reflect the most recent information
    document.getElementById("lives").innerHTML = guessesLeft;
    document.getElementById("currentWord").innerHTML = blanksAndRightGuesses.join(" ");
    document.getElementById("letters-guessed").innerHTML = wrongGuesses.join(", ");
    
    //checks if user won
    if (lettersInWord.toString() == blanksAndRightGuesses.toString()) {
        winCount++; 
        //updates the win 
        document.getElementById("wins").innerHTML = winCount;
        gameStart();
    }
    else if (guessesLeft === 0) {
        losses++; 
        //updates page losses
        document.getElementById("losses").innerHTML = losses;
        gameStart();
    }
}

// MAIN PROCESS
// initiates the code the first time
gameStart();
// register key clicks
document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
     checkLetters(letterGuessed)
     roundComplete()
     console.log(letterGuessed);

     //doesn't allow user to guess same letter twice
     document.onkeyup = function (event) {
        var letterGuessed;
       // captures keypress, eliminating repeat letters
       if (event.keyCode >= 65 && event.keyCode <= 90) {
         letterGuessed = event.key;

         if(wrongGuesses.indexOf(letterGuessed)!==-1){
            return;
        }         
      // Runs code to check for correct guesses
      checkLetters(letterGuessed);   
      // Runs code that ends each round
      roundComplete();
         }  
    }
}