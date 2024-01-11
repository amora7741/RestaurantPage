import "../styles/style.css";
import renderNavbar from "../components/navbar";

export default function renderMain() {
  const element = document.createElement("div");
  element.appendChild(renderNavbar());
  return element;
}
