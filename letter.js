// Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:


// A string value to store the underlying character for the letter
// A boolean value that stores whether that letter has been guessed yet
// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
var inquirer = require("inquirer");
var fs = require("fs");


// var userInput = process.argv[2];
var validLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var guessed = false;

// // WORD
// var movies = [
//     "The Wave",
//     "The Impossible",
//     "The Perfect Storm",
//     "San Andreas",
//     "The Day After Tomorrow",
//     "Dantes Peak",
//     "Contagion",
//     "Twister"
// ];

// var movieArray;
// var randomMovie = movies[Math.floor(Math.random() * movies.length)];

// function parseMovie(word) {
//     movieArray = [];
//     for (i = 0; i < word.length; i++) {
//         if (word[i] != " ") {
//             movieArray.push("_");
//         } else if (word[i] === " ") {
//             movieArray.push(" ");
//         }
//     }
//     console.log(randomMovie);
//     console.log(movieArray.join(" "));
// }

var guesses = "";

function userGuess(response) {
    var runCheck = true;
    var isValid = false;
    // for (i = 0; i < validLetters.length; i++) {
    //     if (response.letter.toUpperCase() === validLetters.charAt(i)) {
    //         isValid = true;
    //     }
    // }

    if (response) {
        console.log("\nYou guessed the letter: " + response.letter.toUpperCase());
        if (response.letter === "q") {
            console.log("That is not a valid letter");
            runCheck = false;
        } else {
            guesses += response.letter;
            console.log(guesses.toUpperCase());
        }
    }

    if (runCheck) {
        inquirer
            .prompt([
                {
                    name: "letter",
                    message: "Guess a letter!"
                }
            ])
            .then(userGuess);
    };
}

userGuess(null);
    // module.exports = movieArray;