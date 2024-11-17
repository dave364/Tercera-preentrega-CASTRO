const editCar = () => {
    const modalContainer = document.getElementById("modal-container");
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";

    // Cabecera del modal
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Carrito</h1>
    `;
    modalContainer.append(modalHeader);

    // Botón para cerrar el modal
    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "X";
    modalbutton.className = "modal-header-button";
    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });
    modalHeader.append(modalbutton);

    // Recuperar carrito desde localStorage
    const carrito = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
    if (carrito.length === 0) {
        // Mostrar mensaje si el carrito está vacío
        const emptyMessage = document.createElement("div");
        emptyMessage.className = "empty-cart";
        emptyMessage.innerText = "Tu carrito está vacío.";
        modalContainer.append(emptyMessage);
        return;
    }

    // Contenido del carrito
    carrito.forEach((zapato, index) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
            <img src="${zapato.img}" alt="${zapato.nombre}" />
            <h3>${zapato.nombre}</h3>
            <p>${zapato.precio} $</p>
        `;
        modalContainer.append(carritoContent);

        // Botón para quitar producto
        let quitar = document.createElement("button");
        quitar.innerText = "❌";
        quitar.className = "quitar-product";
        carritoContent.append(quitar);

        quitar.addEventListener("click", () => {
            const updatedCart = carrito.filter((_, i) => i !== index);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            editCar(); // Refrescar el carrito
        });
    });

    // Calcular y mostrar el total
    const total = carrito.reduce((acc, zapato) => acc + parseFloat(zapato.precio || 0), 0);
    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content";
    totalBuying.innerHTML = `Total a pagar: <strong>${total} $</strong>`;
    modalContainer.append(totalBuying);
};

// Evento para abrir el carrito
verCarrito.addEventListener("click", editCar);
