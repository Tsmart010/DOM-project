// Get quantity elements
const quantityElements = document.querySelectorAll(".quantity");

// Add event listeners for increment and decrement buttons
quantityElements.forEach((quantityElement) => {
  const decrementButton = quantityElement.querySelector(".decrement");
  const incrementButton = quantityElement.querySelector(".increment");
  const quantityValue = quantityElement.querySelector(".quantity-value");

  // Decrement button click event
  decrementButton.addEventListener("click", () => {
    let quantity = parseInt(quantityValue.textContent);
    if (quantity > 1) {
      quantity--;
      quantityValue.textContent = quantity;
      updateTotal();
    }
  });

  // Increment button click event
  incrementButton.addEventListener("click", () => {
    let quantity = parseInt(quantityValue.textContent);
    quantity++;
    quantityValue.textContent = quantity;
    updateTotal();
  });
});

// Update total price
function updateTotal() {
  const itemPrices = document.querySelectorAll(".item-info span:nth-child(2)");
  let totalPrice = 0;
  itemPrices.forEach((itemPrice) => {
    const price = parseFloat(itemPrice.textContent.replace("$", ""));
    const quantity = parseInt(
      itemPrice.parentElement.parentElement.querySelector(".quantity-value")
        .textContent
    );
    totalPrice += price * quantity;
  });
  document.getElementById("total-price").textContent = totalPrice.toFixed(2);
}
