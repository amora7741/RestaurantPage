import renderMain from "./pages/mainpage";
import renderHome from "./pages/home";
import renderContact from "./pages/contact";
import renderMenu from "./pages/menu";
import "./styles/style.css";

const content = document.querySelector("#content");
const contentBox = renderMain(content);

function switchToPage(pageFunction) {
  const newPage = pageFunction();
  contentBox.innerHTML = "";
  contentBox.appendChild(newPage);
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
