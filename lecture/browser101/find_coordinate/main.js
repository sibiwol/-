"use strict";

const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const target = document.querySelector(".target");
const coordinates = document.querySelector(".coordinates");

// <script> defer 옵션은 html이 준비 되기 전 호출함
// load 이벤트는 css, img 등 준비가 되어야 함수 호출함
addEventListener("load", () => {
  const targetRect = target.getBoundingClientRect();
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  window.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    vertical.style.transform = `translate(${x}px, 0)`;
    horizontal.style.transform = `translate(0, ${y}px)`;

    target.style.transform = `translate(${x - targetHalfWidth}px, ${
      y - targetHalfHeight
    }px)`;

    coordinates.style.transform = `translate(${x}px,${y}px)`;
    coordinates.innerHTML = `${x}px, ${y}px`;
  });
});
