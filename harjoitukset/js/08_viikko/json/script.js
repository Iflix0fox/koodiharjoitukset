/* Tehtävä 1
Luo JavaScript-olio nimeltä `student`, jolla on ominaisuudet:
- `name`
- `age`
- `grade`
Muunna olio JSON-merkkijonoksi ja tulosta se konsoliin.
*/
// Kirjoita koodi tähän

const student = { name: "Brad", age: 22, grade: 90 };

// const kifflom = { name: "Brad", age: 22, grade: 90 };

const jsonString = JSON.stringify(student);
console.log(jsonString);

/* Tehtävä 2
Ota Tehtävä 1:ssä luotu JSON-merkkijono ja muunna se takaisin JavaScript-olioksi.
Tulosta muunnetun olion `name`-ominaisuus.
*/
// Kirjoita koodi tähän

const studentObject = JSON.parse(jsonString);
console.log(studentObject);

/* Tehtävä 3
Luo taulukko nimeltä `classroom`, jossa jokainen alkio on opiskelijaa kuvaava olio.
Jokaisella opiskelijaoliolla tulee olla ominaisuudet `name`, `age` ja `grade`.
Muunna taulukko JSON-merkkijonoksi ja tulosta se konsoliin.
*/
// Kirjoita koodi tähän

const classroom = [
  { name: "Aino", age: 16, grade: "9A" },
  { name: "Mikko", age: 17, grade: "9B" },
  { name: "Ella", age: 16, grade: "9A" },
  { name: "Leo", age: 15, grade: "8C" },
  { name: "Sara", age: 16, grade: "9C" },
];

const jsonString3 = JSON.stringify(classroom);
console.log(jsonString3);

/* Tehtävä 4
Ota Tehtävä 3:ssa luotu JSON-merkkijono, muunna se takaisin JavaScript-taulukoksi
ja tulosta kaikkien opiskelijoiden nimet.
*/
// Kirjoita koodi tähän
const classRoomObjectp = JSON.parse(jsonString3);
console.log(classRoomObjectp);

/* Tehtävä 5
Luo olio nimeltä `weatherReport`, jossa on seuraavat ominaisuudet:
- `temperature`
- `humidity`
- `conditions` (esim. "Sunny", "Rainy")

Muunna olio JSON-merkkijonoksi ja tallenna se muuttujaan `weatherJSON`.
Sen jälkeen pura JSON takaisin olioksi ja tulosta `conditions`-ominaisuus.
*/
// Kirjoita koodi tähän

const weatherReport = {
  temperature: 22, // lämpötila celsiusasteina
  humidity: 65, // ilmankosteus prosentteina
  conditions: "Sunny", // säätila, esim. "Rainy", "Cloudy", "Snowy"
};

const weatherJSON = JSON.stringify(weatherReport);
console.log(weatherJSON);

const weatherReportObject = JSON.parse(weatherJSON);
console.log("säätila", weatherReportObject.conditions);

/* Tehtävä 6
Määrittele taulukko nimeltä `movies`, jossa jokaisella elokuvalla on:
- `title`
- `director`
- `rating`
Muunna tämä taulukko JSON-merkkijonoksi ja pura se takaisin JavaScript-olioksi.
Tulosta kaikki elokuvien nimet, joiden arvosana on yli 8.
*/
// Kirjoita koodi tähän
const movies = [
  {
    title: "Inception",
    director: "Christopher Nolan",
    rating: 7.8,
  },
  {
    title: "Spirited Away",
    director: "Hayao Miyazaki",
    rating: 8.6,
  },
  {
    title: "Parasite",
    director: "Bong Joon-ho",
    rating: 8.5,
  },
];

const moviesJson = JSON.stringify(movies);

console.log("JSON muoto", moviesJson);

const moviesJsonObject = JSON.parse(moviesJson);

console.log("arvosanat on: ", moviesJsonObject);

moviesJsonObject.forEach((m) => {
  if (m.rating >= 8) {
    console.log("nämä elokuvan luokitus yli 8", m.title);
  }
});

/* Tehtävä 7
Kirjoita funktio `filterHighRatedMovies(jsonString)`, joka:
- Ottaa vastaan JSON-merkkijonon, joka edustaa elokuvataulukkoa.
- Muuntaa sen JavaScript-taulukoksi.
- Palauttaa uuden taulukon, joka sisältää vain elokuvat, joiden arvosana on yli 8.
*/
// Kirjoita koodi tähän

function filterHighRatedMovies(jsonString) {
  const array = JSON.parse(jsonString);
  const HighRatedMovies = [];
  return array.filter((movie) => movie.rating > 8);
}
const highRated = filterHighRatedMovies(moviesJson);

console.log(highRated);

/* Tehtävä 8
Määrittele olio nimeltä `shoppingCart`, jossa on:
- `items` (taulukko tuotteista, jokaisella on `name` ja `price`)
Muunna `shoppingCart` JSON-merkkijonoksi ja tulosta se konsoliin.
*/
// Kirjoita koodi tähän

const shoppingCart = {
  items: [
    { name: "bread", price: 12 },
    { name: "fruit", price: 9 },
    { name: "eggs", price: 15 },
  ],
};

const shoppingCartJson = JSON.stringify(shoppingCart);
console.log(shoppingCartJson);
// output:
// {"items":[{"name":"bread","price":12},{"name":"fruit","price":9},{"name":"eggs","price":15}]}

/* Tehtävä 9
Kirjoita funktio `totalCartValue(jsonString)`, joka:
- Saa parametrina ostoskorin JSON-merkkijonon.
- Muuntaa sen JavaScript-olioksi.
- Palauttaa ostoskorin kaikkien tuotteiden yhteenlasketun hinnan.
*/
// Kirjoita koodi tähän

function totalCartValue(jsonString) {
  const cart = JSON.parse(jsonString);
  let sum = 0;
  cart.items.forEach((item) => {
    sum = sum + item.price;
  });

  return sum;
}
console.log(totalCartValue(shoppingCartJson));

/* Tehtävä 10
Luo olio nimeltä `gameProgress`, jossa on:
- `level`
- `score`
- `livesRemaining`
Muunna olio JSON-merkkijonoksi ja tulosta se.
Pura JSON takaisin olioksi ja päivitä `score`-ominaisuutta lisäämällä siihen 100 pistettä.
Tulosta päivitetty olio.
*/

// Kirjoita koodi tähän

const gameProgress = {
  level: 3,
  score: 8500,
  livesRemaining: 2,
};

const gameProgressJson = JSON.stringify(gameProgress);
// console.log(gameProgressJson);

const gameProgressJsonObject = JSON.parse(gameProgressJson);
console.log(gameProgressJsonObject);

gameProgressJsonObject.score += 100;
console.log(gameProgressJsonObject);
