
// 01
// Täydennä funktio convertNumberToString niin, että se muuntaa saamansa numeron merkkijonoksi.

let num = 33


function convertNumberToString(number) {
    return number.toString();
}

console.log("33 is", typeof convertNumberToString(33)); // --> "33"


// Täydennä funktio convertStringToNumber niin, että se muuntaa saamansa merkkijonon numeroksi.

let number = "32"

function convertStringToNumber(string) {
    return parseInt(string);
}

console.log("32 is", typeof convertStringToNumber(33));

//02
// Määrittele funktio, joka muuntaa lämpötilan Fahrenheit-asteista Celsius-asteiksi.
// Tämä funktio käyttää kaavaa (Fahrenheit - 32) * 5/9
// Saatu lämpötila pyöristetään yhteen desimaaliin tarkkuuden vuoksi.

function fahrenheitToCelsius(f) {
    let temp = (f - 32) * 5 / 9;
    return temp
}




// Esimerkki - älä muokkaa
console.log(fahrenheitToCelsius(21)); // haluttu tulos: "-6,1"

// 1 mile = 1.609344 km

function mitokm(mi) {
let km = mi * 1.609344;

return km.toFixed(1);

}

console.log(mitokm(8));



// Luo muuttuja nimeltä 'num1' ja anna sille liukulukuarvo.
 let nmu1 = 1.5;

console.log("num1 arvo on", nmu1);

//Luo muuttuja nimeltä 'num2' ja anna sille eri liukulukuarvo.
let num2 = 19990.34;

console.log("num2 arvo on", num2);
// Pyöristä sekä 'num1' että 'num2' lähimpään kokonaislukuun ja tallenna tulokset muuttujiin 'roundedNum1' ja 'roundedNum2'.

let roundedNum1 = Math.round(nmu1);
console.log("roundednum1 arvo on", roundedNum1);

let roundedNum2 = Math.round(num2);
console.log("Roundnum2 arvo on", roundedNum2);

//Laske neliöjuuri 'roundedNum1':stä ja tallenna se muuttujaan nimeltä 'sqrtNum1'.

let sqrtNum1 = Math.sqrt(nmu1);
console.log("sqrtnum1 arvo on", sqrtNum1);
//Etsi suurempi numero 'roundedNum1':n ja 'roundedNum2':n välillä ja tallenna se muuttujaan nimeltä 'maxNum'.
let Maxnum = Math.max(nmu1, num2);
console.log("maxnum on", Maxnum);

console.log("num1 type is",typeof nmu1,"num2 type is", typeof num2);



//Tehtävä: Jakolasku

// //Kuvitellaan, että olet matematiikan opettaja, ja haluat laatia yksinkertaisen tehtävän oppilaillesi. Tehtäväsi on luoda ohjelma, joka laskee kahden luvun jakolaskun ja tulostaa tuloksen.
 

//Luo kaksi muuttujaa, ja anna niille arvot.
 let numoer1 = 4903;
 let numero2 = -23;
 // Laske näiden kahden numeron jakolaskun tulos ja tallenna se uuteen muuttujaan
let osamaara = numoer1 / numero2;

//Tulosta vastaus konsoliin.
console.log("jako lasku tulos on", osamaara);


/** Tehtävä: Ostoskori
 * Kuvitellaan, että olet kehittämässä yksinkertaista verkkokauppasovellusta. Sinun tehtäväsi on luoda ohjelma, joka laskee ostoskorissa olevien tuotteiden yhteishinnan ja tulostaa sen.
 * - Määrittele muuttujat kullekin ostoskorissa olevalle tuotteelle ja niiden hinnoille.
 
 * - Laske tuotteiden yhteishinta ja tallenna se muuttujaan, esimerkiksi yhteishinta.
 * - Tulosta yhteishinta konsoliin.
 */


//Määrittele muuttujat kullekin ostoskorissa olevalle tuotteelle ja niiden hinnoille.

let matio = 2

let vetta = 1

let kirja = 5

//Laske tuotteiden yhteishinta ja tallenna se muuttujaan, esimerkiksi yhteishinta.

let osto_kori = matio + vetta + kirja;

console.log("ostokorin hinta on", osto_kori);