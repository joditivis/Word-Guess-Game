window.onload = function () {

    var words;
    var lives;
    var space;
    var guesses = [ ];
    var chosenWord;

    var showLives = document.getElementById("lives");
    var showWord = document.getElementById("word");
}

  result = function () {
      wordHolder = document.getElementById('hold');
      correct = document.createElement('ul');

      for (var i = 0; i < word.length; i++) {
          correct.setAttribute('id', 'words');
          guess = document.createElement ('li');
          guess.setAttribute('class', 'guess');
          if (word[i] === " ") {
              guess.inner.HTML = " ";
              space = 1;
          } else {
              guess.innerHTML = "_";
          }

          guesses.push(guess);
          wordHolder.appendChild(correct);
          correct.appendChild(guess);
      }
  }

//Words that will filter throughout the game
var words = [
    "Empire State Building", 
    "Taxi", 
    "Broadway", 
    "China Town", 
    "Central Park", 
    "Statue of Liberty",
    "Coney Island",
    "Big Apple",
    "Traffic",
    "Concrete Jungle",
    "Times Square",
    "Brooklyn Bridge",
    "The Metropolitan Museum",
];

//Picks a random word
var word = words[Math.floor(Math.random() * words.length)];

// Answers
newFunction();
var remainingLetters = word.length;
function newFunction() {
    var answerArray = [];
    for (var j = 0; j < word.length; j++) {
        answerArray[j] = "_";
    }
}

