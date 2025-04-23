//01

//Tee funktio nimeltä logOddNumbers:
 // - Se tulostaa konsoliin kaikki parittomat numerot 1 ja 100 välillä.
  // Eli 1, 3, 5, 7, 9, 11 jne. lukuun 99 asti.
function logOddNumbers(){
    let laskuri = 1
    while(laskuri<=99){
      console.log(laskuri)
      laskuri+=2;
    }
    
  }
  logOddNumbers();
  
 


  //02

  // Tee funktio logEvenNumbers, joka:
// - tulostaa kaikki parilliset kokonaisluvut 1 ja 99 välillä tällä kaavalla:  2, 98, 4, 96, ..., 50.
// - Tulosta luvut samalle riville konsolissa.
function logEvenNumbers(){
    let calculater = 2
    while(calculater<=50){
        console.log(calculater)
        if(calculater<50){
            console.log(100 - calculater)
        }
        
        calculater+=2;
    }
}
logEvenNumbers();



//03

//Luo funktio averageSpeed, joka pyytää jatkuvasti käyttäjää syöttämään etäisyyden (kilometreinä)
 //ja ajan (tunteina) ja laskee sitten keskinopeuden.
 //Ohjelman tulisi lopettaa, kun käyttäjä syöttää 0 etäisyydeksi.
 //Saadessaan etäisyyden 0 ohjelman ei pitäisi pyytää enempää syöttöä. */

// Tehdään tämä opettajan esimerkkinä, koska promptin käyttö ei ole vielä tuttua.

function averageSpeed(){
    while(true){
    let distance = parseFloat(prompt("Give distance."))
        //ohjelman tulisi lopettaa, kun käyttäjä syöttää 0 etäisyyksi.
    if(distance == 0) {
        break;
    }
    //eli ole luku tai negatiivinen 
if(isNaN(distance) || distance <0) {
    //palaa silmukaan alkuun
    continue;
}
let time = parseFloat(prompt("Give time."))

//Ei ole luku tai on negatiivinen
if(isNaN(time) || time< 0){
    //palaa silmukaan alkuun
    continue;
}

let avarage = distance / time;
alert("Avarge speed is" + avarage);

    }

} 
averageSpeed()


//04


// Tee funktio countEvenNumbers, joka pyytää käyttäjää syöttämään 20 lukua.
// Kun kaikki luvut on syötetty, ohjelman tulisi näyttää konsolissa montako
// näistä luvuista on parillisia.
function countEvenNumbers(){ //  Define a function called countEvenNumbers
    let evenCount = 0; //  Create a variable to keep track of even numbers


    for(let i = 0; i < 20; i++){ //  Repeat this block 20 times (from 0 to 19)
        let input = prompt(`enter number ${i + 1}:`); //  Ask the user to enter a number
        let num = Number(input); //  Convert the user’s input (text) to a number

        if(num % 2 === 0) {  // Check if the number is even
            evenCount++; // If it's even, add 1 to the counter
        }
    }
console.log(`You enterd ${evenCount} even numbers.`); //  Show in the console how many even numbers were entered
        alert("All done!"); //  This shows a message when finished
}

countEvenNumbers();// run the function


// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.
    

//05

// Tee funktio calculateAverageUntilZero, joka pyytää käyttäjää syöttämään numeroita,
// kunnes käyttäjä syöttää 0.
// Tässä vaiheessa ohjelma lopettaa toimintansa.
// Lopetettuaan ohjelman tulisi laskea ja näyttää konsolissa kaikkien syötettyjen
// numeroiden keskiarvo.

// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.


function calculateAverageUntilZero(){
    let numeroja = 0; // This will store the sum of all entered numbers
    let montakerta = 0; // This will count how many numbers the user entered
    let Annettu_numero;
    
        while(true) {
        Annettu_numero = parseFloat(prompt("enter number here (0 to stop):")); // 👈 This asks the user for a string and converts it to a Number
 
         if (Annettu_numero === 0) {
             break; // Exit the loop if the number is 0
         }
        numeroja += Annettu_numero; // Add the number to the total sum
        montakerta++; // Increase the count of numbers entered
     }
 
      // Now that the loop is done, we'll calculate the average
      if(montakerta >0){
         let avarage = numeroja / montakerta; // Calculate the average
         console.log("the avarage is: ", avarage); 
          
         }
         else {
             console.log("no numbers were entered.");
      }
 
     }
 
     calculateAverageUntilZero();



