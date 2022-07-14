// ====== NAVIGATION ====== COMMENT
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navPosition = document.querySelector(".nav-position");
const navBar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  navPosition.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
//===== RANDOM HTML PAGE ON BUTTON CLICK ====== COMMENT

//HAVE THIS WORK IF YOU DONT MANAGE TO FINISH HOME PAGE INFORMATION ON TIME TODO

// let allVariations = [
//   "index.html#button-travel",
//   "schedule.html#button-travel",
//   "rankings.html#button-travel",
//   "fighters.html#button-travel",
// ];
// let randomizeVariations =
//   allVariations[Math.floor(Math.random() * allVariations.length)];

// document.getElementById("exploreButton").onclick = () => {
//   window.location.href = randomizeVariations;
// };

//====== JQUERY ====== COMMENT
//Changes background colored nav bar when scrolling down
// $(function () {
//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 50) {
//       $("nav").addClass("changeColor");
//     } else {
//       $("nav").removeClass("changeColor");
//     }
//   });
// });
