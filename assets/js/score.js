// Get a reference to the highscores list
const highscoresList = document.querySelector("#highscores");

// Get the highscores from local storage
const highscores = JSON.parse(localStorage.getItem("highscores")) || [];

// Sort the highscores in descending order
highscores.sort((a, b) => b.score - a.score);

// Loop through the highscores and add them to the list
highscores.forEach(score => {
  const li = document.createElement("li");
  li.textContent = `${score.initials} - ${score.score}`;
  highscoresList.appendChild(li);
});

// Get a reference to the "Go Back" button
const goBackBtn = document.querySelector("a button");

// Add a click event listener to the "Go Back" button
goBackBtn.addEventListener("click", () => {
  // Code to navigate back to the main page goes here
});

// Get a reference to the "Clear Highscores" button
const clearBtn = document.querySelector("#clear");

// Add a click event listener to the "Clear Highscores" button
clearBtn.addEventListener("click", () => {
  // Code to clear the highscores from local storage goes here
});
