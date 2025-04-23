// // Listen for pancake type changes (dropdown)
// document.getElementById("type").addEventListener("change", function (event) {
//   const selectedType = event.target.value;
//   const pancakePrice = parseFloat(selectedType);
//   console.log("Pancake price is", pancakePrice);

//   updateTotalPrice();
// });

// // Listen for toppings being selected/deselected (checkboxes)
// let totalToppingPrice = 0;
// document.querySelectorAll(".topping").forEach(function (checkbox) {
//   checkbox.addEventListener("change", function (event) {
//     const toppingPrice = parseFloat(event.target.value);
//     const isChecked = event.target.checked;

//     if (isChecked) {
//       totalToppingPrice += toppingPrice;
//       console.log(event.target.value, "selected");
//     } else {
//       totalToppingPrice -= toppingPrice;
//       console.log(event.target.value, "deselected");
//     }
//     console.log("Total topping price", totalToppingPrice);

//     updateTotalPrice();
//   });
// });

// let totalextraPrice = 0;
// document.querySelectorAll(".extra").forEach(function (checkbox) {
//   checkbox.addEventListener("change", function (event) {
//     const extraPrice = parseFloat(event.target.value);
//     const isChecked = event.target.checked;
//     if (isChecked) {
//       totalextraPrice += extraPrice;
//       console.log(event.target.value, "selected");
//     } else {
//       totalextraPrice -= extraPrice;
//       console.log(event.target.value, "deselected");
//     }
//     console.log("total extra Price:", totalextraPrice);

//     updateTotalPrice();
//   });
// });

// function updateTotalPrice() {
//   const selectedType = document.getElementById("type").value;
//   const pancakePrice = parseFloat(selectedType);

//   const totalPrice = pancakePrice + totalToppingPrice + totalextraPrice;

//   document.getElementById("totalPriceDisplay").textContent =
//     totalPrice.toFixed(2) + "€";
//   console.log("total Price:" + totalPrice.toFixed(2), "€");
// }

// Add event listeners
document.getElementById("type").addEventListener("change", updatePrice);
document.querySelectorAll(".topping").forEach(function (topping) {
  topping.addEventListener("change", updatePrice);
});
document.querySelectorAll(".extra").forEach(function (extra) {
  extra.addEventListener("change", updatePrice);
});

// Update price function
function updatePrice() {
  let total = parseFloat(document.getElementById("type").value); // Start with pancake base price

  // Add 1€ for each selected topping
  document.querySelectorAll(".topping").forEach(function (topping) {
    if (topping.checked) {
      total += 1;
    }
  });

  // Add price of each selected extra (2€ or 3€)
  document.querySelectorAll(".extra").forEach(function (extra) {
    if (extra.checked) {
      total += parseFloat(extra.value);
    }
  });

  // Update the total price display
  document.getElementById("totalPriceDisplay").textContent =
    total.toFixed(2) + "€";
  document.getElementById("totalPrice").textContent = total.toFixed(2) + "€";
}
