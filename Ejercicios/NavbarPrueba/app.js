const btn = document.querySelector("label i");
const menu = document.querySelector(".list");
const item = document.querySelectorAll(".item");

btn.addEventListener("click", () => {
      menu.classList.toggle("show");
      if (menu.classList.contains("show")) {
            btn.classList.remove("bx-menu");
            btn.classList.add("bx-x");
      } else {
            btn.classList.add("bx-menu");
            btn.classList.remove("bx-x");
      }
});

item.forEach((element) => {
      element.addEventListener("click", () => menu.classList.toggle("show"));
});
