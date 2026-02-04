import "./styles.css";

const fonts = ["Arial, sans-serif", "Georgia, serif", "Courier New, monospace", "Comic Sans MS, cursive"];

function changeFont() {
  const randomIndex = Math.floor(Math.random() * fonts.length);
  document.body.style.fontFamily = fonts[randomIndex];
}

// Changer toutes les 2 secondes
setInterval(changeFont, 15000);

import { loadHome } from "./home.js";
import { loadmenu } from "./menu.js";
import { loadabout } from "./about.js";

document.getElementById("homeBtn")
  .addEventListener("click", loadHome);

document.getElementById("menuBtn")
  .addEventListener("click", loadmenu);

document.getElementById("aboutBtn")
  .addEventListener("click", loadabout);

// page par défaut
loadHome();