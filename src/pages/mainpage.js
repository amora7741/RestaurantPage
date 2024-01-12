import renderNavbar from "../components/navbar";

export default function renderMain(content) {
  content.appendChild(renderNavbar());

  const contentBox = document.createElement("div");
  contentBox.classList.add("contentbox");

  content.appendChild(contentBox);

  return contentBox;
}
