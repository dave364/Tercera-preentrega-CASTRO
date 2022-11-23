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
 compra.innerText = "Seleccionar";
 compra.className = "compra";

 content.append(compra);

 compra.addEventListener("click", () =>{
    window.location.href = `zapatos.html?marca=${zapato.marca}`
 })

});
