/* QUESTION 1 */
// fetch html elements
let roundSelector = document.getElementById("playto");
let plyrOneBtn = document.getElementById("p1Button");
let plyrTwoBtn = document.getElementById("p2Button");
let resetBtn = document.getElementById("reset");

let plyrOneDisplay = document.getElementById("p1Display");  
let plyrTwoDisplay = document.getElementById("p2Display");  

// global variables for player scores
let plyrOneScore = 0;
let plyrTwoScore = 0;

// add event listeners to the button
plyrOneBtn.addEventListener("click", updateScore);
plyrTwoBtn.addEventListener("click", updateScore);
resetBtn.addEventListener("click", resetGame);

// function to update score
function updateScore(e) {
    if (e.target.id == "p1Button") {
        plyrOneScore++;
        plyrOneDisplay.innerHTML = plyrOneScore;
    } else {
        plyrTwoScore++;
        plyrTwoDisplay.innerHTML = plyrTwoScore;
    }

    if(roundSelector.value == plyrOneScore || roundSelector.value == plyrTwoScore) {
        plyrOneBtn.disabled = true;
        plyrTwoBtn.disabled = true;
        if(roundSelector.value == plyrOneScore) {
            plyrOneDisplay.style.color = "green";
            plyrTwoDisplay.style.color = "red";
        } else {
            plyrOneDisplay.style.color = "red";
            plyrTwoDisplay.style.color = "green";
        }
    }
}

// function for reset game
function resetGame() {
    plyrOneBtn.disabled = false;
    plyrTwoBtn.disabled = false;

    plyrOneScore = 0;
    plyrTwoScore = 0;

    plyrOneDisplay.innerHTML = plyrOneScore;
    plyrTwoDisplay.innerHTML = plyrTwoScore;

    plyrOneDisplay.removeAttribute("style");
    plyrTwoDisplay.removeAttribute("style");

}
