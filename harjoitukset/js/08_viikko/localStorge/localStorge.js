/* Tehtävä 1
Tallenna merkkijono `"Hello, LocalStorage!"` LocalStorageen avaimella `"message"`.
Hae se ja tulosta konsoliin.
*/

// Kirjoita koodi tähän

localStorage.setItem("message", "Hello localstorage");

const messageFromStorge = localStorage.getItem("message");
console.log(messageFromStorge);

/* Tehtävä 2
Luo olio `userSettings`, jossa on:
- `theme` ("dark" tai "light")
- `language` ("English", "Spanish" jne.)
Muunna se JSON-merkkijonoksi ja tallenna LocalStorageen.
Hae se, pura JSON ja tulosta `theme`-ominaisuus.
*/
// Kirjoita koodi tähän
const userSettings = {
  theme: "dark",
  language: "English",
};
localStorage.setItem("userSettings", JSON.stringify(userSettings));
console.log(JSON.parse(localStorage.getItem("userSettings")).theme);

/* Tehtävä 3
Määrittele taulukko `favoriteBooks`, jossa on vähintään kolme kirjaoliota (`title` ja `author`).
Tallenna taulukko LocalStorageen.
Hae ja pura se, sitten tulosta kaikkien kirjojen nimet.
*/
// Kirjoita koodi tähän

const favoriteBooks = [
  { title: "Sadan vuoden yksinäisyys", author: "Gabriel García Márquez" },
  { title: "Tuntematon sotilas", author: "Väinö Linna" },
  { title: "The Hobbit", author: "J.R.R. Tolkien" },
];

localStorage.setItem("books", JSON.stringify(favoriteBooks));
const books = JSON.parse(localStorage.getItem("books"));

books.forEach((book) => {
  console.log(book.title);
});

/* Tehtävä 4
Kirjoita funktio `saveToLocalStorage(key, object)`, joka:
- Muuntaa olion JSONiksi.
- Tallentaa sen LocalStorageen annetulla avaimella.
Testaa tallentamalla olio ja hakemalla se.
*/
// Kirjoita koodi tähän
function saveToLocalStorage(key, object) {
  localStorage.setItem(key, JSON.stringify(object));
}

//kustuaan
saveToLocalStorage("books", favoriteBooks);
console.log(JSON.parse(localStorage.getItem("books")));

/* Tehtävä 5
Kirjoita funktio `getFromLocalStorage(key)`, joka:
- Hakee arvon LocalStoragesta.
- Purkaa sen jos se on JSON.
- Tulostaa haetun arvon.
*/
// Kirjoita koodi tähän

function getFromLocalStorage(key) {
  const value = localStorage.getItem(key);
  try {
    //se yrittää aja tätä
    console.log(JSON.parse(value));
    return JSON.parse(value);
    //jos tämä tuotta virhe
  } catch (error) {
    //se siirtyy catch metodiin
    console.log(value);
  }
}

getFromLocalStorage("books");
getFromLocalStorage("message");
/* Tehtävä 6
Luo olio `userProfile`, jossa on:
- `username`
- `email`
- `preferences` (olio, jossa on `theme` ja `notifications`)

Tallenna se LocalStorageen.
Hae se ja päivitä `theme` arvoksi `"dark mode"`, sitten tulosta päivitetty olio.
*/

// Kirjoita koodi tähän

const userProfile = {
  username: "techExplorer123",
  email: "tech.explorer@example.com",
  preferences: {
    theme: "light",
    notifications: true,
  },
};

//käytetään funktiot
saveToLocalStorage("profile", userProfile);

getFromLocalStorage("profile");

//vaihtetaan theme
userProfile.preferences.theme = "dark";

saveToLocalStorage("profile", userProfile);

getFromLocalStorage("profile");

/* Tehtävä 7
Määrittele olio `shoppingList`, jossa on taulukko `items` (merkkijonoja).
Tallenna se LocalStorageen.
Kirjoita funktio `addItemToList(item)`, joka:
- Hakee `shoppingList` LocalStoragesta.
- Lisää uuden tuotteen.
- Tallentaa päivitetyn listan takaisin LocalStorageen.
- Tulostaa päivitetyn listan.
*/
// Kirjoita koodi tähän

const shoppingList = {
  items: ["Milk", "Bread", "Eggs"],
};

saveToLocalStorage("shoppingList", shoppingList);

function addItemToList(item) {
  const list = getFromLocalStorage("shoppingList");
  list.items.push(item);
  saveToLocalStorage("shoppingList", list);
  console.log(list);
}

addItemToList("Cheese");

/* Tehtävä 8
Luo olio `counter`, jossa on:
- `count` (alkaa arvosta 0)
Tallenna se LocalStorageen.
Kirjoita funktio `incrementCounter()`, joka:
- Hakee counterin.
- Kasvattaa `count` arvoa yhdellä.
- Tallentaa päivitetyn counterin.
- Tulostaa uuden arvon.
*/
// Kirjoita koodi tähän

const counter = { count: 0 };

saveToLocalStorage("counter", counter);

function incrementCounter() {
  let inc = getFromLocalStorage("counter");
  inc.count++;
  saveToLocalStorage("counter", inc);
  console.log(inc.count);
}
incrementCounter();
incrementCounter();
incrementCounter();
incrementCounter();

/* Tehtävä 9
Luo taulukko `tasks`, jossa jokainen tehtävä on olio (`id`, `description`, `completed`).
Tallenna se LocalStorageen.

Kirjoita funktio `markTaskComplete(taskId)`, joka:
- Hakee `tasks` LocalStoragesta.
- Etsii annetulla ID:llä olevan tehtävän ja asettaa `completed` arvoksi `true`.
- Tallentaa päivitetyt tehtävät.
- Tulostaa päivitetyn listan.
*/
// Kirjoita koodi tähän

const tasks = [
  { id: 1, description: "Tee kotitehtävät", completed: false },
  { id: 2, description: "Siivoa huone", completed: false },
  { id: 3, description: "Käy kaupassa", completed: false },
];

saveToLocalStorage("tasks", tasks);
function markTaskComplete(taskId) {
  let getTask = getFromLocalStorage("tasks");
  const task = tasks.find((t) => t.id === taskId);
  if (task) {
    task.completed = true;
  }
  saveToLocalStorage("tasks", tasks);
  console.log(task);
}

markTaskComplete(2);

/* Tehtävä 10
Kirjoita funktio `clearLocalStorage()`, joka poistaa kaiken LocalStorageen tallennetun datan.
Kutsu funktiota ja varmista että LocalStorage on tyhjä.
*/
// Kirjoita koodi tähän

function clearLocalStorage() {
  localStorage.clear();
}
clearLocalStorage();
