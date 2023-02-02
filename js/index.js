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
let hScore = localStorage.getItem("hScore") ?? 0;
let gScore = localStorage.getItem("gScore") ?? 0;

// display initial scores as zero
hScoreBoard.textContent = hScore;
gScoreBoard.textContent = gScore;

// click event listeners
hAdd1El.addEventListener("click", () => {
    hScore += 1;
    updateScoreOnBoard(hScoreBoard, hScore);
});
hAdd2El.addEventListener("click", () => {
    hScore += 2;
    updateScoreOnBoard(hScoreBoard, hScore);
});
hAdd3El.addEventListener("click", () => {
    hScore += 3;
    updateScoreOnBoard(hScoreBoard, hScore);
});
gAdd1El.addEventListener("click", () => {
    gScore += 1;
    updateScoreOnBoard(gScoreBoard, gScore);
});
gAdd2El.addEventListener("click", () => {
    gScore += 2;
    updateScoreOnBoard(gScoreBoard, gScore);
});
gAdd3El.addEventListener("click", () => {
    gScore += 3;
    updateScoreOnBoard(gScoreBoard, gScore);
});
resetBtn.addEventListener("click", () => {
    hScore = gScore = 0;
    updateScoreOnBoard(hScoreBoard, hScore);
    updateScoreOnBoard(gScoreBoard, gScore);
});

// helper functions
function updateScoreOnBoard(container, score) {
    container.textContent = score;
    localStorage.setItem("hScore", hScore);
    localStorage.setItem("gScore", gScore);
    updateWinnerStyling();
}
function updateWinnerStyling() {
    if (hScore > gScore) {
        if (!hScoreboardContainer.classList.contains("winner-scoreboard"))
            hScoreboardContainer.classList.add("winner-scoreboard");
        gScoreboardContainer.classList.remove("winner-scoreboard");
    } else if (hScore < gScore) {
        if (!gScoreboardContainer.classList.contains("winner-scoreboard"))
            gScoreboardContainer.classList.add("winner-scoreboard");
        hScoreboardContainer.classList.remove("winner-scoreboard");
    } else {
        hScoreboardContainer.classList.remove("winner-scoreboard");
        gScoreboardContainer.classList.remove("winner-scoreboard");
    }
}