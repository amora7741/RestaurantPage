import renderMain from "./pages/mainpage";
import renderHome from "./pages/home";
import "./styles/style.css";

const content = document.querySelector("#content");
const contentBox = document.querySelector(".contentbox");

renderMain(content);
