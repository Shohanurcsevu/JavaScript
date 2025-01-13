
    // Customer and order details
    const customerName = "Alice Johnson";
    const items = [
      { name: "Laptop", price: 50000, quantity: 1 },
      { name: "Headphones", price: 2000, quantity: 2 },
      { name: "Mouse", price: 1000, quantity: 1 },
    ];
    const taxRate = 0.15; // 15% tax

    // Calculate subtotal, tax, and total
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = subtotal * taxRate;
    const total = subtotal + tax;

    // Generate HTML for items
    const itemsHTML = items
      .map(
        (item) =>
          `<div><span>${item.name} (x${item.quantity})</span><span>$${(item.price * item.quantity).toFixed(2)}</span></div>`
      )
      .join("");

    // Generate HTML for invoice
    const invoiceHTML = `
      <div class="customer-name"><strong>Invoice for:</strong> ${customerName}</div>
      <div class="items">
        <h3>Items Purchased:</h3>
        ${itemsHTML}
      </div>
      <div class="summary">
        <div><span>Subtotal:</span><span>$${subtotal.toFixed(2)}</span></div>
        <div><span>Tax (15%):</span><span>$${tax.toFixed(2)}</span></div>
        <div class="total"><span>Total:</span><span>$${total.toFixed(2)}</span></div>
      </div>
      <div class="thank-you">Thank you for shopping with us!</div>
    `;

    // Render invoice into the DOM
    document.getElementById("invoice-content").innerHTML = invoiceHTML;