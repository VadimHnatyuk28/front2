// import getData from "./getData.js";
// const postsData = await getData;

async function getData() {
  const response = await fetch("dataText.json");
  const data = await response.json();
  return data;
}

const postsData = await getData();
console.log(postsData);

function main() {
  let lengthOfData = postsData.length - 1;
  let engWord = document.querySelector(".eng");
  let ukrWord = document.querySelector(".ukr");
  let nextWord = document.querySelector(".nextWord");
  let frame = document.querySelector("iframe");
  let content = document.querySelector(".card");
  let tfBtn = document.querySelector(".trueFalse");
  let textBtn = document.querySelectorAll(".text");
  let writeBtn = document.querySelector(".write");
  let tfRate = 0;
  let count = 0;

  function renderText() {
    content.style.display = "block";
    content.innerHTML = `<h1>Встав пропущене слово</h1>`;

    postsData.forEach((element) => {
      content.innerHTML += `<a href=# class="text_a" id="${postsData.indexOf(
        element
      )}">${element.title}</a>`;
    });

    let hrefs = document.querySelectorAll(".text_a");
    hrefs.forEach((href) => {
      href.addEventListener("click", function (e) {
        console.log(e.target.id);
        count = 0;
        content.style.display = "none";
        renderSpecificText(e.target.id);
      });
    });
  }

  function renderSpecificText(num) {
    content.style.display = "block";
    content.innerHTML = `<h1>${postsData[num].title}</h1>`;
    postsData[num].text.forEach((element) => {
      count++;
      content.innerHTML += `<p>${count}. ${element} </p>`;
    });

    content.innerHTML += `<input type="button" value="Submit" class="subm" />
    </form>`;

    let subm = document.querySelector(".subm");
    let inps = document.querySelectorAll(".input_value");

    subm.addEventListener("click", (e) => {
      inps.forEach((element) => {
        console.log(element.attributes[2].nodeValue);
        console.log(element.attributes[3].nodeValue);
        if (element.attributes[3].nodeValue == element.value) {
          element.className = "input_value true";
          element.readOnly = true;
        } else {
          element.className = "input_value false";
        }
      });
    });
  }

  textBtn.forEach((element) => {
    element.addEventListener("click", function () {
      let menu = document.querySelector(".menu ");
      let menu_btn = document.querySelector(".menu-btn ");
      menu.classList.remove("active");
      menu_btn.classList.remove("active");
      content.style.display = "none";
      renderText();
    });
  });
}

main();
