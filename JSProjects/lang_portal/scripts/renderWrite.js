import getData from "./getData.js";

const postsData = await getData;

function main() {
  let lengthOfData = postsData.length - 1;
  let engWord = document.querySelector(".eng");
  let ukrWord = document.querySelector(".ukr");
  let nextWord = document.querySelector(".nextWord");
  let frame = document.querySelector("iframe");
  let content = document.querySelector(".card");
  let tfBtn = document.querySelector(".trueFalse");
  let writeBtn = document.querySelectorAll(".write");
  let tfRate = 0;

  function renderWrite(num) {
    content.style.display = "block";

    content.innerHTML = `<div class="submitContainer">
          <h1 class="eng">${postsData[num].ukr}</h1>
          <form action="">
          <input type="text" class="writeInput"><br><br>
          <input type="submit" value="Submit" class="writeSubmit">
          <input type="submit" value="Podskazka" class="writeSubmitHint" style="display:none">
        </form> 
        </div>`;
    let writeInput = document.querySelector(".writeInput");
    let writeSubmit = document.querySelector(".writeSubmit");
    let writeSubmitHint = document.querySelector(".writeSubmitHint");

    writeSubmit.addEventListener("click", function () {
      if (writeInput.value == postsData[num].eng) {
        tfRate++;
        alert(`succes, rate is ${tfRate}`);
        renderWrite(getRandomInt(0, lengthOfData));
      } else {
        writeSubmitHint.style.display = "block";
        alert("---");
      }
    });

    writeSubmitHint.addEventListener("click", function () {
      alert(postsData[num].eng);
      renderWrite(getRandomInt(0, lengthOfData));
    });
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  writeBtn.forEach((element) => {
    element.addEventListener("click", () => {
      let menu = document.querySelector(".menu ");
      let menu_btn = document.querySelector(".menu-btn ");
      menu.classList.remove("active");
      menu_btn.classList.remove("active");
      content.style.display = "none";
      renderWrite(getRandomInt(0, lengthOfData));
    });
  });
}

main();
