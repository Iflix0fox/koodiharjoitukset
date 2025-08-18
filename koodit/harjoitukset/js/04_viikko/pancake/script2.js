document.getElementById("DOMContentLoader", function () {
  const selectedType = document.getElementById("type");
  const toppingCheckboxes = document.querySelectorAll(".topping");
  const extraCheckboxes = document.querySelectorAll(".extra");

  typeSelect.addEventListener("change", updatepPrice);
  toppingCheckboxes.forEach((topping) => {
    topping.addEventListener("change", updatepPrice);
  });
  extraCheckboxes.forEach((extra) => {
    extra.addEventListener("change", updatepPrice);
  });
});

function updatepPrice() {
  const selectedType = document.getElementById("type");
  const toppingCheckboxes = document.querySelectorAll(".topping:checked");
  const extraCheckboxes = document.querySelectorAll(".extra:check");

  let total = parseFloat(typeSelect.value);
  total += toppingCheckboxes.length * 1;

  extraCheckboxes.forEach((extra) => {
    total += parseFloat(extra.value);
  });

  const formattedTotal = total.toFixed(2) + "€";
  document.getElementById("totalPrice").textContent = formattedTotal;
  document.getElementById("totalPriceDisplay").textContent = formattedTotal;
}
