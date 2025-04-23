//tulosta luvut 1-10
let laskuri = 1;
while(laskuri <=10) {
    console.log(laskuri);
    laskuri++;
}



for(let laskuri = 1; laskuri <=10; laskuri++) {
console.log(laskuri);

}




while(true) {
    // pyydä käyttäjältä slasanaa
let salasana = prompt("Anna salasana.")
if(salasana == "sala") {
    alert("oikein!");
    //break "rikkoo eli lopettaa silmukan"
    break;
}
}