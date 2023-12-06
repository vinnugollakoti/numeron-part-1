// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.
const play_button = document.getElementById("play-button");
play_button.addEventListener("click",naaFunction)
function naaFunction(){
    location.replace("./game.html")
}