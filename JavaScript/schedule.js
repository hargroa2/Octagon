const rapidKey = config.RAPID_API_KEY;

// ====== NAVIGATION ====== COMMENT
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navPosition = document.querySelector(".nav-position");

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

//====== API FETCH FOR SCHEDULE ====== COMMENT
const schedButton = document.getElementById("scheduleData");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": rapidKey,
    "X-RapidAPI-Host": "sports-data3.p.rapidapi.com",
  },
};

const ufcSchedule = async () => {
  const urlSchedule = "https://sports-data3.p.rapidapi.com/ufc";
  const ufcData2 = await fetch(urlSchedule, options);
  const json = await ufcData2.json();
  console.log(json);

  //====== APPENDING DATA TO PAGE ======
  const schedContainer = document.getElementById("schedule");

  const printFightCards = () => {
    for (let fight of Object.keys(json)) {
      const data = document.createElement("p");
      data.innerText = json[fight].eventDescription;
      schedContainer.append(data);

      for (let fighting of Object.keys(json[fight].fights)) {
        const dataFight = document.createElement("p");
        dataFight.innerText = json[fight].fights[fighting].description;
        schedContainer.append(dataFight);

        const dataMoney1 = document.createElement("p");
        dataMoney1.innerText = json[fight].fights[fighting].moneyLine1;
        schedContainer.append(dataMoney1);

        const dataMoney2 = document.createElement("p");
        dataMoney2.innerText = json[fight].fights[fighting].moneyLine2;
        schedContainer.append(dataMoney2);
      }
    }
  };

  printFightCards();
};

schedButton.onclick = () => ufcSchedule();
