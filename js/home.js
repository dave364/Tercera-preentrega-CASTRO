document.addEventListener("DOMContentLoaded", () => {
  // Cargar los datos desde el JSON
  fetch("./mangas.json")
    .then(response => {
      if (!response.ok) throw new Error("Error al cargar el archivo JSON");
      return response.json();
    })
    .then(data => {
      setupMangasLink(data.mangas);
    })
    .catch(error => console.error("Error:", error));
});

function setupMangasLink(mangas) {
  const mangasLink = document.getElementById("mangas-link");
  const mangasLink2 = document.getElementById("mangas-link2");
  const contentSection = document.querySelector(".content");
  const mangasContainer = document.getElementById("mangas-container");

  mangasLink.addEventListener("click", event => {
    event.preventDefault(); // Evita la recarga de página

    // Oculta el contenido del hero y muestra el contenedor de mangas
    contentSection.classList.add("hidden");
    mangasContainer.classList.add("visible");

    // Renderiza las cartas
    displayMangas(mangas);
  });

  mangasLink2.addEventListener("click", event => {
    event.preventDefault(); // Evita la recarga de página

    // Oculta el contenido del hero y muestra el contenedor de mangas
    contentSection.classList.add("hidden");
    mangasContainer.classList.add("visible");

    // Renderiza las cartas
    displayMangas(mangas);
  });
}



function displayMangas(mangas) {
  const mangasContainer = document.getElementById("mangas-container");
  mangasContainer.innerHTML = ""; // Limpia el contenido previo

  mangas.forEach((manga, index) => {
    const card = document.createElement("div");
    card.className = "manga-card";

    // Añade un retraso a cada carta
    card.style.animationDelay = `${index * 0.2}s`; // Cada carta se retrasa 0.2s más que la anterior

    card.innerHTML = `
      <img src="${manga.cover}" alt="${manga.title}" />
      <h3>${manga.title}</h3>
    `;

    mangasContainer.appendChild(card);
  });
}



/*
const zapatos = [
    {
        id: 1,
        nombre: "Converse",
        marca: "converse",
        img:
            "./img/converse.jpg",
    },
    { 
        id: 2,
        nombre: "Vanz",
        marca: "vanz",
        img:
            "./img/vanz.jpg",
    },
    {
        id: 3,
        nombre: "Pocholin",
        marca: "pocholin",
        img:
            "./img/pocholin.jpg",
    },
    {
        id: 4,
        nombre: "Nike",
        marca: "nike",
        img:
            "./img/nike.jpg",
    },
];*/


/*
const options = {
  method: "GET",
};

// Petición HTTP
fetch("https://demo5436660.mockable.io/menu", options)
  .then((response) => response.json())
  .then((zapatos) => {
    console.log(zapatos);
    const shopcontent = document.getElementById("shopContent");

    zapatos.menu.forEach((zapato) => {
      let content = document.createElement("div");
      content.className = "card";
      content.innerHTML = `  
           <img src="${zapato.img}"
           <h3>${zapato.nombre}</h3>
           <p></p>
           `;
      shopcontent.append(content);

      let compra = document.createElement("button");
      compra.innerText = "Seleccionar";
      compra.className = "compra";

      content.append(compra);

      compra.addEventListener("click", () => {
        window.location.href = `zapatos.html?marca=${zapato.marca}`;
      });
    });
  });
*/