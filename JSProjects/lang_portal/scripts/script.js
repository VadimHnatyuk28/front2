let navs = document.querySelectorAll(".navigation");

navs.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.classList.add("activeBtn");
    console.log("ad");
  });

  element.addEventListener("mouseout", () => {
    element.classList.remove("activeBtn");
  });
});

let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
let btnNext = document.querySelector(".nextWord");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
  btnNext.classList.toggle("hidden");
});
