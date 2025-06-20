let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to localStorage
  alert(`${productName} has been added to your cart!`);
}

function removeFromCart(index) {
  cart.splice(index, 1); // Remove item at the specified index
  localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
  updateCart(); // Refresh the cart display
}

function updateCart() {
  const cartList = document.getElementById('cart-list');
  const cartSubtotal = document.getElementById('cart-subtotal'); // Element for subtotal

  if (cartList) {
    cartList.innerHTML = '';
    let subtotal = 0;

    cart.forEach((item, index) => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - $${item.price}`;

      // Create "Remove" button
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.onclick = () => removeFromCart(index); // Attach remove functionality

      li.appendChild(removeButton); // Add button to the list item
      cartList.appendChild(li);

      subtotal += item.price; // Calculate subtotal
    });

    if (cartSubtotal) {
      cartSubtotal.textContent = `Subtotal: $${subtotal.toFixed(2)}`; // Display subtotal
    }
  }
}

// Call updateCart on the cart page to display the cart items and subtotal
document.addEventListener('DOMContentLoaded', () => {
  updateCart();
});