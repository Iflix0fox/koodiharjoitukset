let saldo = 0;

function paivitaSaldo() {
  console.log("talletus toimi");
  console.log(saldo);
  document.getElementById("saldoNaytto").innerText = `Saldo: ${saldo} €`;
}

function nayttaVisti(teksti, onVirhe = true) {
  const viesti = document.getElementById("viesti");
  viesti.textContent = teksti;
  viesti.style.color = onVirhe ? "red" : "green";
}

function talleta() {
  const summa = Number(document.getElementById("talletusSumma").value);
  if (isNaN(summa) || summa <= 0) {
    nayttaVisti("wrong input please try again");

    console.log("wrong input please try again");
    return;
  }
  saldo += summa;
  paivitaSaldo();
  nayttaVisti("talletus onnistui", false);
  document.getElementById("talletusSumma").value = "";
}

function nosta() {
  const nosto = Number(document.getElementById("nostoSumma").value);
  console.log(typeof nosto);
  if (isNaN(nosto) || nosta <= 0) {
    nayttaVisti("wrong input please try again");

    return;
  }
  //jos saldo ei ritä
  if (nosto > saldo) {
    console.log("not enough credit");
    return;
  }

  saldo -= nosto;
  paivitaSaldo();
  document.getElementById("nostoSumma").value = "";
}

document.getElementById("tallettavaBtn").addEventListener("click", talleta);
document.getElementById("nostaBtn").addEventListener("click", nosta);
