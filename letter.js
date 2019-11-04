// Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:


// A string value to store the underlying character for the letter
// A boolean value that stores whether that letter has been guessed yet
// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
var inquirer = require("inquirer");
var fs = require("fs");


// var userInput = process.argv[2];
var validLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var guessedLetter = ["H"];
var guessed = false;

// WORD
var movies = [
    "The Wave",
    "The Impossible",
    "The Perfect Storm",
    "San Andreas",
    "The Day After Tomorrow",
    "Dantes Peak",
    "Contagion",
    "Twister"
];

var movieArray;
var randomMovie = movies[Math.floor(Math.random() * movies.length)];

// List states to check for each letter.
var isValid = false;
var correctMatch = false;
var alreadyGuessed = false;

function parseMovie(word) {
    movieArray = [];
    for (i = 0; i < word.length; i++) {
        if (word[i] != " ") {
            movieArray.push("__");
        } else if (word[i] === " ") {
            movieArray.push(" ");
        }
    }
    console.log(movieArray.join(" "));
}

inquirer
    .prompt([
        {
            name: "letter",
            message: "Guess a letter!"
        }
    ])
    .then(function (response) {
        for (i = 0; i < validLetters.length; i++) {
            if (response.letter.toUpperCase() === validLetters.charAt(i)) {
                isValid = true;
                console.log("\nYou guessed the letter: " + response.letter.toUpperCase());
            } else {
                return console.log("That is not a valid letter");
            }
        }
        // add in check for already guessed letters
    });




    // module.exports = movieArray;