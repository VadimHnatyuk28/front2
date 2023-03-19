async function getData() {
  const response = await fetch("data.json");
  const data = await response.json();
  return data;
}

async function main() {
  const postsData = await getData();
  let randomWord;
  let lengthOfData = postsData.length - 1;
  let engWord = document.querySelector(".eng");
  let ukrWord = document.querySelector(".ukr");
  let btn = document.querySelector(".nextWord");

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function render(num) {
    engWord.innerHTML = postsData[num].eng;
    ukrWord.innerHTML = postsData[num].ukr;
  }

  btn.addEventListener("click", function () {
    render(getRandomInt(0, lengthOfData));
  });

  render(getRandomInt(0, lengthOfData));
}

main();
