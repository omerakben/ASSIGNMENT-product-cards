function createProductHTML(product) {
  return `
    <div class="col-md-4 mb-4">
      <div class="card">
        <div class="card-header">${product.title}</div>
        <div class="card-image">
          <img src="${product.image}" class="card-img-top" alt="${product.title}">
          ${product.availability === "Not Available" ? '<img src="./images/soldOut.png" class="sold-out-image" alt="Sold Out">' : ''}
        </div>
        <div class="card-body">
          <p class="text-justify">${product.description}</p>
          <p class="availability ${product.availability === "Not Available" ? 'availability-not-available' : 'availability-available'}">${product.availability}</p>
          <div class="specs">
            <h5>Specifications</h5>
            <p><strong>Size:</strong> ${product.size}</p>
            <p><strong>Weight:</strong> ${product.weight}</p>
          </div>
          <div class="pricing">
            <h5>Pricing</h5>
            <p><strong>Single:</strong> ${product.prices.single}</p>
            <p><strong>Bulk:</strong> ${product.prices.bulk}</p>
            <p><strong>Wholesale:</strong> ${product.prices.wholesale}</p>
          </div>
          ${product.availability === "Available" ? '<button class="btn btn-primary">Buy Now</button>' : ''}
        </div>
        <div class="card-footer">Valid Until: ${product.validUntil}</div>
      </div>
    </div>
  `;
}

// Render
function renderProducts() {
  const container = document.getElementById("product-container");
  container.innerHTML = products.map(createProductHTML).join('');
}

// Call the render function
document.addEventListener("DOMContentLoaded", renderProducts);

// Click event listener
document.addEventListener("click", function (event) {
  if (event.target.matches(".btn.btn-primary")) {
    alert("Thank you for your purchase!");
  }
});

