const buttons = [
  ...document.querySelectorAll(".header-top-content-left-select-button"),
];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelector(".header-top-content-left-select-button.selected")
      .classList.remove("selected");
    button.classList.add("selected");
  });
});
