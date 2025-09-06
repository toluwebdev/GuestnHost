let click = document.querySelector(".click");
let nav = document.querySelector(".nav");
let navigate = document.querySelector(".navigate");
let close = document.querySelectorAll(".cancel");
click.addEventListener("click", () => {
  document.body.classList.toggle("overflow-y-hidden");
  nav.classList.toggle("translate-x-0");
  nav.classList.toggle("-translate-x-full");
  navigate.classList.toggle("translate-x-0");
  navigate.classList.toggle("-translate-x-full");
});
close.forEach((element) => {
  element.addEventListener("click", () => {
    document.body.classList.remove("overflow-y-hidden");
    nav.classList.remove("translate-x-0");
    navigate.classList.toggle("-translate-x-full");
    nav.classList.toggle("-translate-x-full");

    navigate.classList.remove("translate-x-0");
  });
});
