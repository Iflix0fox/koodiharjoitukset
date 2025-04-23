

// Luo muuttuja nimeltään age ja anna sille kokonaislukuarvo. 
let age = 55;

//Luo muuttuja nimeltään name ja anna sille merkkijonoarvo.

let name = "Abbas";

//Luo muuttuja nimeltään isStudent ja anna sille totuusarvo (boolean).

let is_Student = true;

//Luo muuttuja nimeltään hobbies ja anna sille taulukko, joka sisältää muutamia merkkijonoarvoja (esim. harrastukset).

let hobbies = ["jalkapallo", "lentopallo"];


//Luo info-olio eli objekti, jossa on kaksi ominaisuutta: schoolName (merkkijono) ja grade (kokonaisluku).

let student_info = {
    school_name: "Business college",
    grade: 56,
};

// Käytä console.log() -metodia tulostamaan jokainen muuttuja konsoliin.
console.log("nimi on ",name);

console.log("onko opiskelija ", is_Student);

console.log(hobbies);

console.log(student_info.school_name,student_info.grade);

//Käytä typeof-operatoria tarkistaaksesi jokaisen muuttujan tietotyypin ja tulosta tulos console.log()-metodilla.


console.log("Abbas is", typeof name, "55 is", typeof age,"is_student is", typeof is_Student, "harrastukset is", typeof hobbies, "student_info is", typeof student_info);
 