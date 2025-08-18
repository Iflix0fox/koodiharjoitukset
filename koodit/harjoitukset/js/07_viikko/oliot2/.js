/* Tehtävä 1
Luo olio `weather`, jossa on ominaisuudet `temperature`, `humidity` ja `condition` (esim. "Aurinkoinen", "Sateinen").
Kirjoita funktio, joka tulostaa `"Ota sateenvarjo!"` jos sää on sateinen.
*/

// Kirjoita koodisi tähän

const weather = {
  temperature: 18,
  humidity: 65,
  condition: "stateinen",
};

const weather2 = {
  temperature: 18,
  humidity: 65,
  condition: "Aurinkoinen",
};

function checkrain(weather) {
  if (weather.condition == "sateinen") {
    console.log("ota sateenvarjo");
  } else if (weather.condition == "Aurinkoinen") {
    console.log("käytä aurinkosuojaa");
  } else {
    console.log("pidä kivaa");
  }
}

checkrain(weather);
checkrain(weather2);

/* Tehtävä 2
Määrittele olio nimeltä `shoppingCart`, joka sisältää taulukon tuotteista.
Jokaisella tuotteella on `name`, `price` ja `quantity`.
Kirjoita funktio, joka laskee kaikkien ostoskorin tuotteiden kokonaishinnan.
*/
// Kirjoita koodisi tähän

const shoppingCart = [
  { name: "Maito", price: 1.5, quantity: 2 },
  { name: "Leipä", price: 2.0, quantity: 1 },
  { name: "Juusto", price: 3.5, quantity: 1 },
];

function calculateTotal(cart) {
  let total = 0;
  cart.map((item) => {
    total += item.price * item.quantity;
  });

  return total;
}

console.log("ytheensä :", calculateTotal(shoppingCart));
/* Tehtävä 3
Luo taulukko nimeltä `restaurants`, jossa jokainen ravintola on olio, jolla on ominaisuudet `name`, `cuisineType` ja `rating`.
Kirjoita funktio, joka palauttaa vain ne ravintolat, joiden arvio on 4 tai enemmän.
*/

// Kirjoita koodisi tähän

const restaurants = [
  { name: "pizzatupa", cuisineType: "Itaialainen", rating: 4.5 },
  { name: "kebab king", cuisineType: "lähi- idän", rating: 3.8 },
  { name: "shusiWolrd", cuisineType: "asialainen", rating: 4.2 },
];

//tämä on nuolifunktio
const topRated = (list) => {
  return list.filter((value) => value.rating >= 4);
};
console.log(topRated(restaurants));

/* Tehtävä 4
Määrittele olio nimeltä `bankAccount`, jossa on ominaisuudet `accountHolder`, `balance` ja `transactions` (numeroiden taulukko).
Kirjoita funktio, joka laskee kokonaissaldon kaikkien tapahtumien jälkeen.
*/

// Kirjoita koodisi tähän

let bankAccount = {
  accountHolder: "matti",
  balance: 1000,
  transaction: [-200, 150, -50, 500],
};

//tämä on nuolifunktio
const getFinalBalance = (account) => {
  let total = account.balance;
  account.transaction.map((t) => {
    total += t;
  });
  return total;
};

console.log("loppullinen saldo: ", getFinalBalance(bankAccount));

/* Tehtävä 5
Luo taulukko `students`, jossa jokaisella opiskelijalla on `name`, `scores` (numeroiden taulukko) ja `averageScore` (aluksi null).
Kirjoita funktio, joka laskee ja päivittää kunkin opiskelijan `averageScore`-arvon.
*/
// Kirjoita koodisi tähän

const students = [
  { name: "John Doe", scores: [85, 90, 78, 92], averageScore: null },
  { name: "Jane Smith", scores: [72, 88, 91, 80], averageScore: null },
  { name: "Alice Johnson", scores: [95, 100, 88, 94], averageScore: null },
];

function calculateAvarages(students) {
  students.forEach((student) => {
    let total = 0;
    //loopataan kaikki opiskelijan scoorit
    student.scores.map((score) => {
      //lasketaan summa
      total += score;
    });

    //päivitä keskiarvo
    student.averageScore = total / student.scores.length;
  });
}

calculateAvarages(students);
console.log(students);

/* Tehtävä 6
Määrittele taulukko nimeltä courses, jossa jokaisessa kurssissa on courseName, instructor ja `studentsEnrolled`.
Kirjoita funktio, joka tulostaa niiden kurssien nimet, joissa on yli 30 opiskelijaa.
*/
// Kirjoita koodisi tähän
const courses = [
  {
    courseName: "Introduction to JavaScript",
    instructor: "Dr. Emily Green",
    studentsEnrolled: 20,
  },
  {
    courseName: "Advanced CSS and Flexbox",
    instructor: "Mr. Robert White",
    studentsEnrolled: 95,
  },
];

function courseNames(courses) {
  courses.map((c) => {
    if (c.studentsEnrolled >= 30) {
      console.log(c.courseName);
    }
  });
}
courseNames(courses);

/* Tehtävä 7
Luo olio `pet`, jossa on ominaisuudet `species`, `name` ja `isVaccinated`.
Kirjoita funktio, joka palauttaa `"Rokotusta tarvitaan"` jos lemmikkiä ei ole rokotettu.
*/
// Kirjoita koodisi tähän

let pet = {
  species: "koria",
  name: "rekku",
  isVaccinated: false,
};
const checkVaccination = (pet) => {
  return pet.isVaccinated ? "rokotettu" : "rokotusta tarvitaan";
};
console.log(checkVaccination(pet));

/* Tehtävä 8
Määrittele olio nimeltä `city`, jossa on ominaisuudet `name`, `population` ja `landmark`.
Kirjoita funktio, joka tulostaa `"Tämä on suuri kaupunki!"` jos väkiluku ylittää 1 000 000.
*/
// Kirjoita koodisi tähän

let city = {
  name: "helsinki",
  population: 130000,
  landmark: "Tuomiokirkko",
};

const checkCitySize = (city) => {
  if (city.population >= 1000000) {
    console.log("tämä on suuri kaupunki");
  }
};

/* Tehtävä 9
Luo taulukko `transactions`, jossa jokainen tapahtuma on olio, jolla on `type` ("credit" tai "debit") ja `amount`.
Kirjoita funktio, joka laskee kokonaissaldon kaikkien tapahtumien jälkeen.
*/
// Kirjoita koodisi tähän
const transactions = [
  {
    type: "credit",
    amount: 500,
  },
  {
    type: "debit",
    amount: 200,
  },
  {
    type: "credit",
    amount: 1500,
  },
];

function calculateTranactionBalnace(transaction) {
  let balnce = 0;
  transaction.map((t) => {
    if (t.type == "credit") {
      balnce += t.amount;
    } else if (t.type == "debit") {
      balnce -= t.amount;
    }
  });
  return balnce;
}

console.log("balance: ", calculateTranactionBalnace(transactions));

/* Tehtävä 10
Määrittele olio nimeltä `foxPack`, joka sisältää taulukon kettuolioita.
Jokaisella ketulla on `name`, `age` ja `furColor`.
Kirjoita funktio, joka suodattaa ja palauttaa vain ne ketut, jotka ovat alle 2-vuotiaita.
*/
// Kirjoita koodisi tähän
const foxPack = {
  foxes: [
    {
      name: "Finn",
      age: 3,
      furColor: "red",
    },
    {
      name: "Luna",
      age: 1,
      furColor: "gray",
    },
  ],
};

function filterAges(pack) {
  return pack.foxes.filter((fox) => fox.age < 2);
}
console.log(filterAges(foxPack));

/* Tehtävä 11
Luo olio nimeltä `gameCharacter`, jolla on ominaisuudet `name`, `level`, `health` ja `inventory` (taulukko).
Kirjoita funktio, joka tulostaa hahmon koko varustelistan.
*/
// Kirjoita koodisi tähän

const gameCharacter = {
  name: "Archer",
  level: 5,
  health: 100,
  inventory: ["bow", "arrows", "healing potion"],
};

function printInvintory(character) {
  console.log(character.inventory);
  console.log(character.inventory.join(", "));
}
printInvintory(gameCharacter);

/* Tehtävä 12
Määrittele taulukko nimeltä `employees`, jossa jokaisella työntekijällä on `name`, `role` ja `workingHours`.
Kirjoita funktio, joka etsii ja tulostaa ne työntekijät, jotka työskentelevät yli 40 tuntia viikossa.
*/
// Kirjoita koodisi tähän
const employees = [
  {
    name: "John Doe",
    role: "Software Engineer",
    workingHours: 40,
  },
  {
    name: "Jane Smith",
    role: "Project Manager",
    workingHours: 38,
  },
];

function overWorked() {
  employees.forEach((e) => {
    if (e.workingHours >= 30) {
      console.log("you have over working hours");
    } else {
      console.log("you are fine");
    }
  });
}
console.log(overWorked(employees));

/* Tehtävä 13
Luo taulukko `musicAlbums`, jossa jokaisella albumilla on `title`, `artist` ja `releaseYear`.
Kirjoita funktio, joka tulostaa ne albumit, jotka on julkaistu vuoden 2000 jälkeen.
*/
// Kirjoita koodisi tähän

const musicAlbums = [
  {
    title: "Abbey Road",
    artist: "The Beatles",
    releaseYear: 2000,
  },
  {
    title: "Thriller",
    artist: "Michael Jackson",
    releaseYear: 1982,
  },
];

function PublishedYear(album) {
  album.forEach((m) => {
    if (m.releaseYear >= 2000) {
      console.log(m.title, "was published in early 2000's");
    } else {
      console.log(m.title, "album was published before 2000");
    }
  });
}
PublishedYear(musicAlbums);

/* Tehtävä 14
Määrittele taulukko nimeltä `cars`, jossa jokaisella autolla on `brand`, `model` ja `horsepower`.
Kirjoita funktio, joka etsii ja palauttaa auton, jolla on suurin hevosvoimamäärä.
*/
// Kirjoita koodisi tähän

const cars = [
  { barnd: "bmw", model: "x", horsePower: 2000 },
  { barnd: "kia", model: "y", horsePower: 1500 },
  { barnd: "opel", model: "a", horsePower: 900 },
];

function findfastestCar(carArray) {
  let fastCar;

  let mearuremeant = 0;

  carArray.map((car) => {
    if (car.horsePower > mearuremeant) {
      mearuremeant = car.horsePower;
      fastCar = car;
    }
  });
  return fastCar;
}
console.log(findfastestCar(cars));
/* Tehtävä 15
Luo taulukko `airports`, jossa jokaisella lentokentällä on `name`, `country` ja `flightsPerDay`.
Kirjoita funktio, joka etsii lentokentän, jolla on eniten lentoja päivässä.
*/
// Kirjoita koodisi tähän

const airports = [
  { name: "Helsinki-Vantaa", country: "Finland", flightsPerDay: 350 },
  { name: "Schiphol", country: "Netherlands", flightsPerDay: 1000 },
  { name: "Heathrow", country: "United Kingdom", flightsPerDay: 1200 },
  { name: "Charles de Gaulle", country: "France", flightsPerDay: 950 },
  { name: "Frankfurt", country: "Germany", flightsPerDay: 1100 },
];

function findLargest(airplaneArray) {
  let airplane;
  let mearuremeant = 0;
  airplaneArray.map((a) => {
    if (a.flightsPerDay > mearuremeant) {
      mearuremeant = a.flightsPerDay;
      airplane = a;
    }
  });
  return airplane;
}

console.log(findLargest(airports));
