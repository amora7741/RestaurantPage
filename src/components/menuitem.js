export default function createMenuItem(name, img) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("itemcontainer");

  const info = document.createElement("h2");
  info.textContent = name;

  const pic = new Image();
  pic.src = img;

  menuItem.appendChild(info);
  menuItem.appendChild(pic);

  return menuItem;
}
