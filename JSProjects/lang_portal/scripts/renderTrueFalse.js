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
  let writeBtn = document.querySelector(".write");
  let tfRate = 0;
  function renderTrueFalse(trueNum, falseNum, falseNumTwo) {
    content.style.display = "block";
    let newArr = shuffle([trueNum, falseNum, falseNumTwo]);

    const [first, second, third] = newArr;

    content.innerHTML = `<div>
          <h1 class="tfEng" id=${trueNum}>${postsData[trueNum].ukr} </h1>
          <a href="#" class="tfBtns" id=${first}>${postsData[first].eng} </a>
          <a href="#" class="tfBtns" id=${second}>${postsData[second].eng} </a>
          <a href="#" class="tfBtns" id=${third}>${postsData[third].eng} </a>
          <h1 class="tfRate__el">Your rate is: ${tfRate}</h1>
        </div>`;

    let tfEng = document.querySelector(".tfEng");

    let btns = document.querySelectorAll(".tfBtns");
    btns.forEach((element) => {
      element.addEventListener("click", function () {
        if (tfEng.attributes.id.value == element.attributes.id.value) {
          tfRate++;
          alert(`succes, rate is ${tfRate}`);
          if (tfRate == 10) {
            alert("Succes, you was won");
            tfRate = 0;
          }
          renderTrueFalse(
            getRandomInt(0, lengthOfData),
            getRandomInt(0, lengthOfData),
            getRandomInt(0, lengthOfData)
          );
        } else {
          tfRate--;
          alert(
            `NO! ${postsData[element.attributes.id.value].eng} is ${
              postsData[element.attributes.id.value].ukr
            }  rate is ${tfRate}`
          );
          let tfRate__el = document.querySelector(".tfRate__el");
          tfRate__el.textContent = `Your rate is: ${tfRate}`;
        }
      });
    });
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function shuffle(arr) {
    var j, temp;
    for (var i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
    return arr;
  }
  tfBtn.addEventListener("click", () => {
    content.style.display = "none";
    renderTrueFalse(
      getRandomInt(0, lengthOfData),
      getRandomInt(0, lengthOfData),
      getRandomInt(0, lengthOfData)
    );
  });
}

main();
