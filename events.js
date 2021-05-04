let header = document.querySelector("header");
let hamburger = document.querySelector(".menu-btn");
let overlay = document.querySelector(".overlay");
let menu_items = document.querySelectorAll(".menu-item");

const ToggleMenu = () => {
  let x = document.querySelector("#menuId");
  if (x.className === "menu") {
    x.className += " responsive";
    hamburger.classList.add("open");
  } else {
    x.className = "menu";
    hamburger.classList.remove("open");
  }
};

hamburger.addEventListener("click", ToggleMenu);

// ul list items
menu_items.forEach((el) => {
  el.addEventListener("click", ToggleMenu);
});

// set opacity on scroll
const setOpacity = () => {
  let offsetY = window.pageYOffset;
  if (offsetY) {
    header.style.opacity = 0.95;
    header.style.padding = "0em";
  } else {
    header.style.opacity = 1;
    header.style.padding = "0.94em 0";
  }
};

// add scroll event on header
window.addEventListener("scroll", setOpacity);

let imgAvatar = document.querySelector(".section-avatar");

imgAvatar.addEventListener("click", () => {
  let a = document.querySelector(".img-avatar");
  a.classList.toggle("avatar-2");
});

// let slider = document.querySelector(".slider");
// slider.addEventListener("change", () => {
//   let value = slider.value;

//   document.getElementsByTagName("body")[0].style.backgroundColor =
//     "rgb(" + value + ",1,1)";
// });

window.addEventListener("load", () => {
});

var myVideo = document.getElementById("video1");

function playPause() {
  console.log(myVideo);
  if (myVideo.paused) myVideo.play();
  else myVideo.pause();
}

function makeBig() {
  myVideo.width = 560;
}

function makeSmall() {
  myVideo.width = 320;
}

function makeNormal() {
  myVideo.width = 420;
}
