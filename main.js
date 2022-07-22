const mode = document.querySelector("#mode");

mode.addEventListener("click", function () {
  document.body.classList.toggle("light");
  if (mode.textContent === "light mode") {
    mode.textContent = "dark mode";
  } else {
    mode.textContent = "light mode";
  }
});
