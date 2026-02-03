export function loadHome() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const after = document.createElement("div");
  after.className = "after";

  const rigth = document.createElement("div");
  rigth.className = "rigth";

  const left = document.createElement("div");
  left.className = "left";

  const title = document.createElement("h1");
  title.textContent = "BIENVENU AU GOURMET ROYAL ";

  const text = document.createElement("p");
  text.textContent =
    "L’ÉVEIL DES SENS DANS UN ÉCRIN DE LUMIÈRE. UNE ATMOSPHÈRE FEUTRÉE POUR VOS PLUS BEAUX INSTANTS. LE PARTAGE AU CŒUR D'UNE CUISINE D'EXCEPTION. L'ÉLÉGANCE D'UN LIEU OÙ LE TEMPS S'ARRÊTE. UNE IMMERSION TOTALE DANS LE RAFFINEMENT CULINAIRE. VOTRE NOUVELLE ESCALE AU CENTRE DE LA PASSION.";

  const button = document.createElement("button");
  button.id ="menuBtn";
  button.textContent = "Decouvrez notre Menu";

  // Ajouter les éléments à la card principale
  left.appendChild(title);
  left.appendChild(text);
  left.appendChild(button);

  after.appendChild(rigth);
  after.appendChild(left);
  content.appendChild(after);

}

