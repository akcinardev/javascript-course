'use strict';

const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const bodyEl = document.querySelector('body');
const highscoreEl = document.querySelector('.highscore');
const guessEl = document.querySelector('.guess');
const numberEl = document.querySelector('.number');

let againBtn = document.querySelector('.again');

let score = 20;
let highscore = 0;

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function decreaseScore() {
  score--;
  scoreEl.textContent = score;
}

function gameWon() {
  numberEl.textContent = secretNum;
  bodyEl.style.backgroundColor = '#60b347';
  numberEl.style.width = '30rem';
  updateHighscore(score);
}

function updateHighscore(score) {
  if (score > highscore) {
    highscoreEl.textContent = score;
  }
}

function gameReset() {
  bodyEl.style.backgroundColor = '#222';
  numberEl.style.width = '15rem';
  secretNum = getRandomNum(1, 20);
  numberEl.textContent = '?';
  score = 20;
  scoreEl.textContent = 20;
  guessEl.value = '';
}

againBtn.addEventListener('click', gameReset);

let secretNum = getRandomNum(1, 20);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessEl.value);

  if (!guess) {
    messageEl.textContent = 'Invalid Number';
  } else if (guess === secretNum) {
    messageEl.textContent = 'Correct Number';
    gameWon();
  } else if (guess > secretNum) {
    if (score > 0) {
      messageEl.textContent = 'Too High';
      decreaseScore();
    } else {
      messageEl.textContent = 'You lost the game';
    }
  } else if (guess < secretNum) {
    if (score > 0) {
      messageEl.textContent = 'Too Low';
      decreaseScore();
    } else {
      messageEl.textContent = 'You lost the game';
    }
  }
});
