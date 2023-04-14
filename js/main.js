(() => {
  const refs = {
  openModalBtn: document.querySelector("[data-modal-open]"),
  closeModalBtn: document.querySelector("[data-modal-close]"),
  modal: document.querySelector("[data-modal]"),
  };
  const registrationBtn = document.querySelector('.registration-btn');
  const enemyContainer = document.querySelector(".enemy-container");
  
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  
  function toggleModal() {
  refs.modal.classList.toggle("is-hidden");
  }
  
  function handleFormSubmit(event) {
  event.preventDefault(); // чтобы страница не перезагружалась
  // ваш код обработки формы, например, отправка данных на сервер
  
  registrationBtn.classList.add('is-hidden'); // добавляем класс, который скроет кнопку
  enemyContainer.classList.remove("is-hidden");
  refs.modal.classList.add("is-hidden"); // скрываем модальное окно после успешной отправки формы

}
  
  const form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
  })();

const scoreContainer = document.querySelector(".score");
const levelContainer = document.querySelector(".level");

const enemyImages = ["img/pic1.png", "img/pic2.png", "img/pic3.png", "img/pic4.png", "img/pic5.png"];
const enemyWidth = [200, 200, 300, 350, 400];
const levelUpModal = document.querySelector("#level-up-modal");
const levelNumber = document.querySelector(".level-number");
const gameOverModal = document.querySelector("#game-over-modal");
const gameOverModalBtn = document.querySelector(".modal-close");
const finalScore = document.querySelector(".final-score");
const targetClicks = [5, 7, 9, 12, 15];
let currentLevel = 1;
let currentScore = 0;


function start() {
  const registrationBtn = document.querySelector('.registration-btn');
  const enemyContainer = document.querySelector(".enemy-container");  
  enemyContainer.onclick = () => {
    currentScore++;
    updateScore();
  
    if (currentScore === targetClicks[currentLevel - 1]) {
      currentLevel++;
      if (currentLevel > 5) {
        endGame();
      } else {
        congratulatePlayer();
        updateLevel();
        updateEnemy();
        updateWidth();
        setTimeout(() => {
          levelUpModal.classList.remove("active");
        }, 800);
      }
    }
  }
}

function updateScore() {
  scoreContainer.textContent = `Clicks score: ${currentScore}`;
}

function updateLevel() {
  levelContainer.textContent = `Level: ${currentLevel}`;
}

function updateEnemy() {
  const enemyContainer = document.querySelector(".enemy-container"); 
  enemyContainer.src = `${enemyImages[currentLevel - 1]}`;
}

function updateWidth() {
  const enemyContainer = document.querySelector(".enemy-container"); 
  enemyContainer.width = `${enemyWidth[currentLevel - 1]}`;
}

function congratulatePlayer() {
  levelNumber.textContent = currentLevel;
  levelUpModal.classList.add("active");
}


function endGame() {
  finalScore.textContent = currentScore;
  gameOverModal.classList.add("active")
  gameOverModalBtn.addEventListener("click", () => {
    gameOverModal.classList.remove("active");
  });
}

start();

const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", resetGame);

function resetGame() {
  // Обнуляем уровень и количество очков
  currentLevel = 1;
  currentScore = 0;
  updateScore();
  updateLevel();
  updateEnemy();
  updateWidth();
}
