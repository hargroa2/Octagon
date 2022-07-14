const newsKey = config.NEWS_API_KEY;

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

//====== JQUERY ======

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 900) {
      $("nav").addClass("changeColor");
    } else {
      $("nav").removeClass("changeColor");
    }
  });
});

//====== FETCH API DATA ======
const ufcNewsArticles = async () => {
  API_KEY = newsKey;
  const url = `https://newsapi.org/v2/everything?q=UFC&apiKey=${API_KEY}`;

  const ufcNews = await fetch(url);
  const json = await ufcNews.json();
  console.log(json);

  // ====== APPEND NEWS TO PAGE ======
  const newsBox = document.getElementById("newsContainer");

  for (let i = 0; i < 5; i++) {
    const article = document.createElement("p");
    const image = document.createElement("img");
    const linkToArticle = document.createElement("a");
    const source = document.createElement("p");

    article.innerText = json.articles[i].title;

    image.setAttribute("src", json.articles[i].urlToImage);
    image.style.height = "200px";
    image.style.width = "400px";

    linkToArticle.setAttribute("href", json.articles[i].url);
    linkToArticle.innerText = "Click here for the article";

    source.innerText = json.articles[i].source.name;

    newsBox.append(article, image, source, linkToArticle);
  }
};

//ONLY MAKE THIS WORK IF YOU WANT THE API TO BE CALLED
// ufcNewsArticles();
