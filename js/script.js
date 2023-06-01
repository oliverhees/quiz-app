// Dark Mode
const mainElement = document.querySelector("body");
const darkModeToggle = document.querySelector(".dark-mode");
// console.log(mainElement);

darkModeToggle.addEventListener("click", () => {
  mainElement.classList.toggle("dark");
  //console.log("darkmode");
});
