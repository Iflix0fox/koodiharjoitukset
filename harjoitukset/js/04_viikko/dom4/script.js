/*
Luo HTML tiedosto, jossa on <p> elementti ja nappi. 
Kirjoita JavaScript-koodi, joka vaihtaa tekstiosion näkyvyyttä - päälle ja pois - nappia painamalla.
 */

document
  .getElementById("button")
  .addEventListener("click", function changeVisivilty() {
    let textelement = document.getElementById("text");

    if (textelement.style.visibility == "hidden") {
      textelement.style.visibility = "visible";
    } else {
      textelement.style.visibility = "hidden";
    }
  });
