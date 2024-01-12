export default function createMenuItem(name, img) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("itemcontainer");

  const info = document.createElement("p");
  info.textContent = name;

  const pic = new Image();
  pic.src = img;

  menuItem.appendChild(pic);
  menuItem.appendChild(info);

  return menuItem;
}
