"use struct";

window.addEventListener("DOMContentLoaded", () => {
  const tab = document.getElementsByClassName("main-nav-li");
  const area = document.getElementsByClassName("area");

  tab[0].classList.add("active");
  area[0].classList.add("is-active");

  Array.from(tab).forEach((element) => {
    element.addEventListener("click", () => {
      Array.from(tab).forEach((element) => {
        element.classList.remove("active");
      });
      Array.from(area).forEach((element) => {
        element.classList.remove("is-active");
      });

      index = [].slice.call(tab).indexOf(element);
      element.classList.add("active");
      area[index].classList.add("is-active");
    });
  });
});
