/* Kopioi tähän koodi edellisestä tehtävästä. Kopioi myös tekemäsi HTML tiedosto tähän samaan kansioon. 

Lisää sivulle toinen nappi, jota klikkaamalla laskurin arvo vähenee yhdellä. 

Muista lisätä uudelle napille oma id ja sille oma tapahtumankuuntelija. Tee kaksi funktiota, jotka muuttavat saman muuttujan arvoa. 
*/

document.getElementById("nappi").addEventListener("click", function () {
  document.getElementById("numero").textContent++;
});

document.getElementById("vahennaNappi").addEventListener("click", function () {
  document.getElementById("numero").textContent--;
});
