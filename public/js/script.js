document.getElementById("close-panel").addEventListener("click", function(e) {
  e.preventDefault();
  document.querySelector(".panel").classList.remove("panel--active");
});

document.querySelectorAll(".btn--art").forEach(function(el) {
  el.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(".panel").classList.add("panel--active");
    document.querySelector(".panel__text").textContent =
      e.target.dataset.desc;
    document.querySelector(".panel__image").src = e.target.dataset.img;
  });
});