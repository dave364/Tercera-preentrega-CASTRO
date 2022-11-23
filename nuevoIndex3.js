var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var anuncioParam = urlParams.get('marca');
console.log("anuncioParam",anuncioParam)

const converse = [
    {
        id: 1,
        nombre: "Converse clasicos",
        precio: 1000,
        img:
        "./img/converseclasicos.jpg",
    },
    {
        id: 2,
        nombre: "Converse modernos",
        precio: 2000,
        img:
        "./img/conversemodernos.jpg",
    },
];
const vanz = [
    {
        id: 1,
        nombre: "Vanz clasicos",
        precio: 1600,
        img:
        "./img/vanzclasicos.jpg",
    },
    {
        id: 2,
        nombre: "Vanz modernos",
        precio: 3200,
        img:
        "./img/vanzmoderno.jpg",
    },  
];
const pocholin = [
    {
        id: 1,
        nombre: "Pocholin clasicos",
        precio: 2000,
        img:
        "./img/pocholinclasicos.jpg",
    },
    {
        id: 2,
        nombre: "Pocholin modernos",
        precio: 4000,
        img:
        "./img/pocholinmoderno.jpg",
    },
];
const nike = [
    {
        id: 1,
        nombre: "Nike clasicos",
        precio: 1500,
        img:
        "./img/nikeclasicos.jpg",
    },
    {
        id: 2,
        nombre: "Nike modernos",
        precio: 3000,
        img:
        "./img/nikemoderno.jpg",
    },
];
const zapatos = {
    converse:converse,
    vanz:vanz,
    pocholin:pocholin,
    nike:nike,
}
const shopcontent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer =document.getElementById("modal-container");

let carrito = [];

if (!zapatos.anuncioParam) {
    zapatos[anuncioParam].forEach((zapato)=> {
        let content = document.createElement("div");
        content.className = "card";
         content.innerHTML = `  
         <img src="${zapato.img}"
         <h3>${zapato.nombre}</h3>
         <p>${zapato.precio} $</p>
         `;  
       shopcontent.append(content); 
      
       let compra = document.createElement("button")
       compra.innerText = "Comprar";
       compra.className = "compra";
      
       content.append(compra);
      
       compra.addEventListener("click", () =>{
          carrito.push({
              id : zapato.id,
              img: zapato.img,
              nombre: zapato.nombre,
              precio: zapato.precio,
          });
       })
      
      });
} else {
    console.log("nei")
}



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