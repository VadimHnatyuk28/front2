import getData from "./getData.js";

const postsData = await getData;
console.log(postsData);

function main() {
  let lengthOfData = postsData.length - 1;
  let engWord = document.querySelector(".eng");
  let ukrWord = document.querySelector(".ukr");
  let nextWord = document.querySelector(".nextWord");
  let vocabBtn = document.querySelectorAll(".learning");
  let content = document.querySelector(".card");
  let contentWords = document.querySelector(".card-words");
  //   let frame = document.querySelector("iframe");

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function render(num) {
    content.style.display = "block";
    engWord.innerHTML = postsData[num].eng;
    ukrWord.innerHTML = postsData[num].ukr;
    // frame.src = `https://context.reverso.net/перевод/английский-русский/${postsData[num].eng}`;
  }

  nextWord.addEventListener("click", function () {
    render(getRandomInt(0, lengthOfData));
  });

  vocabBtn.forEach((element) => {
    element.addEventListener("click", () => {
      console.log("vocab");
      content.style.display = "none";
      let menu = document.querySelector(".menu ");
      let menu_btn = document.querySelector(".menu-btn ");
      menu.classList.remove("active");
      menu_btn.classList.remove("active");
      nextWord.classList.remove("hidden");
      location.reload();
      render(getRandomInt(0, lengthOfData));
    });
  });
  render(getRandomInt(0, lengthOfData));
}

main();
