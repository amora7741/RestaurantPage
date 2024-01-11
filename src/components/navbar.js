export default function renderNavbar() {
  const navBar = document.createElement("div");
  navBar.classList.add("nav");
  const title = document.createElement("h1");
  title.textContent = "Bella Ristorante Zestoso";
  navBar.append(title);

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("buttoncontainer");
  const homeButton = document.createElement("button");
  homeButton.setAttribute("id", "home");
  homeButton.textContent = "Home";
  const menuButton = document.createElement("button");
  menuButton.setAttribute("id", "menu");
  menuButton.textContent = "Menu";
  const contactButton = document.createElement("button");
  contactButton.setAttribute("id", "contact");
  contactButton.textContent = "Contact";

  buttonContainer.appendChild(homeButton);
  buttonContainer.appendChild(menuButton);
  buttonContainer.appendChild(contactButton);

  navBar.appendChild(buttonContainer);

  return navBar;
}
