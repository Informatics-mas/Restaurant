import "./styles.css";

const fonts = ["Arial, sans-serif", "Georgia, serif", "Courier New, monospace", "Comic Sans MS, cursive"];

  function changeFont() {
    const randomIndex = Math.floor(Math.random() * fonts.length);
    document.body.style.fontFamily = fonts[randomIndex];
  }

  // Changer toutes les 2 secondes
  setInterval(changeFont, 5000);

import loadHome from "./home.js";

loadHome();
