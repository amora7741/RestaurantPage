import chef from "../images/chef.jpeg";

export default function renderHome() {
  const element = document.createElement("div");

  element.classList.add("boxinfo");
  const title = document.createElement("h2");
  title.textContent = "Welcome to B.R.Z!";
  const info = document.createElement("p");
  info.textContent = "Open 24/7 with the Finest Cuisine";
  const chefRamsey = new Image();
  const description = document.createElement("p");
  description.textContent = "Meet our lead chef: Gordon Ramsey!";

  chefRamsey.src = chef;

  element.appendChild(title);
  element.appendChild(info);
  element.appendChild(chefRamsey);
  element.appendChild(description);

  return element;
}
