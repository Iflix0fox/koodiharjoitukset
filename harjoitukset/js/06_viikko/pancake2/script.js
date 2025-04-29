document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("pancakeForm");
  const totalPriceBanner = document.getElementById("totalPrice");
  const totalPriceDisplay = document.getElementById("totalPriceDisplay");
  const orderButton = document.getElementById("seeOrder");
  const summryText = document.getElementById("summaryText");

  let toppings = [];
  let extras = [];

  form.addEventListener("change", function (event) {
    const target = event.target;
    if (target.classList.contains("topping")) {
      handleToppings(target);
    } else if (target.classList.contains("extra")) {
      handleExtras(target);
    }

    updatePrice();
  });

  function handleToppings(checkbox) {
    const toppingName = checkbox.parentElement.textContent.trim();
    if (checkbox.checked) {
      toppings.push(toppingName);
    } else {
      toppings = toppings.filter((topping) => topping !== toppingName);
    }

    console.log("täytteet", toppings);
  }

  function handleExtras(checkbox) {
    const exstraName = checkbox.parentElement.textContent.trim();
    if (checkbox.checked) {
      extras.push(exstraName);
    } else {
      extras = extras.filter((extras) => extras !== exstraName);
    }
    console.log("exstars", extras);
  }

  function updatePrice() {
    const pancakeType = document.getElementById("type");
    const selectedType = pancakeType.option[pancakeType.selectedIndex];
    let total = parseFloat(selectedType.getAttribute("data-price"));

    totalPriceBanner.textContent = total;
    totalPriceDisplay.textContent = total;
  }
});
