import renderMain from "./pages/mainpage";
import "./styles/style.css";

const content = document.querySelector("#content");

content.appendChild(renderMain());
