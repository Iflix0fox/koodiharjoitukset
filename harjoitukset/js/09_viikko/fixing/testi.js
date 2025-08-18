/* Tehtävä 6: Tallenna ja hae LocalStoragesta
/*
Tehtävä: Kirjoita funktio, joka tallentaa olion **LocalStorageen**.
         Hae se sitten takaisin ja käsittele virheet, jos JSON on virheellinen.

Testitapaukset:
saveUser({ name: "Alice", age: 25 }); // Tallentaa käyttäjän
console.log(getUser()); // Palauttaa tallennetun käyttäjäolion
localStorage.setItem("user", "{ invalid JSON }"); // Simuloi vioittunutta dataa
console.log(getUser()); // Kirjaa virheen ja palauttaa null
*/

function saveUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

function getUser() {
  try {
    const fetchUser = JSON.parse(localStorage.getItem("user"));
    return fetchUser;
  } catch (error) {
    console.log("", error.message);
  }
}

saveUser({ name: "Alice", age: 25 }); // Tallentaa käyttäjän
console.log(getUser()); // Palauttaa tallennetun käyttäjäolion
localStorage.setItem("user", "{ invalid JSON }"); // Simuloi vioittunutta dataa
console.log(getUser()); // Kirjaa virheen ja palauttaa null
