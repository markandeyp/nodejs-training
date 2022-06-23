document.addEventListener("DOMContentLoaded", function () {
  const profileArrow = document.querySelector("#profile-arrow");
  profileArrow.addEventListener("click", toggleProfileMenu);
});

function toggleProfileMenu() {
  document.querySelector("#profile-menu").classList.toggle("hidden");
}
