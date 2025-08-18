/* 
Kirjoita funktio nimeltä checkAdult:
Ota ikä parametrina.
Jos ikä on 18 tai enemmän, palauta "Olet aikuinen."
Muussa tapauksessa älä palauta mitään.
Kutsu funktiota eri ikäarvoilla ja tulosta tulos.
*/

function checkAdult(age) {
  if (age >= 18) {
    return "you are adult";
  }
}

console.log(checkAdult(18));

//02
/* 
Kirjoita funktio nimeltä checkForFox:
Ota looginen parametri hasFox.
Jos hasFox on tosi, palauta "Sinulla on lemmikkikettu!"
Muussa tapauksessa palauta "Ei havaittu kettua!"
Kutsu funktiota arvoilla true ja false ja tulosta tulos.
*/

function checkForFox(hasFox) {
  if (hasFox === true) {
    return "sinulla on lemmikkikettu!";
  } else {
    return "Ei havaittu kettua!";
  }
}
console.log(checkForFox(false));
