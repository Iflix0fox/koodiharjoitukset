const claims = [
  { text: "I have climbed Mount Everest.", isLie: true },
  { text: "I speak six languages.", isLie: false },
  { text: "I have a pet turtle.", isLie: false },
];

// Shuffle function to randomize order
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Place claims into buttons
window.onload = function () {
  const shuffledClaims = shuffle(claims);
  document.getElementById("c1").value = shuffledClaims[0].text;
  document.getElementById("c2").value = shuffledClaims[1].text;
  document.getElementById("c3").value = shuffledClaims[2].text;

  // Save the shuffled array for checking later
  window.claimsOrder = shuffledClaims;

  // Add event listeners
  document.getElementById("c1").addEventListener("click", () => handleGuess(0));
  document.getElementById("c2").addEventListener("click", () => handleGuess(1));
  document.getElementById("c3").addEventListener("click", () => handleGuess(2));
};

// Function to handle guess
function handleGuess(index) {
  const selectedClaim = window.claimsOrder[index]; // Corrected variable name here
  // Show result
  if (selectedClaim.isLie) {
    alert("🎉 Correct! You found the lie.");
  } else {
    alert("❌ Nope! That one is true.");
  }
}

// Reset the claim buttons' labels
function resetGame() {
  const shuffledClaims = shuffle(claims); // Fixed shuffle logic
  document.getElementById("c1").value = shuffledClaims[0].text;
  document.getElementById("c2").value = shuffledClaims[1].text;
  document.getElementById("c3").value = shuffledClaims[2].text;

  // Clear the result alert from previous rounds
  alert("New round started! Try to find the lie again!");
}

// Add event listener for the submit button
const submitButton = document.querySelector("input[type='submit']");
submitButton.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent page reload on submit
  resetGame(); // Reset game for the next round
});
