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
});
