const hero = document.querySelector(".hero");

hero.querySelector(".item:first-child").addEventListener("click", function () {
    hero.classList.toggle("open");
});