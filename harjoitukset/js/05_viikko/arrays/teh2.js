// Harjoitus 1: Määritä taulukon pituus ja tarkista ehto
/*
Luo funktio nimeltä myAlphabetLength, joka tulostaa myAlphabet-taulukon pituuden.
Jos pituus on 5 tai enemmän, tulosta: "Taulukon pituus on riittävä".
Muussa tapauksessa tulosta: "Taulukon pituus on liian lyhyt."
*/
// Kirjoita funktiosi tähän
let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];

function checkalbet() {
  console.log("tauluuun pituus on", myAlphabet.length);
  if (myAlphabet.length >= 5) {
    console.log("riitävä");
  } else {
    console.log(" ei riitävä");
  }
}
checkalbet();

// Harjoitus 2: Käy läpi planets-taulukko ja tulosta jokainen planeetta ja sen indeksi
/*
Tulosta jokainen planeetta planets-taulukosta ja sen indeksi.
Odotettu tulos:
"Planeetta: Merkurius, Indeksi: 0"
...
"Planeetta: Jupiter, Indeksi: 4"
*/
// Kirjoita koodisi tähän
const planets = ["Merkurius", "Venus", "Maa", "Mars", "Jupiter"];

planets.map((planet, index) => {
  console.log(`${planet}, indeeksi: ${index}`);
});

// Harjoitus 3: Tulosta taulukon alkioiden tyypit käyttäen mixedValues-taulukkoa
/*
Käy läpi mixedValues-taulukko ja tulosta jokainen alkio, sen indeksi ja tietotyyppi.
Odotettu tulos:
"Alkio: 42, Indeksi: 0, Tyyppi: number"
...
"Alkio: undefined, Indeksi: 5, Tyyppi: undefined"
*/
// Kirjoita koodisi tähän
const mixedValues = [42, "Heippa", true, { nimi: "Kettu" }, null, undefined];

mixedValues.forEach((values, index) => {
  console.log(`alkio ${values}, Indeeksi: ${index}, Tyyppi: ${typeof values}`);
});

// Harjoitus 4: Tulosta jokainen myArr-taulukon alkio ilman silmukkaa
let myArr = [1, "Koira", 3.14, false];

/*
Tulosta jokainen alkio myArr-taulukosta ilman silmukan käyttöä.
Odotettu tulos: 1, "Koira", 3.14, false
*/
// Kirjoita koodisi tähän

// Harjoitus 5: Etsi yleiset eläinlajit elainvarasto1 ja elainvarasto2 taulukoista
let elainvarasto1 = ["Kettu", "Peura", "Pöllö", "Karhu"];
let elainvarasto2 = ["Karhu", "Susi", "Kotka", "Kettu"];

/*
Tunnista ja tulosta eläinlajit, jotka löytyvät molemmista taulukoista.
Odotettu tulos:
"Yhteinen laji: Kettu"
"Yhteinen laji: Karhu"
*/
// Kirjoita koodisi tähän

// Harjoitus 6: Tulosta jokaisen eläinnimen kirjaimet animalNames-taulukosta

/*
Tulosta jokaisen animalNames-taulukon alkion kaikki kirjaimet.
Odotettu tulos:
"Kirjaimet sanassa 'Leijona': L, e, i, j, o, n, a"
...
"Kirjaimet sanassa 'Panda': P, a, n, d, a"
*/
// Kirjoita koodisi tähän
let animalNames = ["Leijona", "Tiikeri", "Panda"];
animalNames.forEach((name) => {
  let letters = name.split("").join(",");
  console.log(`kirjammet snassa ${name}: ${letters}`);
});

// Harjoitus 7: Suodata vain positiiviset lämpötilat temperatures-taulukosta

/*
Suodata ja tulosta vain positiiviset arvot temperatures-taulukosta.
Odotettu tulos: [5, 15, 20, 2]
*/
// Kirjoita koodisi tähän

/*
Kirjoita funktio getPositiveTemperatures, joka palauttaa uuden taulukon,
joka sisältää vain lämpötilat, jotka ovat suurempia kuin 0 temperatures-taulukosta.
Odotettu tulos: [5, 15, 20, 2]
*/
// Kirjoita funktiosi tähän
let temperatures = [-10, 5, -3, 15, -8, 20, 2];
let postiveTemps = temperatures.filter((temp) => temp > 0);
console.log(postiveTemps);

// Harjoitus 8: Etsi "Kettu":n indeksi zooAnimals-taulukosta
/*
Etsi ja tallenna "Fox":n indeksi zooAnimals-taulukosta.
Odotettu tulos: "Fox:n indeksi: 3"
*/
// Kirjoita koodisi tähän
let zooAnimals = ["Elefantti", "Kirahvi", "Panda", "fox", "Kenguru"];

let foxIndex = zooAnimals.indexOf("fox");
console.log("fox index is", foxIndex);

// Harjoitus 9: Yritä etsiä eläin, jota ei ole zooAnimals-taulukossa
/*
Etsi "Pingviini":n indeksi zooAnimals-taulukosta.
Jos sitä ei löydy, tulosta "Pingviini ei ole eläintarhassa."
Odotettu tulos: -1
*/

// Kirjoita koodisi tähän
function finadAnimal(elain) {
  let elainIndex = zooAnimals.indexOf(elain);
  if (elainIndex == -1) {
    console.log(elain, "ei ole eläintarhassa");
    console.log(elainIndex);
  }
}
finadAnimal("pingviivni");

// Harjoitus 10: Korvaa "Kirahvi" sanalla "Alpakka" zooAnimals-taulukossa
/*
Odotettu tulos: ["Elefantti", "Alpakka", "Panda", "Kettu", "Kenguru"]
*/
// Kirjoita koodisi tähän

let kirahviIndex = zooAnimals.indexOf("kirahvi");
// jos kirahvi ei ole -1 suoritetaan
if (kirahviIndex !== -1) {
  zooAnimals[(kirahviIndex = "Alpakka")];
}

console.log(kirahviIndex);

// Harjoitus 11: Lajittele safariAnimals-taulukko aakkosjärjestykseen

/*
Odotettu tulos: ['Elefantti', 'Gazelli', 'Leopardi', 'Zeebra']
*/
// Kirjoita koodisi tähän
let safariAnimals = ["Zeebra", "Leopardi", "Elefantti", "Gazelli"];

let sortedAnimals = [...safariAnimals].sort();
console.log(sortedAnimals);

// Harjoitus 12: Käännä safariAnimals-taulukon järjestys
/*
Käännä safariAnimals-taulukon järjestys päinvastaiseksi.
Odotettu tulos: ['Zeebra', 'Leopardi', 'Gazelli', 'Elefantti']
*/
// Kirjoita koodisi tähän

let reversdAnimals = [...safariAnimals].reverse();
console.log(reversdAnimals);

// Harjoitus 13: Tarkista sisältääkö zooAnimals "Tiikeri":n
/*
Odotettu tulos:
true (jos sisältää)
false (jos ei sisällä)
*/
// Kirjoita koodisi tähän
let onkoTiikeri = safariAnimals.includes("Tiikeri");
console.log(onkoTiikeri);

// Harjoitus 14: Etsi kaikki "Jonna":n esiintymät attendees-taulukossa
/*
Etsi kaikki kohdat, joissa "Jonna" esiintyy attendees-taulukossa.
Odotettu tulos: [0, 2, 4]
*/
// Kirjoita koodisi tähän
let attendees = ["Jonna", "Santtu", "Jonna", "Alex", "Jonna"];

let jonnaindexs = [];

attendees.forEach((name, index) => {
if (name == "Jonna") {
  jonnaindexs.push(index);
  console.log(jonnaindexs);
}}


// Harjoitus 15: Muunna kaikki attendees-taulukon nimet isoiksi kirjaimiksi
/*
Luo uusi taulukko, jossa jokainen attendees-taulukon nimi on kirjoitettu isoilla kirjaimilla.
Odotettu tulos: ['JONNA', 'SANTTU', 'JONNA', 'ALEX', 'JONNA']
*/
// Kirjoita koodisi tähän


let uppercaseName = attendees.map((nam));

// Harjoitus 16: Yhdistä forestAnimals- ja farmAnimals-taulukot
let forestAnimals = ["Peura", "Karhu", "Susi"];
let farmAnimals = ["Hevonen", "Lammas", "Vuohi"];

/*
Yhdistä forestAnimals ja farmAnimals uuteen taulukkoon.
Odotettu tulos: ["Peura", "Karhu", "Susi", "Hevonen", "Lammas", "Vuohi"]
*/
// Kirjoita koodisi tähän

// Harjoitus 17: Poista ensimmäinen ja viimeinen alkio birdSpecies-taulukosta
let birdSpecies = ["Kotka", "Pöllö", "Haukka", "Pääsky", "Pingviini"];

/*
Odotettu tulos: ['Pöllö', 'Haukka', 'Pääsky']
*/
// Kirjoita koodisi tähän

// Harjoitus 18: Käytä `splice`:a poistaaksesi ja korvataksesi arvoja numbers-taulukossa
let numbers = [10, 20, 30, 40, 50];

numbers.slice(2, 1, 25, 27)
console.log(numbers.slice());
/*
Käytä splice-metodia poistamaan "30" ja korvaamaan se arvoilla "25" ja "27".
Odotettu tulos: [10, 20, 25, 27, 40, 50]
*/
// Kirjoita koodisi tähän

// Harjoitus 19: Korota jokaista hintaa 10 % käyttäen `map`-metodia
let prices = [5, 10, 15, 20];

/*
Luo uusi taulukko, jossa jokainen hinta on kasvatettu 10 %.
Odotettu tulos: [5.5, 11, 16.5, 22]
*/
// Kirjoita funktiosi tähän

// Harjoitus 20: Suodata `filter`:in avulla sanat, jotka ovat pidempiä kuin 5 kirjainta
let words = ["omena", "banaani", "kirsikka", "kiivi", "mansikka"];

/*
Luo uusi taulukko, joka sisältää vain sanat, joissa on yli 5 kirjainta words-taulukosta.
Odotettu tulos: ['banaani', 'kirsikka', 'mansikka']
*/
// Kirjoita funktiosi tähän
