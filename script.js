let number = Math.floor(Math.random() * 20) + 1;
const winOrLose = document.querySelector('#heading');
const gameContainer = document.querySelector('#game-container');
const guessNumber = document.querySelector('#guess-number');
const guessNumberPar = document.querySelector('#guess-num-par');
const guessTimes = document.querySelector('#guess-time');
const remainGuesses = document.querySelector('#remaining-guess');
const guessBox = document.querySelector('#guess-box');
const guessBtn = document.querySelector('#guess-btn');
const rightOrWrong = document.querySelector('#guessed-right-wrong');
const lowOrHigh = document.querySelector('#lowOrHigh');
const newGame = document.querySelector('#start-new-game');

const setStartingValue = function () {
  guessNumberPar.style.display = 'none';
  winOrLose.style.display = 'none';
  guessTimes.textContent = 0;
  remainGuesses.textContent = 10;
  newGame.style.display = 'none';
};
setStartingValue();

const showMessage = function (message) {
  lowOrHigh.textContent = message;
};

const showWinOrLose = function (showWinnerOrLoser) {
  gameContainer.style.display = 'none';
  winOrLose.textContent = showWinnerOrLoser;
  winOrLose.style.display = 'block';
  guessNumberPar.style.display = 'block';
  guessNumber.textContent = number;
  newGame.style.display = 'block';
};

const reStartGame = function () {
  number = Math.floor(Math.random() * 20) + 1;
  guessNumberPar.style.display = 'none';
  winOrLose.style.display = 'none';
  guessTimes.textContent = 0;
  remainGuesses.textContent = 10;
  newGame.style.display = 'none';
  gameContainer.style.display = 'block';
  guessBox.value = '';
  showMessage('');
};

guessBtn.addEventListener('click', () => {
  const inputValue = Number(guessBox.value);

  if (!inputValue) {
    alert('Please enter number');
    return;
  }

  if (Number(remainGuesses.textContent > 0)) {
    guessTimes.textContent++;
  }

  if (Number(remainGuesses.textContent) > 0) {
    remainGuesses.textContent--;
  }

  if (inputValue === number) {
    showWinOrLose('You Win');
  }

  if (Number(remainGuesses.textContent) === 0) {
    showWinOrLose('You Lose');
  }

  if (inputValue > number) {
    showMessage('Too High');
  }
  if (inputValue < number) {
    showMessage('Too Low');
  }
});

newGame.addEventListener('click', () => {
  reStartGame();
});
