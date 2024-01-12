import renderMain from "./pages/mainpage";
import renderHome from "./pages/home";
import "./styles/style.css";

const content = document.querySelector("#content");
const contentBox = renderMain(content);

contentBox.appendChild(renderHome());
