/**
 * Secret Word
 *
 * Computer randomly chooses secret word from a set of 3 words: "banana", "chisel" and "faucet"
 * To win, player must guess correctly twice in total.
 * For each guess, output all information (guessed word, secret word, how many correct guesses still required)
 */

var numCorrectGuessesNeededToWin = 2;
var numCorrectGuessesSoFar = 0;

// Randomly return either banana, chisel or faucet.
var generateSecretWord = function () {
  // Generate random number between 1 and 3
  var numPossibleWords = 3;
  var randomNum = Math.floor(Math.random() * numPossibleWords) + 1;

  // Return the word that corresponds to the relevant number
  if (randomNum == 1) {
    return "banana";
  }
  if (randomNum == 2) {
    return "chisel";
  }
  return "faucet";
};

var main = function (input) {
  var secretWord = generateSecretWord();
  var standardMessage = `You guessed: ${input}. Secret word: ${secretWord}.`;
  if (secretWord == input) {
    numCorrectGuessesSoFar += 1;
    if (numCorrectGuessesSoFar >= numCorrectGuessesNeededToWin) {
      // Reset counter of correct guesses to restart game.
      numCorrectGuessesSoFar = 0;
      return `${standardMessage} You guessed correctly twice in total. You win! Please play again.`;
    }
    //if guess correct once
    return `${standardMessage} You guessed correctly! You need 1 more correct guess to win.`;
  }
  var numCorrectGuessesLeftToWin =
    numCorrectGuessesNeededToWin - numCorrectGuessesSoFar;
  return `${standardMessage} You guessed incorrectly. You need ${numCorrectGuessesLeftToWin} more correct guesses to win.`;
};
