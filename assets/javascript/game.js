console.log("javascripts loaded")

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
var losses = 0;

// FUNCTIONS
function gameStart() { 

    chosenWord = words[Math.floor(Math.random() * words.length)];
    lettersInWord = chosenWord.split("");
    blankLetters = lettersInWord.length;


//fill blanks and guesses with the number of letters in the chosen word
    for (var i = 0; i < blankLetters; i++) {
        console.log(i,":", lettersInWord[i].charCodeAt(0))
        if (lettersInWord[i].charCodeAt(0) ===160){
            blanksAndGuesses.push(" ")
    }
    else{
        blanksAndGuesses.push("_");
   }
}

//connecting html aspects
    document.getElementById("currentWord").innerHTML = blanksAndGuesses.join(" ");
    document.getElementById("lives").innerHTML = guessesLeft;
    document.getElementById("wins").innerHTML = winCount;
    document.getElementById("losses").innerHTML = losses;


//logging to make sure it's showing up correctly
    console.log(chosenWord);
    console.log(lettersInWord);
    console.log(blankLetters);
    console.log(blanksAndGuesses);
}

function reset() {
    guessesLeft = 10;
    blanksAndGuesses = [];
    wrongGuesses = [];
}

// MAIN PROCESS
document.onkeyup = function(event) {

    if (lettersInWord.indexOf(event.key) === -1) {
        guessesLeft--
        if(guessesLeft === 0){
            losses++
            losses.innerHTML = losses;
            // show a message saying you loose and reveal the word
            // play again 
    }
}
    else{
       for ( var i =0; i < lettersInWord.length; i++){
          if (lettersInWord[i] === event.key){
            blanksAndGuesses[i] = event.key
    }
}
    document.getElementById("currentWord").innerHTML = blanksAndGuesses.join(" ");
      if (blanksAndGuesses.indexOf("_")=== -1){
         winCount++
         wins.innerHTML = winCount;
    }

    console.log(event.key);
    console.log(losses);
    console.log(winCount)
}
    

  
    // verify if the letter is included in the word to guess
    // if yes you need to show the letters 
    // if not include ( reduce theguessleft, show this to theuser, verify if have more guesleft, if not losses)
}
reset()
gameStart()




