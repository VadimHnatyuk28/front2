import getData from "./getData.js";

const postsData = await getData;
console.log(postsData);

function main() {
  let lengthOfData = postsData.length - 1;
  let engWord = document.querySelector(".eng");
  let ukrWord = document.querySelector(".ukr");
  let nextWord = document.querySelector(".nextWord");
  //   let frame = document.querySelector("iframe");

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function render(num) {
    engWord.innerHTML = postsData[num].eng;
    ukrWord.innerHTML = postsData[num].ukr;
    // frame.src = `https://context.reverso.net/перевод/английский-русский/${postsData[num].eng}`;
  }

  nextWord.addEventListener("click", function () {
    render(getRandomInt(0, lengthOfData));
  });
  render(getRandomInt(0, lengthOfData));
}

main();
