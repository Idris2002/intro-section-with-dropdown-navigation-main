const openMenu = document.querySelector(".menu");
const closeMenu = document.querySelector(".closeMenu");
const linkGrp = document.querySelector(".header-links");

function handleDisplayMenu() {
  linkGrp.classList.add("display");
}
function handleCloseMenu() {
  linkGrp.classList.remove("display");
}
openMenu.addEventListener("click", handleDisplayMenu);
closeMenu.addEventListener("click", handleCloseMenu);
