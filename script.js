const p1 = {
  score: 0,
  button: document.querySelector('.playerOneAdd'),
  display: document.querySelector('#p1Display'),
};
const p2 = {
  score: 0,
  button: document.querySelector('.playerTwoAdd'),
  display: document.querySelector('#p2Display'),
};

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playTo');
let winningScore = 3;
let isGameOver = false;

p1.button.addEventListener('click', function () {
  updateScores(p1, p2);
});
p2.button.addEventListener('click', function () {
  updateScores(p2, p1);
});

resetButton.addEventListener('click', reset);
winningScoreSelect.addEventListener('change', function () {
  winningScore = +this.value;

  reset();
});

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore && player.score > opponent.score + 1) {
      isGameOver = true;
      player.display.classList.add('won');
      opponent.display.classList.add('lost');
      player.button.disabled = true && player.button.classList.add('disabled');
      opponent.button.disabled = true && opponent.button.classList.add('disabled');
    } else if (player.score === winningScore - 1 && player.score === opponent.score) {
      winningScore += 1;
    }
    player.display.textContent = player.score;
  }
}


function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove('won', 'lost');
    p.button.classList.remove('disabled');
    p.button.disabled = false;
  }
}
