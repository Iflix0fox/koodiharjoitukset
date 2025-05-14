/* Tehtävä 1
Luo konstruktori-funktio `User`, joka ottaa parametreina `username` ja `email`.
Sen tulee luoda olio, jolla on nämä ominaisuudet sekä metodi `showInfo`, joka tulostaa käyttäjän tiedot.
Luo uusi käyttäjä ja kutsu `showInfo()`.
*/
// Kirjoita koodisi tähän

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  logInfo() {
    console.log(`Username: ${this.username}, email: ${this.email}`);
  }
}

const user1 = new User("ahmad", "emai@gg.com");
user1.logInfo();

/* Tehtävä 2
Muokkaa tehtävää 1: Käytä ES6 `class`-syntaksia `User`-luokan määrittelyyn.
Lisää metodi `changeEmail(newEmail)`, joka päivittää käyttäjän sähköpostiosoitteen.
*/
// Kirjoita koodisi tähän
class User2 {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  logInfo() {
    console.log(`Username: ${this.username}, email: ${this.email}`);
  }

  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

const user2 = new User2("ahmad", "emai@gg.com");
user2.logInfo();
user2.changeEmail("newemail@gg.com");
user2.logInfo();

/* Tehtävä 3
Luo olio `theme`, jolla on ominaisuudet `name` (light tai dark) ja `isActive`.
Lisää HTML:ään painike. Kun sitä klikataan, vaihdetaan teema light ↔ dark ja päivitetään `isActive`-arvo.
*/
// Kirjoita koodisi tähän

const theme = {
  name: "light",
  isActive: true,
};

document.getElementById("themeBtn").addEventListener("click", () => {
  if (theme.name === "light") {
    theme.name = "dark";
  } else {
    theme.name = "light";
  }

  if (theme.name === "dark") {
    theme.isActive = true;
  } else {
    theme.isActive = false;
  }

  document.body.setAttribute("data-theme", theme.name);
});

/* Tehtävä 4
Luo olio `counter`, jolla on ominaisuus `value`.
Lisää HTML:ään kaksi painiketta: toinen kasvattaa `value`, toinen pienentää.
Näytä `value` HTML-elementissä ja päivitä se reaaliaikaisesti painikkeiden avulla.
*/
// Kirjoita koodisi tähän

const counter = {
  value: 0,
};

const val = document.getElementById("val");
document.getElementById("inc").addEventListener("click", () => {
  console.log("inc clicked");
  counter.value++;
  val.textContent = counter.value;
});

document.getElementById("dec").addEventListener("click", () => {
  console.log("deinc clicked");
  counter.value--;
  val.textContent = counter.value;
});

/* Tehtävä 5
Luo olio `product`, jolla on `name`, `price` ja `quantity`.
Lisää HTML:ään syöttökenttä, johon käyttäjä voi syöttää ostettavan määrän.
Päivitä `quantity` ja näytä kokonaishinta dynaamisesti.
*/
// Kirjoita koodisi tähän

const product = {
  name: "tuote",
  price: 10.0,
  quantity: 1,
};

document.getElementById("itemName").textContent = product.name;
document.getElementById("itemPrice").textContent = product.price;

const qtyInput = document.getElementById("qty");
const total = document.getElementById("total");

function utdateTotal() {
  product.quantity = parseInt(qtyInput.value);
  total.textContent = `yhteensä €${product.price * product.quantity}`;
}

qtyInput.addEventListener("input", utdateTotal);
/* Tehtävä 6
Määrittele konstruktori `Task`, joka ottaa `title`, `description` ja `completed`.
Lisää HTML:ään painike, jota painamalla lisätään uusi `Task`-olio `tasks`-taulukkoon ja näytetään se sivulla.
*/
// Kirjoita koodisi tähän

class Task {
  constructor(title, description, completed) {
    this.title = title;
    this.description = description;
    this.completed = completed;
  }
}

const tasks = [];

document.getElementById("addTask").addEventListener("click", () => {
  const title = document.getElementById("title").value;
  const description = document.getElementById("desc").value;
  const completed = document.getElementById("completed").checked;

  const task = new Task(title, description, completed);
  tasks.push(task);

  const li = document.createElement("li");
  li.textContent = `${task.title} - ${task.description} (${
    task.completed ? "completed" : "not finished"
  })`;

  document.getElementById("taskList").appendChild(li);
});

/* Tehtävä 7
Luo olio `weatherApp`, jossa on metodi `fetchWeather(city)`.
Käytä `fetch`-funktiota hakeaksesi säätietoja API:sta ja näytä ne HTML-elementissä.
(API: OpenWeather tai jokin muu ilmainen sää-API)
*/
// Kirjoita koodisi tähän

/* Tehtävä 7
Luo konstruktori-funktio `Car`, joka ottaa `brand`, `model` ja `year`.
Lisää konstruktoriin metodi `age()`, joka laskee auton iän.
Luo uusi `Car`-olio ja näytä sen ikä verkkosivulla.
*/
// Kirjoita koodisi tähän

class Car {
  constructor(brand, model, year) {
    this.barnd = brand;
    this.model = model;
    this.year = year;
  }

  getAge() {
    let age = new Date().getFullYear() - this.year;
    return age;
  }
}

const myCar = new Car("toyota", "corolla", 2015);
console.log(myCar.getAge());

document.getElementById("carInfo").textContent = `Auto: ${
  myCar.barnd
} - ${myCar.getAge()}`;

/* Tehtävä 8
Luo taulukko `users`, jossa jokaisella käyttäjällä on `name` ja `score`.
Lisää HTML:ään painike, joka lajittelee käyttäjät pistemäärän mukaan laskevasti ja päivittää näkyvän listan.
*/

// Kirjoita koodisi tähän

const shoppingList = {
  items: [],
};

const listElemment = document.getElementById("list");

document.getElementById("addItem").addEventListener("click", () => {
  const item = document.getElementById("itemInput").value;
  if (item) {
    shoppingList.items.push(item);
    const li = document.createElement("li");
    li.textContent = item;
    listElemment.appendChild(li);
    document.getElementById("itemInput").vlaue = "";
  }
});

/* Tehtävä 9
Luo olio `shoppingList`, jolla on taulukko `items`.
Lisää syöttökenttä ja painike, joiden avulla käyttäjät voivat lisätä uusia tuotteita `items`-taulukkoon ja päivittää näkyvän listan.
*/
// Kirjoita koodisi tähän

/* Tehtävä 10
Luo taulukko `posts`, jossa jokaisella postauksella on `title`, `content` ja `likes`.
Lisää jokaisen postauksen viereen "Tykkää"-painike, joka kasvattaa `likes`-määrää ja päivittää näkymän.
*/

// Kirjoita koodisi tähän
/*const posts = [
  { title: "Postaus 1", content: "Sisältö 1" },
  { title: "Postaus 2", content: "Sisältö 2" },
];

const postsElement = document.getElementById("posts");

const renderPosts = (posts) => {
  postsElement.innerHTML = "";
  posts.forEach((posts, index) => {
    console.log(posts);
    const li = document.createElement();
  });
};
*/

/* Tehtävä 12
Luo konstruktori-funktio `Employee`, jolla on `name`, `position` ja `salary`.
Lisää metodi `increaseSalary(percent)`, joka kasvattaa palkkaa annetulla prosentilla.
Luo työntekijä ja nosta hänen palkkaansa dynaamisesti.
*/
// Kirjoita koodisi tähän
class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  increaseSalary(percentage) {
    this.salary *= percentage;
  }

  getInfo() {
    console.log(
      `työntekijä ${this.name} - ${
        this.position
      } - palkka on ${this.salary.toFixed(2)}`
    );
  }
}

const employee = new Employee("matti", "johtaja", 3000);
employee.getInfo();
employee.increaseSalary(1.15);
employee.getInfo();

/* Tehtävä 13
Luo olio `timer`, jolla on `seconds` ja metodi `start()`, joka laskee sekunteja ylöspäin.
Näytä ajastin HTML-elementissä ja päivitä se sekunnin välein.
*/
// Kirjoita koodisi tähän
const timer = {
  seconds: 0,
  intervalId: null,
  start() {
    if (this.intervalId !== null) return;
    this.intervalId = setInterval(() => {
      this.seconds++;
      document.getElementById("timer").textContent = this.seconds;
    }, 100);
  },

  stop() {
    clearInterval(this.intervalId); // ✅ fixed
    this.intervalId = null;
  },
};

document.getElementById("start").addEventListener("click", () => {
  console.log("start button clicked");
  timer.start();
});

document.getElementById("stop").addEventListener("click", () => {
  console.log("stop button clicked");
  timer.stop();
});

/* Tehtävä 14
Luo konstruktori-funktio `Book`, joka ottaa parametreina `title`, `author` ja `pages`.
Luo yksinkertainen kirjastosovellus, jonka avulla käyttäjät voivat lisätä kirjoja HTML-lomakkeen kautta ja näyttää ne dynaamisesti.
*/
// Kirjoita koodisi tähän

class Book {
  constructor(nimi, kirjailia, sivut) {
    this.nimi = nimi;
    this.kirjailia = kirjailia;
    this.sivut = sivut;
  }
}

document.getElementById("bookForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("nimi").value;
  const author = document.getElementById("kirjailia").value;
  const pages = document.getElementById("sivut").value;

  const book = new Book(title, author, pages);
  console.log(book);

  const li = document.createElement("li");
  li.textContent = `${book.nimi}by ${book.kirjailia} - ${book.sivut} sivua `;
  document.getElementById("books").appendChild(li);

  e.target.reset();
});

/* Tehtävä 15
Luo olio `foxTracker`, jolla on `foxes`-taulukko.
Lisää syöttökenttä ja painike, joiden avulla käyttäjät voivat lisätä uusia kettuja (nimi ja sijainti) taulukkoon.
Näytä kettujen lista dynaamisesti HTML-elementissä.
*/
// Kirjoita koodisi tähän

const foxTracker = {
  foxes: [],
};

document.getElementById("addFox").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const location = document.getElementById("loc").value;

  if (name && location) {
    foxTracker.foxes.push({ name, loc });

    const li = document.createElement("li");
    li.textContent = `${name} @ ${location}`;
    document.getElementById("foxes").appendChild(li);

    document.getElementById("name").value = "";
    document.getElementById("loc").value = "";
  }
});
