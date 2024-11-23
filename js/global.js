/*const editCar = () => {
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

*/

// JavaScript para manejar el cambio de clases
document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
  
    navbarToggler.addEventListener("click", function () {
      // Cambiar la clase cuando el menú está expandido o colapsado
      navbarToggler.classList.toggle("collapsed");
    });
  });
  
    

  // Seleccionamos todas las opciones de menú
  const menuItems = document.querySelectorAll('.navbar-nav .nav-link');
  
  // Seleccionamos el botón de hamburguesa
  const navbarCollapse = document.getElementById('navbarSupportedContent');
  const navbarToggler = document.querySelector('.navbar-toggler');

  // Al hacer clic en cualquier opción del menú, colapsamos el menú y restauramos el icono de hamburguesa
  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      const bootstrapCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false // No activar el toggle, solo cerrar
      });
      bootstrapCollapse.hide();

      // Aseguramos que el icono de hamburguesa vuelva a su estado original
      navbarToggler.setAttribute('aria-expanded', 'false');
      navbarToggler.classList.add('collapsed');
    });
  });


  document.addEventListener("DOMContentLoaded", () => {
    const mangasLink = document.getElementById("mangas-link");
    const hero = document.querySelector(".hero");
    const mobileMediaQuery = window.matchMedia("(max-width: 767px)");
  
    // Función para manejar el clic en "Mangas"
    const handleMangasClick = (e) => {
      e.preventDefault(); // Prevenir comportamiento por defecto del enlace
  
      if (mobileMediaQuery.matches) { // Solo para móviles
        hero.style.transition = "all 1s ease-in-out"; // Añadir transición suave
        hero.style.height = "800vh"; // Ajustar la altura de .hero
        hero.classList.add("hero-expanded"); // Añadir clase para los pseudoelementos
      }
    };
  
    // Función para manejar los cambios de resolución
    const handleResolutionChange = () => {
      if (mobileMediaQuery.matches) {
        // Si estamos en móvil, habilitar comportamiento móvil
        hero.style.transition = ""; // Restablecer transición
        hero.style.height = ""; // Asegurar altura móvil
      } else {
        // Si estamos en escritorio, limpiar estilos móviles
        hero.style.transition = ""; // Eliminar transición
        hero.style.height = ""; // Restaurar altura original
        hero.classList.remove("hero-expanded"); // Eliminar clases móviles
      }
    };
  
    // Agregar el evento de clic al enlace "Mangas"
    mangasLink.addEventListener("click", handleMangasClick);
  
    // Escuchar cambios en el tamaño de la pantalla
    mobileMediaQuery.addEventListener("change", handleResolutionChange);
  
    // Ejecutar al cargar la página para aplicar la configuración inicial
    handleResolutionChange();
  });
  
  
  
  







