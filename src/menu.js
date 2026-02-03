export function loadmenu() {
  const elements = [
    { text: "Menu 1", desc: "Tartare de Saint-Jacques, Caviar et Fleurs", color: "red", class: "one" },
    { text: "Menu 2", desc: "Filet de Bœuf Rossini, Sauce Périgueux", color: "blue", class: "two" },
    { text: "Menu 3", desc: "Pavé de Bar Rôti, Sauce Vierge et Fenouil", color: "green", class: "three" },
    { text: "Menu 4", desc: "Sphère Chocolat Noir, Cœur Coulant Fruits Rouges", color: "blue", class: "four" }
  ];


  const content = document.getElementById("content");
  content.innerHTML = "";

  const mot = document.createElement("h1");
  mot.textContent = "Voici nos menus, faites vos choix et bon appétit !";
  content.appendChild(mot)

  const after = document.createElement("div");
  after.className = "afters";

  elements.forEach(el => {
    const div = document.createElement("div");
    div.className = el.class;

    // sub div 1 : titre
    const sub1 = document.createElement("div");
    sub1.className = "sub title";

    // sub div 2 : description différente
    const sub2 = document.createElement("div");
    sub2.className = "sub desc";
    sub2.textContent = el.desc;

    // même bouton pour tous
    const button = document.createElement("button");
    button.className = "btn";
    button.textContent = "Reserve-Now";

    div.appendChild(sub1);
    div.appendChild(sub2);
    sub2.appendChild(button);

    after.appendChild(div);
  });


  content.appendChild(after);


}

