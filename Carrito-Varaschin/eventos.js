document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar los botones para agregar, restar y eliminar productos
    const addButtons = document.querySelectorAll(".add-btn");
    const subtractButtons = document.querySelectorAll(".subtract-btn");
    const removeButtons = document.querySelectorAll(".remove-btn");
    const comprarBtn = document.getElementById("comprar-btn");
    addButtons.forEach(btn => {
      btn.addEventListener("click", function() {
        // Incrementar la cantidad del producto
        const quantityElement = this.parentElement.querySelector(".item-quantity");
        let quantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = quantity + 1;
        updateTotal();
      });
    });
    subtractButtons.forEach(btn => {
      btn.addEventListener("click", function() {
        // Decrementar la cantidad del producto, pero no menor a 1
        const quantityElement = this.parentElement.querySelector(".item-quantity");
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
          quantityElement.textContent = quantity - 1;
          updateTotal();
        }
      });
    });
    removeButtons.forEach(btn => {
      btn.addEventListener("click", function() {
        // Mostrar un mensaje de confirmación antes de eliminar el producto
        if (confirmDelete()) {
          // Eliminar el elemento del carrito
          const cartItem = this.parentElement;
          cartItem.remove();
          updateTotal();
        }
      });
    });
    function handleComprarClick() {
      // Ocultar los productos en el carrito
      const cartItems = document.querySelectorAll(".cart-item");
      cartItems.forEach(item => {
        item.style.display = "none";
      });
  
      // Mostrar mensaje de agradecimiento
      const main = document.querySelector(".main");
      const graciasMensaje = document.createElement("p");
      graciasMensaje.textContent = "¡Gracias por comprar en Patincho!";
      graciasMensaje.classList.add("gracias-mensaje");
      main.appendChild(graciasMensaje);
    }
    comprarBtn.addEventListener("click", handleComprarClick);
  
    // Función para mostrar un mensaje de confirmación al eliminar un elemento del carrito
    function confirmDelete() {
      return confirm("¿Estás seguro de que deseas eliminar este producto?");
    }
  
    // Función para calcular el total de la compra en el carrito
    function calculateTotal() {
      const cartItems = document.querySelectorAll(".cart-item");
      let total = 0;
      cartItems.forEach(item => {
        const price = parseFloat(item.querySelector(".item-total").textContent.replace("$", ""));
        total += price;
      });
      return total.toFixed(2);
    }
  
    // Función para actualizar el total mostrado en la página
    function updateTotal() {
      const totalAmount = document.querySelector(".total-amount");
      const total = calculateTotal();
      totalAmount.textContent = "$" + total;
    }
  
    // Función para agregar un nuevo producto al carrito
    function addNewItem(productName, price) {
      const cart = document.querySelector(".cart");
    }
});