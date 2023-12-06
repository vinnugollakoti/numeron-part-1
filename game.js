// Iteration 2: Generate 2 random number and display it on the screen
let min = 1;
let max = 99;
let randomInt1 = Math.floor(Math.random() * (max - min + 1)) + min;
let randomInt2 = Math.floor(Math.random() * (max - min + 1)) + min;
const first_number = document.getElementById("number1");
const second_number = document.getElementById("number2");
function changenumbers() {
  first_number.textContent = randomInt1;
  second_number.textContent = randomInt2;
}
changenumbers();
// Iteration 3: Make the options button functional
// giving values for the images of operators
const greater_than = document.getElementById("greater-than");
const equal_to_button = document.getElementById("equal-to");
const less_than_button = document.getElementById("lesser-than");

// making function for all the operators
greater_than.addEventListener("click", makingfunction1);
equal_to_button.addEventListener("click", makingfunction2);
less_than_button.addEventListener("click", makingfunction3);

// ------------ Score---------------------

// Retrieve the count from localStorage or default to 0 if it doesn't exist
let count = localStorage.getItem('count') || 0;

// Function to increment count
function incrementCount() {
  count = parseInt(count) + 1;
  localStorage.setItem('count', count);
  console.log(`Count: ${count}`);
}


// Add click event listeners to each button
greater_than.addEventListener("click", incrementCount);
equal_to_button.addEventListener("click", incrementCount);
less_than_button.addEventListener("click", incrementCount);

console.log(`Initial Count: ${count}`);

// -----------------------------------------------

// let us check for the greater than symbol
function makingfunction1() {
  if (first_number.textContent > second_number.textContent) {
    location.reload("./game.html");
  } else {
    location.replace("./gameover.html")
  }
  console.log(typeof first_number.textContent);
}
// let us check for equal than symbol
function makingfunction2() {
  if (first_number.textContent == second_number.textContent) {
    location.reload("./game.html");
  } else {
    location.replace("./gameover.html")
  }
}

// let uf check for less than symbol
function makingfunction3() {
  console.log(first_number.textContent + "clicked" + second_number.textContent);
  if (randomInt1 < randomInt2) { 
    location.reload("./game.html");
  } else {
    location.replace("./gameover.html")
  }
}
// Iteration 4: Build a timer for the game
const timer = document.getElementById("timer");

// --------------------------

// timer code
// Select the div where you want to display the timer output

// Set the countdown duration in seconds
let countdown = 10; // Change this to your desired countdown duration in seconds

// Function to update the timer display
function updateTimer() {
  timer.textContent = countdown; // Display countdown in the selected div

  // Decrease countdown by 1
  countdown--;

  // Check if countdown has reached 0
  if (countdown < 0) {
    clearInterval(timerInterval); // Clear the interval when countdown reaches 0
    location.replace("./gameover.html") // Display a message when the timer ends
  }
}

// Call the updateTimer function every second
const timerInterval = setInterval(updateTimer, 1000);
