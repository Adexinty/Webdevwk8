
const products = [
  {
    name: "Eco T-Shirts",
    price: 29.99,
    img: "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg"
  },
  {
    name: "Cotton Long Sleeves",
    price: 34.99,
    img: "https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg"
  },
  {
    name: "Women’s Clothing Set",
    price: 44.99,
    img: "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg"
  },
  {
    name: "Assorted Clothes",
    price: 49.99,
    img: "https://images.pexels.com/photos/6461325/pexels-photo-6461325.jpeg"
  },
  {
    name: "Eco Sneakers",
    price: 59.99,
    img: "https://images.pexels.com/photos/19090/pexels-photo.jpg"
  },
  {
    name: "Tote Bag",
    price: 39.99,
    img: "https://images.pexels.com/photos/525661/pexels-photo-525661.jpeg"
  }
];

const cart = [];

if (document.getElementById("product-grid")) {
  const grid = document.getElementById("product-grid");
  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "bg-white p-4 rounded shadow";
    card.innerHTML = `
      <img src="${p.img}" class="w-full h-48 object-cover rounded mb-2" alt="${p.name}" />
      <h3 class="font-medium text-lg">${p.name}</h3>
      <p class="text-gray-600">$${p.price}</p>
      <button class="add-to-cart bg-green-600 hover:bg-green-700 text-white mt-2 py-1 px-4 rounded" data-name="${p.name}" data-price="${p.price}">Add to Cart</button>
    `;
    grid.appendChild(card);
  });
}

document.addEventListener("click", e => {
  if (e.target.classList.contains("add-to-cart")) {
    const name = e.target.dataset.name;
    const price = parseFloat(e.target.dataset.price);
    cart.push({ name, price });
    updateCartCount();
  }

  if (e.target.id === "show-cart") {
    document.getElementById("cart-section").classList.remove("hidden");
    displayCartItems();
  }

  if (e.target.id === "close-cart") {
    document.getElementById("cart-section").classList.add("hidden");
  }

  if (e.target.id === "clear-cart") {
    cart.length = 0;
    updateCartCount();
    displayCartItems();
  }
});

function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
}

function displayCartItems() {
  const list = document.getElementById("cart-items");
  const total = document.getElementById("cart-total");
  list.innerHTML = "";
  let sum = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    list.appendChild(li);
    sum += item.price;
  });
  total.textContent = sum.toFixed(2);
}

if (document.getElementById("contact-form")) {
  document.getElementById("contact-form").addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const error = document.getElementById("form-error");

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (name && emailValid && message) {
      alert("Form submitted successfully!");
      document.getElementById("contact-form").reset();
      error.classList.add("hidden");
    } else {
      error.classList.remove("hidden");
    }
  });
