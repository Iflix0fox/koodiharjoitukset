/* Tehtävä 1
Luo JavaScript-taulukko nimeltä `library`, joka edustaa kirjakokoelmaa.
Jokaisella kirjalla tulee olla ominaisuudet `title` (otsikko), `author` (kirjoittaja) ja `yearPublished` (julkaisuvuosi).
Lisää kokoelmaan vähintään kaksi kirjaoliota.
*/

// Kirjoita koodisi tähän
const library = [
  {
    title: "kuolema ja pingviini",
    author: "korkov, anderi",
    yearpublished: 1996,
  },
  {
    title: "eloquent JavaScript, 4th edition",
    author: "Haverbeke, Marjin",
    yearpublished: 2024,
  },
  {
    title: "Nevermoor: Morrgiganin koetukset",
    author: "Townsend",
    yearpublished: 2018,
  },
];

/* Tehtävä 2
Hae `library`-kokoelman ensimmäisen kirjan `title` ja tulosta se konsoliin.
Muokkaa toisen kirjan `yearPublished` uudeksi vuodeksi ja tulosta päivitetty kirja konsoliin.
*/
// Kirjoita koodisi tähän
console.log("Ensimmänen kirjain nimi: ", library[0].title);
library[1].yearpublished = 2025;
console.log("toisen kirjan julkaisuvuosi:", library[1].yearpublished);

/* Tehtävä 3
Käytä piste-notaatiota lisätäksesi uuden ominaisuuden `genres` (merkkijonotaulukko) ensimmäiseen kirjaan `library`-taulukossa.
Käytä hakasulkunotaatiota lisätäksesi boolean-tyyppisen ominaisuuden `isAvailable`, joka kertoo onko kirja saatavilla.
*/
// Kirjoita koodisi tähän

library[0].genres = ["Absurdi", "tragikomiikka"];
console.log(library[0]);

/* Tehtävä 4
Määrittele konstruktori-funktio nimeltä `Book`, joka luo uusia kirjoja, joilla on `title`, `author`, `yearPublished` ja `genres`.
Luo uusi kirjaolio `Book`-konstruktorilla ja lisää se `library`-kokoelmaan.
*/
// Kirjoita koodisi tähän

class book {
  constructor(title, author, yearpublished, genres) {
    this.title = title;
    this.author = author;
    this.yearpublished = yearpublished;
    this.genres = genres;
  }
}
const book1 = new book("Alkemisti", "Coelho", "Paulo", 1998, "hengellisyys");
library.push(book1);
console.log(library);

/* Tehtävä 5
Kirjoita funktio nimeltä `createBook`, joka ottaa parametreina `title`, `author`, `yearPublished` ja `genres` (taulukko).
Funktion tulee palauttaa uusi kirjaolio näillä ominaisuuksilla.
Testaa `createBook`-funktiota luomalla uusi kirja käyttäjän antamilla arvoilla ja tulosta se konsoliin.
*/

// Kirjoita koodisi tähän

/* Tehtävä 6
Muunna `library`-kokoelma JSON-merkkijonoksi ja tulosta se konsoliin.
Jäsennä JSON-merkkijono takaisin JavaScript-olioksi ja tulosta ensimmäisen kirjan `title` konsoliin.
*/

// Kirjoita koodisi tähän

/* Tehtävä 7
Luo taulukko nimeltä `students`, jossa jokaisella oppilaalla on `name`, `age` ja `grade`.
Tulosta niiden oppilaiden nimet, joiden arvosana on yli 90.
*/

// Kirjoita koodisi tähän
/* Tehtävä 7
Luo taulukko nimeltä `students`, jossa jokaisella oppilaalla on `name`, `age` ja `grade`.
Tulosta niiden oppilaiden nimet, joiden arvosana on yli 90.
*/

// Kirjoita koodisi tähän

const students = [
  { name: "Liisa", age: 28, grade: 88 },
  { name: "Matti", age: 27, grade: 93 },
  { name: "Emma", age: 32, grade: 70 },
  { name: "Annti", age: 41, grade: 95 },
];

//suodataan hyvät opiskelijat
let goodGrades = students.filter((student) => student.grade > 90);

//tulostetaan hyvien opiskelijoiden pelkät nimet
goodGrades.forEach((topStudent) => {
  console.log(topStudent.name);
});

/* Tehtävä 8
Määrittele olio nimeltä `car`, jossa on ominaisuudet `brand`, `model`, `year` ja `isElectric`.
Käytä funktiota tarkistamaan onko auto sähköinen. Jos on, tulosta `"This car is eco-friendly!"`, muussa tapauksessa `"This car runs on fuel."`
*/

const car = {
  barnd: "tesla",
  model: "model3",
  year: 2022,
  isElectric: true,
};

if (car.isElectric == true) {
  console.log("this car is eco-friedly");
} else {
  console.log("this car runs on fuel");
}

// toinen tapa:
car.isElectric
  ? console.log("this car is eco-friedly")
  : console.log("this car runs on fuel");

// kolmas tapa
console.log(car.isElectric ? "sähköauto" : "polttomoottoriauto");

// Kirjoita koodisi tähän
/* Tehtävä 9
Luo `movies`-taulukko, jossa jokainen elokuva on olio, jolla on ominaisuudet `title`, `director` ja `rating`.
Kirjoita silmukka, joka tulostaa kaikkien niiden elokuvien otsikot, joiden arvio on yli 8.
*/
// Kirjoita koodisi tähän
const movies = [
  {
    title: "Inception",
    director: "Christopher Nolan",
    rating: 8.8,
  },
  {
    title: "The Matrix",
    director: "Lana Wachowski & Lilly Wachowski",
    rating: 7.7,
  },
  {
    title: "Parasite",
    director: "Bong Joon-ho",
    rating: 6.6,
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    rating: 9.2,
  },
  {
    title: "Spirited Away",
    director: "Hayao Miyazaki",
    rating: 7.6,
  },
];
movies.forEach((movie) => {
  if (movie.rating > 8) {
    console.log(movie.title);
  }
});

/* Tehtävä 10
Kirjoita funktio `findOldestCar`, joka ottaa vastaan taulukon auto-olioita ja palauttaa auton, jolla on varhaisin `year`.
*/
// Kirjoita koodisi tähän

function findOldestCar(cars) {
  let oldest = cars[0];

  cars.forEach((car) => {
    if (car.year < oldest.year) {
      oldest = car;
    }
  });
  return oldest;
}

const cars = [
  {
    model: "Ferrari 488 GTB",
    year: 2019,
    type: "super",
  },
  {
    model: "Porsche 911 Carrera",
    year: 2020,
    type: "sport",
  },
  {
    model: "Lamborghini Huracán",
    year: 2021,
    type: "super",
  },
  {
    model: "Chevrolet Corvette Stingray",
    year: 2022,
    type: "sport",
  },
  {
    model: "McLaren 720S",
    year: 2023,
    type: "super",
  },
];
const oldest = findOldestCar(cars);
console.log(oldest);

/* Tehtävä 11
Määrittele `userProfiles`-taulukko, joka sisältää käyttäjäolioita.
Jokaisella käyttäjällä tulee olla `username`, `email` ja `isAdmin` -ominaisuudet.
Kirjoita funktio, joka suodattaa ja palauttaa vain ne käyttäjät, jotka ovat ylläpitäjiä.
*/
// Kirjoita koodisi tähän

const users = [
  {
    username: "emilia92",
    email: "emilia92@example.com",
    isAdmin: false,
  },
  {
    username: "jonas_dev",
    email: "jonas.dev@example.com",
    isAdmin: true, // randomly selected admin
  },
  {
    username: "samiX",
    email: "sami.x@example.com",
    isAdmin: false,
  },
  {
    username: "linda88",
    email: "linda88@example.com",
    isAdmin: false,
  },
];

function getAdmins(users) {
  return users.filter((user) => user.isAdmin == true);
}

let admin = getAdmins(users);
console.log(admin);

/* Tehtävä 12
Määrittele taulukko nimeltä `orders`, jossa jokaisella tilauksella on `orderId`, `customerName`, `totalAmount` ja `status` ("pending" tai "completed").
Kirjoita funktio, joka palauttaa vain valmiit tilaukset.
*/
// Kirjoita koodisi tähän
const orders = [
  {
    orderId: 101,
    customerName: "Matti Meikäläinen",
    totalAmount: 49.9,
    status: "completed",
  },
  {
    orderId: 102,
    customerName: "Laura Laatikko",
    totalAmount: 29.5,
    status: "pending",
  },
  {
    orderId: 103,
    customerName: "Antti Aalto",
    totalAmount: 75.0,
    status: "completed",
  },
  {
    orderId: 104,
    customerName: "Saara Saarinen",
    totalAmount: 15.2,
    status: "pending",
  },
];

function readyOrder(order) {
  return orders.filter((order) => order.status === true);
}

let readyOrders = readyOrder(orders);
console.log(readyOrders);

/* Tehtävä 13
Luo olio nimeltä `smartphone`, jolla on ominaisuudet `brand`, `model`, `batteryLife` ja `is5GEnabled`.
Kirjoita funktio, joka tulostaa `"This phone supports 5G!"` jos `is5GEnabled` on `true`, muussa tapauksessa tulostaa `"This phone does not support 5G."`
*/
const smartphone = {
  brand: "apple",
  modle: "iphone 16",
  batteryLife: "2 years",
  is5GEnabled: true,
};

function supports5G(smartphone) {
  if (smartphone.is5GEnabled == true) {
    console.log("This phone supports 5G!");
  } else {
    console.log("This phone does not support 5G.");
  }
}

supports5G(smartphone);

// Kirjoita koodisi tähän

/* Tehtävä 14
Määrittele olio nimeltä `fox`, jolla on ominaisuudet `name`, `age` ja `habitat`.
Kirjoita funktio, joka tulostaa `"This fox is young"` jos ikä on alle 3, ja `"This fox is an adult"` jos 3 tai enemmän.
*/
// Kirjoita koodisi tähän

const fox = {
  name: "silver fox",
  age: 5,
  habit: "chasing rabiits",
};

function foxAge(fox) {
  if (fox.age >= 3) {
    console.log("This fox is an adult");
  } else {
    console.log("This fox is young");
  }
}
foxAge(fox);

/* Tehtävä 15
Määrittele taulukko nimeltä `employees`, jossa jokaisella työntekijällä on `name`, `position` ja `salary`.
Kirjoita funktio, joka laskee kaikkien työntekijöiden yhteenlasketun palkan.
*/

// Kirjoita koodisi tähän

const employees = [
  {
    name: "abdi",
    position: "manger",
    salary: 4000,
  },
  {
    name: "ali",
    position: "superviser",
    salary: 3000,
  },
  {
    name: "Saleh",
    position: "office worker",
    salary: 2500,
  },
  {
    name: "Hamoodi",
    position: "office worker",
    salary: 2500,
  },
];
function totlalSalary(employee) {
  let total = 0;
  employee.forEach((emp) => {
    total += emp.salary;
  });
  return total;
}
console.log(totlalSalary(employees));
