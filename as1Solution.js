/* QUESTION 1 */
let roundSelector = document.getElementById("playto");
let plyrOneBtn = document.getElementById("p1Button");
let plyrTwoBtn = document.getElementById("p2Button");
let resetBtn = document.getElementById("reset");

let plyrOneDisplay = document.getElementById("p1Display");  
let plyrTwoDisplay = document.getElementById("p2Display");  

let plyrOneScore = 0;
let plyrTwoScore = 0;

plyrOneBtn.addEventListener("click", updateScore);

plyrTwoBtn.addEventListener("click", updateScore);


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
