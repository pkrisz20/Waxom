window.onscroll = () => {
  myFunction()
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

let myFunction = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}