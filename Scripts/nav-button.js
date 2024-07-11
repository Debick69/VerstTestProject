const navButtons = [
  ...document.querySelectorAll(".header-bottom-content-nav-ul-li"),
];

navButtons.forEach((navButton) => {
  navButton.addEventListener("click", () => {
    document
      .querySelector(".header-bottom-content-nav-ul-li.selected")
      .classList.remove("selected");
    navButton.classList.add("selected");
  });
});
