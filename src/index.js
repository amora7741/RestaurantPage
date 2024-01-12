import renderMain from "./pages/mainpage";
import renderHome from "./pages/home";
import renderContact from "./pages/contact";
import renderMenu from "./pages/menu";
import "./styles/style.css";

const content = document.querySelector("#content");
const contentBox = renderMain(content);

function switchToPage(pageFunction) {
  contentBox.classList.add("fade-out");

  setTimeout(() => {
    contentBox.innerHTML = "";
    const newPage = pageFunction();
    contentBox.appendChild(newPage);

    contentBox.classList.remove("fade-out");
    contentBox.classList.add("fade-in");

    contentBox.addEventListener("transitionend", function handler() {
      contentBox.classList.remove("fade-in");
      contentBox.removeEventListener("transitionend", handler);
    });
  }, 300);
}

document.addEventListener("DOMContentLoaded", function () {
  switchToPage(renderHome);
});

document.getElementById("home").addEventListener("click", function () {
  switchToPage(renderHome);
});
document.getElementById("contact").addEventListener("click", function () {
  switchToPage(renderContact);
});
document.getElementById("menu").addEventListener("click", function () {
  switchToPage(renderMenu);
});
