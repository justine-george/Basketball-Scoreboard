// Author: Justine George

// DOM elements
let hAdd1El = document.getElementById('h-add-1');
let hAdd2El = document.getElementById('h-add-2');
let hAdd3El = document.getElementById('h-add-3');
let gAdd1El = document.getElementById('g-add-1');
let gAdd2El = document.getElementById('g-add-2');
let gAdd3El = document.getElementById('g-add-3');

let hScoreboardContainer = document.getElementById('h-scoreboard-container');
let gScoreboardContainer = document.getElementById('g-scoreboard-container');
let hScoreBoard = document.getElementById('h-scoreboard');
let gScoreBoard = document.getElementById('g-scoreboard');

let resetBtn = document.getElementById('newgame-btn-container');

// variables to keep track of scores
let hScore = 0;
let gScore = 0;

// display initial scores as zero
hScoreBoard.textContent = hScore;
gScoreBoard.textContent = gScore;

// click event listeners
hAdd1El.addEventListener("click", () => {
    hScore += 1;
    updateHScoreBoard(hScore);
});
hAdd2El.addEventListener("click", () => {
    hScore += 2;
    updateHScoreBoard(hScore);
});
hAdd3El.addEventListener("click", () => {
    hScore += 3;
    updateHScoreBoard(hScore);
});
gAdd1El.addEventListener("click", () => {
    gScore += 1;
    updateGScoreBoard(gScore);
});
gAdd2El.addEventListener("click", () => {
    gScore += 2;
    updateGScoreBoard(gScore);
});
gAdd3El.addEventListener("click", () => {
    gScore += 3;
    updateGScoreBoard(gScore);
});
resetBtn.addEventListener("click", () => {
    hScore = gScore = 0;
    updateHScoreBoard(hScore);
    updateGScoreBoard(gScore);
});

// helper functions
function updateHScoreBoard(score) {
    hScoreBoard.textContent = score;
    updateWinner();
}
function updateGScoreBoard(score) {
    gScoreBoard.textContent = score;
    updateWinner();
}
function updateWinner() {
    if (hScore > gScore) {
        updateHScoreBoardStyle("5px solid rgb(128, 231, 159)", "0px 0px 5px rgb(107, 218, 140)");
        updateGScoreBoardStyle("5px solid black", "none");

    } else if (hScore < gScore) {
        updateHScoreBoardStyle("5px solid black", "none");
        updateGScoreBoardStyle("5px solid rgb(128, 231, 159)", "0px 0px 5px rgb(107, 218, 140)");
    } else {
        updateHScoreBoardStyle("5px solid black", "none");
        updateGScoreBoardStyle("5px solid black", "none");
    }
}
function updateHScoreBoardStyle(border, boxShadow) {
    hScoreboardContainer.style.border = border;
    hScoreboardContainer.style.boxShadow = boxShadow;
}
function updateGScoreBoardStyle(border, boxShadow) {
    gScoreboardContainer.style.border = border;
    gScoreboardContainer.style.boxShadow = boxShadow;
}
