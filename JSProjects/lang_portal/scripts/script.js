let navs = document.querySelectorAll(".navigation");

navs.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.classList.add("active");
    console.log("ad");
  });

  element.addEventListener("mouseout", () => {
    element.classList.remove("active");
  });
});
