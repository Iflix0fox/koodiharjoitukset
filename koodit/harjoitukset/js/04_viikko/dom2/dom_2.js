// document.getElementById("addbutton").addEventListener("click"),
//
function addfruit() {
  const friut = document.getElementById("fruitinput");

  // jos tekstikenttää ie ole thyjä, toteutetaan elementin lisäminen
  if (friut.value !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = friut.value;

    document.getElementById("fruitlist").appendChild(listItem);
    friut.value = "";
  }
}

document.getElementById("addbutton").addEventListener("click", addfruit);

document
  .getElementById("fruitinput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addfruit();
    }
  });
