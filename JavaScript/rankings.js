const rapidKey = config.RAPID_API_KEY;

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

//====== API FETCH FOR RANKINGS ====== COMMENT
const rankButton = document.getElementById("rankingsData");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": rapidKey,
    "X-RapidAPI-Host": "current-ufc-rankings.p.rapidapi.com",
  },
};

const ufcRankings = async () => {
  const url = "https://current-ufc-rankings.p.rapidapi.com/";

  const ufcData = await fetch(url, options);
  const json = await ufcData.json();
  console.log(json);
};
rankButton.onclick = () => ufcRankings();
