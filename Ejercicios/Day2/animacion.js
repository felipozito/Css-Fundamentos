let menu = document.querySelector("..menu");
menu.addEventListener("click", () => {
  menu.classList.contains("active") ? menu.classList.remove("no-animation") : menu.classList.add("active");
});
