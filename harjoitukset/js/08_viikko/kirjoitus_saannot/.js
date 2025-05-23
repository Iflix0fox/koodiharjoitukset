"use strict";

/* Tehtävä 1: Käytä \"strict mode\" -tilaa


Luo funktio `task1`, joka käyttää \"use strict\" -tilaa.
Yritä käyttää muuttujaa ilman sen julistamista.
Ota virhe kiinni ja loggaa: \"Strict mode -virhe: [virheilmoitus]\"
*/

let variable = 0;
function task1() {
  try {
    variable1 = 22;
  } catch (error) {
    console.log("Strict mode -virhe:", error.message);
  }
}
task1();

/* Tehtävä 2: Muuttujien oikea julistus
  
  Julista vakio `MAX_USERS = 100` ja muuttuja `currentUsers = 10`.
  Yritä muuttaa vakion arvoa ja ota virhe kiinni.
  */

function task2() {
  const MAX_USERS = 100;
  let currentUsers = 10;
  try {
    currentUsers += 10;
    MAX_USERS += 10;
  } catch (error) {
    console.log("Strict mode -virhe:", error.message);
  }
  console.log("max_users", MAX_USERS);
  console.log("cuurent users", currentUsers);
}
task2();

/* Tehtävä 3: Luo class objekti ja tulosta se
  
  Luo objekti `userProfile`, jossa kentät:
  - name
  - email
  - isAdmin
  Tulosta objekti konsoliin.
  */

class UserProfile {
  constructor(name, email, isAdmin) {
    this.name = name;
    this.email = email;
    this.isAdmin = isAdmin;
  }
}

function task3() {
  const user1 = new UserProfile("pekka", "pekka@totpohatan.fi", true);
  console.log(user1);
}
task3();

/* Tehtävä 4: Yksinkertainen funktio pinta-alan laskemiseen
  
  Luo funktio `calculateArea(width, height)`, joka palauttaa suorakulmion pinta-alan.
  */

function calculateArea(width, height) {
  return width * height;
  // Kirjoita koodi tähän
}

console.log("alue 5x10 = ", calculateArea(5, 10));

/* Tehtävä 5: Vältä taikalukuja
  
  Määritä vakio `DISCOUNT = 0.1`.
  Luo funktio `applyDiscount(price)`, joka laskee hinnasta alennuksen.
  */

const DISCOUNT = 0.1;
function applyDiscount(price) {
  // Kirjoita koodi tähän
  return price - price * DISCOUNT;
}

console.log("after discount", applyDiscount(100));

/* Tehtävä 6: Kirjoita hyödyllisiä kommentteja
  
  Kirjoita funktio `greetUser(name)`, joka palauttaa tervehdyksen käyttäjälle.
  Lisää funktioon kommentti, joka selittää sen tarkoituksen.
  */

function greetUser(name) {
  return `hello, ${name}`;
}
console.log(greetUser("bob"));

/* Tehtävä 7: Refaktoroi epäselvä koodi selkeämmäksi
  
  Paranna epäselvää funktiota käyttämällä parempia nimiä ja muotoilua.
  
  Ennen:
  function f(n){return n<0 ? 'negative' : 'positive';}
  */
function f(number) {
  return number < 0 ? "negative" : "positive";
}

function checkNumber(number) {
  if (number < 0) {
    return "negative";
  } else {
    return "positive";
  }
}
console.log(f(8));
console.log(checkNumber(8));
/* Tehtävä 8: Korjaa koodin muotoilu
  
  Kirjoita koodi uudelleen käyttäen oikeaa muotoilua ja sisennystä.
  
  Ennen:
  let x=10; function example(){console.log(x);}
  */

let x = 10;
function example() {
  console.log(x);
}
