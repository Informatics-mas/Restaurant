export function loadabout() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const texts = document.createElement("h1");
  texts.textContent =  "Apropos de Nous !";

  const size = document.createElement("div");
  size.className = "size";
  
  const img = document.createElement("div");
  img.className = "img";

  const txt = document.createElement("div");
  txt.className = "txt";

  const cnt = document.createElement("p");
  cnt.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, debitis beatae rem atque cupiditate nostrum ab omnis exercitationem, distinctio officia aut! Voluptas, sequi voluptates facilis repudiandae corrupti tempore aut placeat. Eos asperiores nostrum commodi ratione consequatur inventore doloremque beatae soluta voluptas et culpa dolorem enim esse amet numquam natus architecto ducimus accusamus illo, tenetur sapiente? Id tempore molestiae provident culpa quod beatae unde consequatur? Ipsum officiis quidem repellat numquam vero eos cumque quibusdam aliquam quos sed explicabo voluptas, obcaecati omnis similique doloribus adipisci magni optio corporis eligendi ad enim! Maiores nostrum ea quos commodi aperiam sit error tenetur deserunt ab at quibusdam ullam beatae, exercitationem praesentium soluta. Recusandae provident neque autem assumenda impedit. Culpa nisi neque quis laborum illo dolore fugit iste nesciunt magni exercitationem! Libero sunt voluptatibus reiciendis itaque ex modi veniam distinctio, dolorem animi quasi, quibusdam cupiditate ullam accusamus amet omnis quo. Iste odio, nulla laborum cupiditate nihil aspernatur.";

  const btn = document.createElement("button");
  btn.id  = "menuBtn"
  btn.textContent = "voir le menu";

  txt.appendChild(cnt);
  txt.appendChild(btn);
  size.appendChild(img);
  size.appendChild(txt);

  content.appendChild(texts);
  content.appendChild(size);
}
