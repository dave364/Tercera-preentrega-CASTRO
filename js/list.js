var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var anuncioParam = urlParams.get('marca');
console.log("anuncioParam", anuncioParam)

/*{ 
    status: 200,
    response2: { 
        zapatos: {
            converse : [
                {
                    id: 1,
                    nombre: "Converse clasicos",
                    precio: 1000,
                    img:"./img/converseclasicos.jpg"
                },
                {
                    id: 2,
                    nombre: "Converse modernos",
                    precio: 2000,
                    img:
                        "./img/conversemodernos.jpg",
                }
            ]
            vanz : [
                {
                    id: 3,
                    nombre: "Vanz clasicos",
                    precio: 1600,
                    img:
                        "./img/vanzclasicos.jpg",
                },
                {
                    id: 4,
                    nombre: "Vanz modernos",
                    precio: 3200,
                    img:
                        "./img/vanzmoderno.jpg",
                }
            ]
            pocholin : [
                {
                    id: 5,
                    nombre: "Pocholin clasicos",
                    precio: 2000,
                    img:
                        "./img/pocholinclasicos.jpg",
                },
                {
                    id: 6,
                    nombre: "Pocholin modernos",
                    precio: 4000,
                    img:
                        "./img/pocholinmoderno.jpg",
                }
            ]
            nike : [
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
                }
            ]
        } 
    }
} 

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
        id: 3,
        nombre: "Vanz clasicos",
        precio: 1600,
        img:
            "./img/vanzclasicos.jpg",
    },
    {
        id: 4,
        nombre: "Vanz modernos",
        precio: 3200,
        img:
            "./img/vanzmoderno.jpg",
    },
];
const pocholin = [
    {
        id: 5,
        nombre: "Pocholin clasicos",
        precio: 2000,
        img:
            "./img/pocholinclasicos.jpg",
    },
    {
        id: 6,
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
    converse: converse,
    vanz: vanz,
    pocholin: pocholin,
    nike: nike,
}*/
const shopcontent = document.getElementById("shopContent");

let carrito = [];

const url="https://pastebin.com/raw/j7rGCK4h";
fetch(url,
{    
    //mode: 'no-cors', // no-cors, *cors, same-origin
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
}).then(
    response=>{
        console.log(response);
        
    }
    );  

if (!zapatos.anuncioParam) {
    zapatos[anuncioParam].forEach((zapato) => {
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

        compra.addEventListener("click", () => {
            carrito = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []

            carrito.push({
                id: zapato.id,
                img: zapato.img,
                nombre: zapato.nombre,
                precio: zapato.precio,
            });
            localStorage.setItem("cart", JSON.stringify(carrito))
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Agregado',
                showConfirmButton: false,
                timer: 1500
              })
        })

    });
} else {

}


