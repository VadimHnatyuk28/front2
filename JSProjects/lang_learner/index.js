async function getData() {
  const response = await fetch("data.json");
  const data = await response.json();
  return data;
}

async function main() {
  const postsData = await getData();
  let lengthOfData = postsData.length - 1;
  let engWord = document.querySelector(".eng");
  let ukrWord = document.querySelector(".ukr");
  let nextWord = document.querySelector(".nextWord");
  let frame = document.querySelector("iframe");
  let content = document.querySelector(".card");
  let tfBtn = document.querySelector(".trueFalse");
  let writeBtn = document.querySelector(".write");
  let tfRate = 0;

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function render(num) {
    engWord.innerHTML = postsData[num].eng;
    ukrWord.innerHTML = postsData[num].ukr;
    frame.src = `https://context.reverso.net/перевод/английский-русский/${postsData[num].eng}`;
  }

  function renderTrueFalse(trueNum, falseNum, falseNumTwo) {
    content.style.display = "block";
    let newArr = shuffle([trueNum, falseNum, falseNumTwo]);

    const [first, second, third] = newArr;

    content.innerHTML = `<div>
      <h1 class="tfEng" id=${trueNum}>${postsData[trueNum].ukr} </h1>
      <a href="#" class="tfBtns" id=${first}>${postsData[first].eng} </a>
      <a href="#" class="tfBtns" id=${second}>${postsData[second].eng} </a>
      <a href="#" class="tfBtns" id=${third}>${postsData[third].eng} </a>
      <h1 class="ukr"></h1>
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
        }
      });
    });
  }

  function renderWrite(num) {
    content.style.display = "block";

    content.innerHTML = `<div>
      <h1 class="eng">${postsData[num].ukr}</h1>
      <form action="">
      <input type="text"><br><br>
      <input type="submit" value="Submit">
  </form> 
    </div>`;
  }

  render(getRandomInt(0, lengthOfData));

  nextWord.addEventListener("click", function () {
    render(getRandomInt(0, lengthOfData));
  });

  tfBtn.addEventListener("click", () => {
    content.style.display = "none";
    renderTrueFalse(
      getRandomInt(0, lengthOfData),
      getRandomInt(0, lengthOfData),
      getRandomInt(0, lengthOfData)
    );
  });

  writeBtn.addEventListener("click", () => {
    content.style.display = "none";
    renderWrite(getRandomInt(0, lengthOfData));
  });

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
}

main();
