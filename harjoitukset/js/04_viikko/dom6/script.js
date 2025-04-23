// <!-- /*
// Luo lomake, jossa on pakolliset nimi- ja sähköpostikentät.
// Kirjoita JavaScript-koodi, joka:
// - Estää lomakkeen lähetyksen, jos jompikumpi kenttä on tyhjä.
// - Näyttää virheilmoituksen, jos kenttiä on tyhjänä.
// */ -->

function sendform(event) {
  const name = document.getElementById("name").value;
  const email = document.getAnimations("email").value;

  if (name === "" || email === "") {
    event.preventDefault();
    document.getElementById("errormessege").textContent =
      "please fill both fields";
    console.log("jotain");
  }
}

document.getElementById("userform").addEventListener("submit", sendform);
