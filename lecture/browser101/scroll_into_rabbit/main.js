"use strict";

const rabbitBtn = document.querySelector(".scroll_to");
const topBtn = document.querySelector(".up_to_btn");
const rabbit = document.querySelector(".rabbit");

rabbitBtn.addEventListener("click", () => {
  rabbit.scrollIntoView({
    block: "center",
    behavior: "smooth",
  });
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
