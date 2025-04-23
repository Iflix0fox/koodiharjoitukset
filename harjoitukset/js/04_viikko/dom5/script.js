/*
Luo HTML-tiedosto, joka sisältää:
- <button> taustavärin vaihtamiseen.
- <input>-kenttä, johon käyttäjä voi syöttää värin.
- <p>-elementti, jonka tekstin väri muuttuu syötetyn värin mukaan.

Kirjoita JavaScript-koodi, joka:
- Vaihtaa taustavärin satunnaiseksi, kun painiketta klikataan.
- Päivittää kappaleen tekstivärin vastaamaan käyttäjän syöttämää arvoa.
*/

// document
//   .getElementById("button")
//   .addEventListener("click", function changeBackgroundcolor() {
//     let changeBackgroundcolor = ;
//   });

document
  .getElementById("button")
  .addEventListener("click", function changeBackgroundcolor() {
    let changecolor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.querySelector("body").style.backgroundColor = changecolor;
  });

// vaihtaa yhden tekstin vätri
document
  .getElementById("colorinput")
  .addEventListener("input", function changetextcolor() {
    let changeTextColor = document.getElementById("colorinput").value;
    document.querySelector("p").style.color = changeTextColor;
  });
// vaihtaa koko sivun tekstin vätrit
document
  .getElementById("colorinput")
  .addEventListener("input", function changetextcolor() {
    let changeTextColor = document.getElementById("colorinput").value;
    let kappaleet = document.querySelectorAll("p");

    for (let kappale of kappaleet) {
      kappale.style.color = changeTextColor;
    }
  });
