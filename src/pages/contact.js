export default function renderContact() {
  const element = document.createElement("div");

  element.classList.add("boxinfo");

  const contact = document.createElement("h2");
  contact.textContent = "Contact Us!";
  element.appendChild(contact);

  const addr = document.createElement("p");
  addr.textContent = "333 Biscayne Blvd Way, Miami, FL 33131";
  element.appendChild(addr);

  const number = document.createElement("p");
  number.textContent = "(123) 456-7890";
  element.appendChild(number);

  return element;
}
