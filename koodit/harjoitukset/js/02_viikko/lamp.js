function changeImage() {
    var image = document.getElementById("myImage");
    if (image.src.match("bulbon")) {
      image.src="/images/"
    } else {
      image.src="/images/pic_bulbon.gif";
    }
  }