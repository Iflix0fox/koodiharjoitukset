document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("pancakeForm");
  const totalPriceBanner = document.getElementById("totalPrice");
  const totalPriceDisplay = document.getElementById("totalPriceDisplay");
  const orderButton = document.getElementById("seeOrder");
  const summaryText = document.getElementById("summaryText");

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
    const selectedType = pancakeType.options[pancakeType.selectedIndex];
    let total = parseFloat(selectedType.getAttribute("data-price"));

    orderButton.addEventListener("click", function () {
      const customerName = document.getElementById("customerName").value.trim();
      const delivery = document
        .querySelector("input[name=delivery]:checked")
        .parentElement.textContent.trim();

      let summary =
        "<strong>Asiaks: </strong>" + (customerName || "(ei nimeä)") + "<br>";

      // let summary = `<strong>Asiaks:</strong> ${ customerName || "(ei nimeä)" } <br>`;

      summary += "<strong>tyypi: </strong>" + selectedType.value + "<br>";

      summary +=
        "<strong>täytteet: </strong>" +
        (toppings.length > 0 ? toppings.join(", ") : "Ei täytteitä") +
        "<br>";

      summary +=
        "<strong>lisukkeet: </strong>" +
        (extras.length > 0 ? extras.join(", ") : "Ei lisukeita") +
        "<br>";

      summary += "<strong>toimitustapa: </strong> " + delivery + "<br>";

      summary +=
        "<strong>kokonaishinta on: </strong>" + totalPriceDisplay.textContent;

      summaryText.innerHTML = summary;

      const order = {
        id: Date.now(),
        costumerName: customerName || "(ei nimeä)",
        selectPancake: selectedType.value,
        toppings: [...toppings],
        extars: [...extras],
        deliveryMethod: delivery,
        totalPrice: parseFloat(totalPriceDisplay.textContent),
        status: "waiting",
      };

      const orders = JSON.parse(localStorage.getItem("orders")) || [];

      orders.push(order);

      localStorage.setItem("orders", JSON.stringify(orders));

      const MessegeEL = document.getElementById("orderMessage");
      MessegeEL.textContent = "Order saved!";

      setTimeout(() => {
        MessegeEL.textContent = "";
      }, 3000);
    });

    total = total + toppings.length * 1;
    // haetaan lisukkeet listaan ja ksäitellään lista. Lisätään valittujan hinta
    let extraChoises = document.querySelectorAll(".extra");
    extraChoises.forEach((checkbox) => {
      {
        if (checkbox.checked) {
          total = total + parseFloat(checkbox.getAttribute("data-price"));
        }
      }
    });

    // haetaan klujetuksen arvo ja lisätään hinta (hinta voi olla nolla)
    let delivery = document.querySelector("input[name='delivery']:checked");
    total += parseFloat(delivery.getAttribute("data-price"));

    // motoillaan kokonaishinta desimaalisksi
    let formatedTotal = total.toFixed(2) + " €";
    totalPriceBanner.textContent = formatedTotal;
    totalPriceDisplay.textContent = formatedTotal;
  }

  const ingredientList = document.getElementById("ingredientList");
  const newIngredient = document.getElementById("newIngredient");
  const addIngredientBtn = document.getElementById("addIngredient");

  addIngredientBtn.addEventListener("click", () => {
    const ingredient = newIngredient.value.trim();
    if (ingredient) {
      const li = document.createElement("li");
      li.textContent = ingredient;

      // Make it removable when clicked
      li.addEventListener("click", () => li.remove());

      ingredientList.appendChild(li);
      newIngredient.value = "";
    }
  });

  let seconds = 0;
  let timeInterval = null;

  const timeDisplay = document.getElementById("timeDisplay");
  const startBtn = document.getElementById("start");
  const pauseBtn = document.getElementById("pause");
  const resetBtn = document.getElementById("reset");

  function updateDisplay() {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    timeDisplay.textContent = `${mins}:${secs}`;
  }

  startBtn.addEventListener("click", () => {
    if (!timeInterval) {
      timeInterval = setInterval(() => {
        seconds++;
        updateDisplay();
      }, 1000);
    }
  });

  pauseBtn.addEventListener("click", () => {
    clearInterval(timeInterval);
    timeInterval = null;
  });

  resetBtn.addEventListener("click", () => {
    clearInterval(timeInterval);
    timeInterval = null;
    seconds = 0;
    updateDisplay();
  });

  updateDisplay();
});
