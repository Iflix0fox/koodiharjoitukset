
//Luo kaksi muuttujaa:
//numString1 arvolla "42".
//numString2 arvolla "3.14".
 
let numString1 = "3.14";

let numString2 = "42";


//Käytä parseInt()-funktiota muuntaaksesi numString1 kokonaisluvuksi.
parseInt(numString1);

//Käytä parseFloat()-funktiota muuntaaksesi numString2 liukuluvuksi.

parseFloat(numString2);

//Tulosta tulokset käyttäen console.log() viestien kera:
console.log(parseFloat(numString1),parseInt(numString2));

//"Kokonaisluku on 42."
//"Liukuluku on 3.14."





//Luo muuttuja nimeltä price ja anna sille arvoksi 19.56789.

let price = 19.56789;

//Käytä .toFixed()-metodia:

//Pyöristääksesi hinnan kahden desimaalin tarkkuuteen.
console.log(price.toFixed(2)); // = 19.57


//Pyöristääksesi hinnan ilman desimaaleja.

console.log(price.toFixed()); // = 20 

//Tulosta molemmat tulokset käyttäen console.log() viestien kera:


//"Hinta 2 desimaalilla: 19.57"

//"Hinta ilman desimaaleja: 20"


// 08_numerot

//Luo kaksi muuttujaa: num1 arvolla "10".ja num2 arvolla "notANumber".
//Muunna num1 ja num2 käyttäen parseFloat()-metodia ja Tulosta num1:n ja num2:n summa käyttäen console.log().

let num_01 = 10;

let num_02 = "nor a number";
 console.log(parseFloat(num_01), "ja ", parseFloat(num_02));


//(Huom: Jos toinen arvoista on NaN, tulokseksi tulee NaN, joka tulostuu automaattisesti.) Esimerkkituloste:
//NaN (jos yhteenlaskussa on virheellinen syöte).
//10 (jos molemmat syötteet ovat kelvollisia numeroita).

//09_numerot

//Luo muuttuja userInput ja anna sille arvo "25.75 omenaa" //Käytä parseFloat() metodia irrottamaan numeerinen arvo muuttujasta.
 
let userInput = "25.75 omenaa";

console.log(parseFloat(userInput)); // = 25.75 

//Käytä .toFixed() tuloksen pyöristämiseen 1 desimaalin tarkkuudella. Tulosta luku console.log().

console.log(parseFloat(userInput).toFixed(1)); // = 25.8


//(Jos syöte eli input ei ala numerolla, tulos on NaN.) Esimerkkivastaukset:
//"25.8" (kun syöte alkaa numerolla).
//"NaN" (kun syöte ei kelpaa).





//10_numerot

//Luo muuttuja num ja aseta sille arvoksi 5.67. // Käytä Math.round() metodia sen pyöristämiseen lähimpään kokonaislukuun. 

let number1 = 5.67;

console.log("math.round",Math.round(number1)); // = 6

// Käytä Math.floor() metodia sen pyöristämiseen alaspäin edelliseen lähimpään kokonaislukuun.
 console.log("math floor on",Math.floor(number1)); // 5

// Käytä Math.ceil() metodia sen pyöristämiseen ylöspäin seuraavaan lähimpään kokonaislukuun.
console.log("Math.ceil",Math.ceil(number1)); // 6

// Tulosta kaikki saamasi tulokset console.log() avulla ja lisää jokaiselle selittävät teksti.



//11_numerot

// Käytä Math.random() metodia satunnaisluvun generoimiseen lukujen 0 ja 1 väliltä.

let random_number = Math.random();

console.log(Math.random()); // = 0.49281288157586434



// Kerro saamasi tulos kymmenellä ja käytä Math.floor()  metodia sen pyöristämiseen lähimpään kokonaislukuun. 

let random_number_is = random_number * 10;

console.log("x10 =",random_number_is); // = 4.928128815758644

let result = Math.floor(random_number * 10);

// Tulosta lopputulos console.log() avulla, jossa viesti on esimerkiksi: "Arvottu lukusi on 4"


console.log("Arvottu lukusi on 4", "ja tulos on", result);



//12_numerot

// Luo kolme muuttujaa: a = 12, b = 7 ja c = 20.
let a = 12;

let b = 7;

let c = 20;

// Käytä Math.max()-metodia löytääksesi suurimman luvun a:n, b:n ja c:n joukosta.

let maxNum = Math.max(a, b, c);

// Käytä Math.min()-metodia löytääksesi pienimmän luvun niiden joukosta.
let minNum = Math.min(a, b, c);

// Tulosta tulokset käyttäen console.log():ää viestien kera, kuten:
//"The largest number is 20."
//"The smallest number is 7."

console.log("The largest number is ", maxNum,"The smallest number is", minNum );