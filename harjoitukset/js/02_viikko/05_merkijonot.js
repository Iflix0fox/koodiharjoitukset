// 01 merkijonot

//Määritä kolme merkkijonovakiota käyttäen yksinkertaisia lainausmerkkejä, kaksoislainausmerkkejä ja backtick-merkkejä. Esimerkiksi:
//'Yksinkertaisilla lainausmerkeillä merkitty merkkijono (')

let a = "0";

//"Kaksoislainausmerkeillä merkitty merkkijono (")

let b = "1";

//`Mallimerkkijono (`)

let c = `2`;

//Tulosta kaikki kolme merkkijonoa käyttäen console.log().

console.log(a, b, c);

// 02_merkijonot

//Määritä muuttuja language ja anna sille arvoksi "JavaScript".

let language = "javascript";

//Luo mallimerkkijono käyttäen backtick-merkkejä sanoaksesi: "I am learning JavaScript." upottamalla language-muuttuja merkkijonoon.

let lause = `I am learning ${language}`;

//Tulosta muodostettu merkkijono käyttäen console.log().

console.log(lause);

//03

///* Luo muuttuja nimeltä multiLine ja anna sille monirivinen merkkijono käyttäen backtick-merkkejä. Esimerkiksi:This is line one. This is line two. This is line three. Tulosta multiLine-muuttuja käyttäen console.log()

let multiLine = `
This is line one.
This is line two.
This is line three.
`;

console.log(multiLine);

//04

//Määritä muuttuja nimeltä text ja anna sille arvoksi "Hello, World!".

let text = "Hello, World!";

//Käytä .length-ominaisuutta selvittääksesi merkkijonon pituuden ja tallenna se muuttujaan nimeltä textLength.

let num = text.length;

//Tulosta viesti, kuten: "The length of the text is 13."

console.log("The length of the text is ", num);

//05

//Määritä muuttuja nimeltä word ja anna sille arvoksi "JavaScript".

let word = "JavaScript";

//Käytä hakasulkunotaatiota päästäksesi käsiksi: () [] {}
//Merkkijonon ensimmäiseen merkkiin.
//Merkkijonon viimeiseen merkkiin.
//Tulosta näiden avulla viestit, kuten:
//"The first character is J."
//"The last character is t."

let first_chcracter = word[0];

let last_charcter = word[9];

console.log(
  "the fisrt charcter is ",
  first_chcracter,
  "and the last charcter is ",
  last_charcter
);

//06

//Määritä kaksi muuttujaa: num1 ja num2 arvoilla 7 ja 5.

let num1 = 7;

let num2 = 5;

let sum = num1 + num2;

let totally = `the sum of ${num1} and ${num2} is ${sum}`;

//Luo merkkijono käyttäen backtick-merkkejä sanoaksesi: "The sum of 7 and 5 is 12." upottamalla summauslauseke suoraan mallimerkkijonoon.
//Tulosta muodostettu merkkijono.

console.log(totally);

//07

//Luo muuttuja nimeltä greeting ja anna sille arvoksi "Hello, World!".

let greeting = "Hello, Wolrd!";

console.log(greeting.toUpperCase());

console.log(greeting.toLowerCase());

//Muunna merkkijono:
//Isoiksi kirjaimiksi käyttäen .toUpperCase().
//Pieniksi kirjaimiksi käyttäen .toLowerCase().
//Tulosta molemmat tulokset käyttäen console.log().
//Esimerkkituloste:
//"HELLO, WORLD!"
//"hello, world!"

//08

//Luo muuttuja nimeltä sentence ja anna sille arvoksi "Learning JavaScript is fun!".

let sentence = "learing Javascript is fun!";

//Käytä .substring()-menetelmää erottaaksesi sanan "JavaScript" lauseesta.
//Tulosta erotettu sana käyttäen console.log().

let extracted = sentence.substring(8, 17);

console.log("Extracted word", extracted);

//Esimerkkituloste: //"Extracted word: JavaScript"

//09

//Luo muuttuja nimeltä messyString ja anna sille arvoksi " Clean me up! ".

let messyString = " Clean me up! ";

//Käytä .trim()-menetelmää poistaaksesi ylimääräiset välilyönnit merkkijonon alusta ja lopusta.
//Tulosta siistitty merkkijono käyttäen console.log().

let clean = messyString.trim();

console.log(clean);

//Esimerkkituloste:
//"Cleaned string: Clean me up!"

//10

//Luo muuttuja nimeltä phrase ja anna sille arvoksi "JavaScript is versatile and powerful."
let pharse = "Javascriopt is versatile and powerful.";

//Käytä .includes()-menetelmää tarkistaaksesi, sisältääkö merkkijono sanan "powerful".

let is_included = pharse.includes("powerful");

//Tulosta tulos käyttäen console.log().

console.log(is_included);

//Esimerkkituloste:
//"Does the phrase include 'powerful'? true"

//11

//Luo muuttuja nimeltä longText ja anna sille arvoksi "The quick brown fox jumps over the lazy dog."
let longText = "the quick brown fox jumps over the lazy dog.";

//Käytä .slice()-menetelmää erottaaksesi "quick brown fox".

let silced_text = longText.slice(4, 19);

//Tulosta erotettu osa käyttäen console.log().

console.log(silced_text);
//Esimerkkituloste:
//"Sliced text: quick brown fox"

//12

//Luo muuttuja nimeltä description ja anna sille arvoksi " JavaScript is Fun and powerful! ".
let description = " JavaScript is Fun and powerful! ";

//Tee seuraavat toimenpiteet:
//- Poista ylimääräiset välilyönnit käyttäen .trim().

let trimed = description.trim();

//- Muunna merkkijono pieniksi kirjaimiksi.

let small_words = trimed.toLowerCase();

//- Tarkista, sisältääkö se sanan "fun".

let is_included_ = small_words.includes("fun");

//- Korvaa "powerful" sanalla "amazing".

let replaced = small_words.replace("powerful", "amazing");

//- Tulosta lopullinen merkkijono ja tieto siitä, sisältääkö se sanan "fun" käyttäen console.log().

// \n = new line
console.log(replaced, "\nis the fun included", is_included_);

//Esimerkkituloste:
//"Final description: javascript is fun and amazing!"
//"Does it include 'fun'? true"
