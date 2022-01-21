import { navbar } from "../components/navbar.js";

let nab = document.getElementById("nab10");
nab.innerHTML = navbar();

var signIn_button11 = document.getElementById('signIn_button11');
signIn_button11.addEventListener('click',move2)
  function move2() {
  window.location.href='./html/signup1.html'
}
var mainhead = document.getElementById('mainhead');
// console.log(signIn_button11)
mainhead.addEventListener('click',move3)
//   console.log(signIn_button11)
  function move3() {
  window.location.href='../home_page.html'
}

var bagn = document.getElementById('bagn');
bagn.addEventListener('click',move4)
  function move4() {
  window.location.href='../html/cart.html'
}