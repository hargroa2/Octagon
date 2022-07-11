// ====== NAVIGATION ====== COMMENT
const hamburger = document.querySelector(".hamburger");

const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

//====== API FETCH FOR SCHEDULE ====== COMMENT
const schedButton = document.getElementById("scheduleData");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8bdd6ac647mshec06c3605007861p14466bjsn68a802965e6a",
    "X-RapidAPI-Host": "sports-data3.p.rapidapi.com",
  },
};

const ufcSchedule = async () => {
  const urlSchedule = "https://sports-data3.p.rapidapi.com/ufc";
  const ufcData2 = await fetch(urlSchedule, options);
  const json2 = await ufcData2.json();
  console.log(json2);
};

schedButton.onclick = () => ufcSchedule();
