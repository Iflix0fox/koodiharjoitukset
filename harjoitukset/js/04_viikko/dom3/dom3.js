document
  .getElementById("inputText")
  .addEventListener("input", function (event) {
    document.getElementById("displaytext").textContent = event.target.value;
  });
