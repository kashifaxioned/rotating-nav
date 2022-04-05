/* Author: 

*/

let open = document.querySelector(".open-btn")
let close = document.querySelector(".close-btn")
let article = document.querySelector(".article")

open.addEventListener("click", () => {
  article.classList.add("rotate-content");
  open.style.display = "none";
  close.style.display = "block";
})
close.addEventListener("click", () => {
  article.classList.remove("rotate-content");
  open.style.display = "block";
  close.style.display = "none";
})
















