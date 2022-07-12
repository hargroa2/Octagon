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
const rankings = document.getElementById("ranks");

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

  // ====== APPENDING DATA TO PAGE ====== COMMENT
  const rank = document.getElementById("ranks");

  const forEachClass = (index) => {
    for (let fighter of Object.keys(json[0].fighters)) {
      // append the contents for each fighter onto the page
      //NOTE: May need to change this later for css reasons
      const paragraph = document.createElement("p");
      paragraph.innerText = json[index].fighters[fighter].fighter_ranking;
      rank.append(paragraph);

      const paragraphNames = document.createElement("p");
      paragraphNames.innerText = json[index].fighters[fighter].fullName;
      rank.append(paragraphNames);

      const paragraphLinks = document.createElement("p");
      paragraphLinks.innerText = json[index].fighters[fighter].url;
      rank.append(paragraphLinks);
    }
  };

  const select = document.getElementById("weightClasses");

  const weightChoice = () => {
    if (select.options[select.selectedIndex].value === "P4P") {
      forEachClass(0);
    } else if (select.options[select.selectedIndex].value === "FW") {
      forEachClass(1);
    } else if (select.options[select.selectedIndex].value === "BW") {
      forEachClass(2);
    } else if (select.options[select.selectedIndex].value === "FeW") {
      forEachClass(3);
    } else if (select.options[select.selectedIndex].value === "LW") {
      forEachClass(4);
    } else if (select.options[select.selectedIndex].value === "WW") {
      forEachClass(5);
    } else if (select.options[select.selectedIndex].value === "MW") {
      forEachClass(6);
    } else if (select.options[select.selectedIndex].value === "LHW") {
      forEachClass(7);
    } else if (select.options[select.selectedIndex].value === "HW") {
      forEachClass(8);
    } else if (select.options[select.selectedIndex].value === "WP4P") {
      forEachClass(9);
    } else if (select.options[select.selectedIndex].value === "WS") {
      forEachClass(10);
    } else if (select.options[select.selectedIndex].value === "WF") {
      forEachClass(11);
    } else if (select.options[select.selectedIndex].value === "WB") {
      forEachClass(12);
    } else if (select.options[select.selectedIndex].value === "WFe") {
      forEachClass(13);
    }
  };

  weightChoice();
};
rankButton.onclick = () => ufcRankings();
