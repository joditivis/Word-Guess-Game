    var words = [
     "Empire State Building", 
     "Taxi", 
     "Broadway", 
     "China Town", 
     "Central Park", 
     "Statue of Liberty",
     "Coney Island",
     "Big Apple",
     "Traffic",
     "Concrete Jungle",
     "Times Square",
     "Brooklyn Bridge",
     "The Metropolitan Museum",
]; 

    var wins = 0;
    var currentWord = [];
    var alreadyGuessed = [];
    var lives = 10;

    var directionsText = document.getElementById("directions-text");
    var playerChoice = document.getElementById("words");
    var winsText = document.getElementById("wins");
    var currentWordText = document.getElementById("current-word");
    var livesText = document.getElementById("lives");
    var alreadyGuessedText = document.getElementById("already-guessed");
}
    document.onkeyup = function(event) {

        var playerGuess = event.key;


    directionsText.textContent = "";

    winsText = "Wins: " + wins;
    currentWordText = "Current word: " + words;
    livesText = "Remaining guesses: " + lives;
    alreadyGuessedText.textContent = "Letters already guessed: " + event.key;
}


