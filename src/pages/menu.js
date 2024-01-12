import pasta from "../images/pasta.jpg";
import createMenuItem from "../components/menuitem";

export default function renderMenu() {
  const container = document.createElement("div");
  container.classList.add("menucontainer");

  for (let i = 0; i < 6; i++) {
    const item = createMenuItem("Pasta", pasta);
    container.appendChild(item);
  }

  return container;
}
