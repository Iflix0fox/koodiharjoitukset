//01
//Luo funktio nimeltä add, joka:
//Ottaa kaksi parametria, a ja b.
//Palauttaa a:n ja b:n summan.
//Kutsu funktiota arvoilla 10 ja 5.
function add(a, b) {
  return a + b;
}
let result1 = add(5, 10);

//Tulosta tulos käyttäen console.log().

console.log(result1); // = 15

//Bonus: Kutsu funktiota useita kertoja eri argumenteilla ja tulosta kaikki tulokset.

let result2 = add(20, 30);
let result3 = add(20, -4);
let result4 = add(0, 0);
let result5 = add(100, 200);

console.log(result2); // = 50
console.log(result3); // = 16
console.log(result4); // = 0
console.log(result5); // = 300

//02

/* Luo funktio nimeltä isEven, joka:
Ottaa yhden parametrin, num.

Palauttaa true, jos num on parillinen, muuten palauttaa false.
Kutsu funktiota arvoilla 4 ja 7.
Tulosta tulokset käyttäen console.log().

Bonus: Muokkaa funktiota käyttämään implisiittistä palautusta.
*/

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false

//03

/* Luo funktio nimeltä getLength, joka:
Ottaa yhden parametrin, str.
Palauttaa str:n pituuden käyttäen .length.
Kutsu funktiota merkkijonolla "JavaScript".
Tulosta tulos käyttäen console.log().
*/

function getLength(text) {
  return text.length;
}

console.log(getLength("JavaScript")); //= 10

//04

/* Luo funktio nimeltä capitalize, joka:
Ottaa yhden parametrin, str.
Palauttaa merkkijonon siten, että ensimmäinen kirjain on iso ja loput pieniä.
Kutsu funktiota merkkijonolla "javascript".
Tulosta tulos käyttäen console.log().

Vinkki: Käytä str[0].toUpperCase() ja str.slice(1).toLowerCase().
*/

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

console.log(capitalize("javascrip"));

//05

/* Luo funktio nimeltä generateRandomNumber, joka:
  Ottaa kaksi parametria, min ja max.
  Palauttaa satunnaisen kokonaisluvun min:n ja max:n väliltä (mukaan lukien).
  Kutsu funktiota arvoilla 1 ja 10.
  Tulosta tulos käyttäen console.log().
  
  Vinkki: Käytä Math.random(), Math.floor() ja yksinkertaista matikkaa.
  */

function generateRandomNumber(min, max) {
  min = Math.ceil(min); // = 1,5 to 2
  max = Math.floor(max); // = 1,5 to 1

  return Math.floor(Math.random() * (max - min + 1)) + min; // = max = (10) - min (1) + 1 = 10
}

// 0.5 = 0 * = max = (10) - min (1) + 1 = 10 * 0.5 =

console.log(generateRandomNumber(1, 10));

//06
/* Luo funktio nimeltä replaceWord, joka:
  Ottaa kolme parametria, sentence, oldWord ja newWord.
  Palauttaa lauseen, jossa oldWord on korvattu newWordilla.
  Kutsu funktiota lauseella "I like apples.", oldWord: "apples" ja newWord: "bananas".
  Tulosta tulos käyttäen console.log().
  */

function replaceWord(sentence, oldWord, newWord) {
  return sentence.replace(new RegExp(oldWord, "g"), newWord);
}

console.log(replaceWord("I like apples.", "apples", "bananas"));

//07
/* Luo funktio nimeltä containsWord, joka:
  Ottaa kaksi parametria, sentence ja word.
  Palauttaa true, jos sentence sisältää sanan word, muuten false.
  Kutsu funktiota lauseella "JavaScript is fun!" ja sanalla "fun".
  Tulosta tulos käyttäen console.log().
  
  Bonus: Muokkaa funktiota käyttämään implisiittistä palautusta.
  */

function containsWord(sentence, word) {
  return sentence.includes(word);
}

console.log(containsWord("Javascript is fun!", "fun"));

//08
/* Luo funktio nimeltä roundNumber, joka:
  Ottaa kaksi parametria, num ja precision.
  Palauttaa luvun pyöristettynä annetun tarkkuuden mukaan (desimaalien määrä).
  Kutsu funktiota arvoilla 19.56789 ja 2.
  Tulosta tulos käyttäen console.log().
  
  Vinkki: Käytä .toFixed().
  */

function roundNumber(num, precision) {
  return parseFloat(num.toFixed(precision));
}
console.log(roundNumber(19.56789, 2));

console.log(typeof roundNumber(19.56789, 2));

//09
/* Luo funktio nimeltä findMax, joka:
  Ottaa kolme parametria, a, b ja c.
  Palauttaa suurimman näistä kolmesta luvusta.
  Kutsu funktiota arvoilla 12, 7 ja 20.
  Tulosta tulos käyttäen console.log().
  
  Vinkki: Käytä Math.max().
  */

function findMax(a, b, c) {
  return Math.max(a, b, c);
}

console.log(findMax(12, 7, 20));

//10

function cleanAndTransform(text) {
  let removeSpace = text.trim();
  let convertTosmall = removeSpace.toLowerCase();
  let replaceWord = convertTosmall.replace("powerful", "amazing");

  return replaceWord;
}

console.log(cleanAndTransform(" JavaScript is powerful! "));
