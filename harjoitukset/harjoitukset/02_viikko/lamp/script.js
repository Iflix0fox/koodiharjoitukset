function changeImage() {
  var image = document.getElementById("on-off-lamp");
  if (image.src.match("bulbon")) {
    image.src = "pic_bulboff.gif";
    console.log("test");
  } else {
    image.src = "pic_bulbon.gif";
  }
}
