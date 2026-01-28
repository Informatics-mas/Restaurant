function loadHome() {
  const content = document.getElementById("content");

  // Card principale
  const card = document.createElement("div");
  card.classList.add("rigth"); // attention orthographe

  const title = document.createElement("h1");
  title.textContent = "Le Gourmet Royal";

  const text = document.createElement("p");
  text.textContent =
    "Bienvenue au Gourmet Royal, où chaque plat est préparé avec passion et des ingrédients frais.";

  const button = document.createElement("button");
  button.textContent = "Reserve - Now";

  // Card secondaire
  const card1 = document.createElement("div");
  card1.classList.add("left");

  // Ajouter les éléments à la card principale
  card.appendChild(title);
  card.appendChild(text);
  card1.appendChild(button);

  // Ajouter les cards au content
  content.appendChild(card);
  content.appendChild(card1);
}

export default loadHome;
