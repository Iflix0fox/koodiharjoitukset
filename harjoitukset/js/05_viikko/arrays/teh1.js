//Alkuperäinen data:
let teamMembers = ["Joni", "Emilia", "Mikko", "Sade"];

//Alkuperäinen data:
let teamMembers = ["Joni", "Emilia", "Mikko", "Sade"];
//1. Käy `teamMembers`-taulukko läpi ja tulosta jokainen nimi konsoliin.
console.log(teamMembers);
//2. Poista taulukon ensimmäinen jäsen.
teamMembers.shift("Joni");
console.log(teamMembers);
//3. Poista taulukon viimeinen jäsen.
teamMembers.pop();
console.log(teamMembers);
//4. Lisää uusi jäsen "Alex" taulukon alkuun.
teamMembers.unshift("Alex");
console.log(teamMembers);
//5. Lisää uusi jäsen "Linda" taulukon loppuun.
teamMembers.push("Linda");
console.log(teamMembers);
//6. Luo uusi taulukko, joka ei sisällä kahta ensimmäistä jäsentä ja jätä alkuperäinen muuttumattomaksi.
let teamMembers2 = teamMembers.slice(2);
console.log(teamMembers2);
//7. Etsi "Mikko":n indeksi taulukossa.
console.log(indexof("miiko"));
//8. Yritä etsiä "Jake":n indeksi (ei ole taulukossa).
//9. Korvaa "Mikko" kahdella uudella jäsenellä: "Maria" ja "Netta".
//10. Liitä "Ahmad" taulukkoon ja tallenna tulos uuteen taulukkoon, alkuperäistä muuttamatta.
//11. Kopioi koko `teamMembers`-taulukko `slice`-metodilla ja tallenna se uuteen muuttujaan.
//12. Luo `newMembers`-taulukko, jossa on "Tiina" ja "Myrsky", ja yhdistä se `teamMembers`-taulukkoon uuteen taulukkoon.
//13. Etsi kaikki "Joni":in esiintymät ja tallenna niiden indeksit uuteen taulukkoon.
//14. Muunna kaikki nimet taulukossa isoiksi kirjaimiksi, muuttamatta alkuperäistä taulukkoa.
//15. Lajittele `teamMembers` aakkosjärjestykseen.
//16. Käännä `teamMembers`-taulukon järjestys päinvastaiseksi.
//17. Tarkista, onko ainakin yksi jäsen nimeltään "Joni".
//18. Tarkista, onko kaikilla nimillä yli kolme kirjainta.
