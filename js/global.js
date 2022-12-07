
// Minicart
const editCar = () => {
    const modalContainer = document.getElementById("modal-container");
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito.</h1>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "X";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    })

    modalHeader.append(modalbutton);
    const carrito = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
    carrito.forEach((zapato) => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
      <img src="${zapato.img}">
      <h3>${zapato.nombre}</h3>
      <p>${zapato.precio} $</p>
    `;

        modalContainer.append(carritoContent);

        let quitar = document.createElement("div")

        quitar.innerText = "❌";
        quitar.className = "quitar-product";
        carritoContent.append(quitar);
        quitar.addEventListener("click", () => {
            console.log("cart")
            cart = carrito.filter((cart) => cart.id !== zapato.id);
            console.log("cart", cart)
            localStorage.setItem("cart", JSON.stringify(cart))
            editCar();
        });

    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `total a pagar: ${total} $`;
    modalContainer.append(totalBuying);
};



verCarrito.addEventListener("click", editCar);
