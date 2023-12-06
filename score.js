// Iteration 5: Store the player score and display it on the game over screen
let game_score = document.getElementById("score-board");
game_score.innerText = localStorage.getItem("count");
// making play button functional
const play_button = document.getElementById("play-again-button");
play_button.addEventListener("click", naafuntion2);
function naafuntion2() {
  location.replace("./game.html");
  // ---------------------------------

  function resetLocalStorageCount() {
    localStorage.setItem("count", "0"); // Set the count in local storage to zero
  }
  resetLocalStorageCount();
}

// local storage
// let v = localStorage.getItem("count")
