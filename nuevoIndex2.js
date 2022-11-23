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
        marca : "pocholin",
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
];

const shopcontent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer =document.getElementById("modal-container");

let carrito = [];

zapatos.forEach((zapato)=> {
  let content = document.createElement("div");
  content.className = "card";
   content.innerHTML = `  
   <img src="${zapato.img}"
   <h3>${zapato.nombre}</h3>
   <p></p>
   `;  
 shopcontent.append(content); 

 let compra = document.createElement("button")
 compra.innerText = "Comprar";
 compra.className = "compra";

 content.append(compra);

 compra.addEventListener("click", () =>{
    window.location.href = `zapatos.html?marca=${zapato.marca}`
 })

});

verCarrito.addEventListener("click", () => {

    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito.</h1>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "X";
    modalbutton.className = "modal-header-button";

    modalHeader.append(modalbutton);

    carrito.forEach((zapato) => {
    let carritoContent = document.createElement("div")
    carritoContent.className = "modal-content"
    carritoContent.innerHTML = `
      <img src="${zapato.img}">
      <h3>${zapato.nombre}</h3>
      <p>${zapato.precio} $</p>
    `;

    modalContainer.append(carritoContent);
 });

 const total = carrito.reduce((acc, el) => acc + el.precio, 0);

 const totalBuying = document.createElement("div")
 totalBuying.className = "total-content"
 totalBuying.innerHTML = `total a pagar: ${total} $`;
 modalContainer.append(totalBuying);
});