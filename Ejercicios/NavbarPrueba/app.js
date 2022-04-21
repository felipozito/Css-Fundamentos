const btn = document.querySelector("label i");
const menu = document.querySelector(".list");
const submenu = document.querySelector(".sub_list");
const menuServicios = document.querySelector("#item_servicios");
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

menuServicios.addEventListener("mouseover", () => {
      submenu.classList.add("active");
});
menuServicios.addEventListener("mouseout", () => {
      submenu.classList.remove("active");
});
