//Alkuperäinen data:
//let teamMembers = ["Joni", "Emilia", "Mikko", "Sade"];

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
let mikkoIndex = teamMembers.indexOf("Mikko");
console.log("mikon indeexi on ", mikkoIndex);
//8. Yritä etsiä "Jake":n indeksi (ei ole taulukossa).
let jakeIndex = teamMembers.indexOf("Jake"); // ei ole taulokossa
console.log("jakin indeexi on ", jakeIndex);

//9. Korvaa "Mikko" kahdella uudella jäsenellä: "Maria" ja "Netta".

if (mikkoIndex !== -1) {
  teamMembers.splice(mikkoIndex, "Maria", "Netta");
}
console.log(teamMembers);
//10. Liitä "Ahmad" taulukkoon ja tallenna tulos uuteen taulukkoon, alkuperäistä muuttamatta.
let withAhmad = [...teamMembers, "Ahmad"];
console.log(withAhmad);
//11. Kopioi koko `teamMembers`-taulukko `slice`-metodilla ja tallenna se uuteen muuttujaan.
let copiedTeam = teamMembers.slice();
console.log(copiedTeam);
//12. Luo `newMembers`-taulukko, jossa on "Tiina" ja "Myrsky", ja yhdistä se `teamMembers`-taulukkoon uuteen taulukkoon.
let newMembers = ["Tiina", "Myrsky"];
let combaindTeam = teamMembers.concat(newMembers);
console.log(combaindTeam);
//13. Etsi kaikki "Joni":in esiintymät ja tallenna niiden indeksit uuteen taulukkoon.
//-----------------------------------------------------------
//14. Muunna kaikki nimet taulukossa isoiksi kirjaimiksi, muuttamatta alkuperäistä taulukkoa.
let upperCased = teamMembers.map((name) => name.toUpperCase());
console.log(upperCased);
//15. Lajittele `teamMembers` aakkosjärjestykseen.
let sortedTeam = [...teamMembers].sort();
console.log(sortedTeam);
//16. Käännä `teamMembers`-taulukon järjestys päinvastaiseksi.
let sortedDescending = [...sortedTeam].reverse();
console.log("16 on ", sortedDescending);

//17. Tarkista, onko ainakin yksi jäsen nimeltään "Joni".
console.log("dose it have joni", teamMembers.includes("Joni"));
//18. Tarkista, onko kaikilla nimillä yli kolme kirjainta.
let alllongNames = teamMembers.every((name) => name.length > 3);
console.log("kaikkilla on yli 3 ", alllongNames);
