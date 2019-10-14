window.onload = function () {}

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
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = word.length;
