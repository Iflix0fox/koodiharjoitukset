console.log("Hello, world! Welcome to my static website.");

//const flipContainer = document.querySelector(".flip-container");

// flipContainer.addEventListener("mouseenter", () => {
//   flipContainer.style.backgroundColor = " black "; // color when flipped
// });

// flipContainer.addEventListener("mouseleave", () => {
//   flipContainer.style.backgroundColor = ""; // reset to default
// });
// function showTime() {
//   document.getElementById("bodyH1").innerHTML = new Date().toUTCString();
// }
// showTime();
// setInterval(function () {
//   showTime();
// }, 1000);

function updateDateTime() {
  const now = new Date();
  const dateStr = now.toLocaleDateString();
  const timeStr = now.toLocaleTimeString();
  document.getElementById("bodyH1").innerHTML = `${dateStr} ${timeStr}`;
}

setInterval(updateDateTime, 1000);
