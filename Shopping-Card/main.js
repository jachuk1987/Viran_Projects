const CART_KEY = "shoppingCart";

function loadCart() {
    const cart = localStorage.getItem(CART_KEY);
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(product) {
    const cart = loadCart();
    const existing = cart.find(item => item.name === product.name);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    saveCart(cart);
    alert(product.name + " added to cart!");
    updateCartCounter();
}

function updateCartCounter() {
    const cart = loadCart();
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    const counter = document.getElementById("cart-counter");
    if (counter) {
        counter.textContent = totalQty;
    }
}

function renderCartItems() {
    const cart = loadCart();
    const container = document.getElementById("cart-items");
    const totalContainer = document.getElementById("cart-total");
    if (!container) return;

    container.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <span>${item.name}</span>
            <span>Qty: <input type="number" min="1" value="${item.qty}" data-index="${index}" class="qty-input" /></span>
            <span>$ ${(item.price * item.qty).toFixed(2)}</span>
            <button data-index="${index}" class="remove-btn">Remove</button>
        `;
        container.appendChild(div);
        total += item.price * item.qty;
    });

    totalContainer.textContent = "Total: $ " + total.toFixed(2);
}

function setupCartEvents() {
    document.addEventListener("input", function (e) {
        if (e.target.classList.contains("qty-input")) {
            const cart = loadCart();
            const index = parseInt(e.target.dataset.index);
            cart[index].qty = parseInt(e.target.value);
            saveCart(cart);
            renderCartItems();
        }
    });

    document.addEventListener("click", function (e) {
        if (e.target.classList.contains("remove-btn")) {
            const cart = loadCart();
            const index = parseInt(e.target.dataset.index);
            cart.splice(index, 1);
            saveCart(cart);
            renderCartItems();
            updateCartCounter();
        }
    });
}

function setupProductFilters() {
    const searchBar = document.getElementById("searchBar");
    const categoryFilter = document.getElementById("categoryFilter");
    const minPrice = document.getElementById("minPrice");
    const maxPrice = document.getElementById("maxPrice");
    const cards = document.querySelectorAll(".product-card");
    const noResults = document.getElementById("noResults");

    const uniqueCategories = new Set();
    cards.forEach(card => uniqueCategories.add(card.dataset.category));
    uniqueCategories.forEach(cat => {
        const option = document.createElement("option");
        option.value = cat;
        option.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
        categoryFilter.appendChild(option);
    });

    function filterProducts() {
        const search = searchBar.value.toLowerCase();
        const category = categoryFilter.value;
        const min = parseFloat(minPrice.value) || 0;
        const max = parseFloat(maxPrice.value) || Infinity;

        let anyVisible = false;

        cards.forEach(card => {
            const name = card.dataset.name.toLowerCase();
            const cat = card.dataset.category;
            const price = parseFloat(card.querySelector("p").textContent.replace("$", ""));

            const matchSearch = name.includes(search);
            const matchCategory = category === "all" || cat === category;
            const matchPrice = price >= min && price <= max;

            const visible = matchSearch && matchCategory && matchPrice;
            card.style.display = visible ? "block" : "none";
            if (visible) anyVisible = true;
        });

        noResults.style.display = anyVisible ? "none" : "block";
    }

    searchBar?.addEventListener("input", filterProducts);
    categoryFilter?.addEventListener("change", filterProducts);
    minPrice?.addEventListener("input", filterProducts);
    maxPrice?.addEventListener("input", filterProducts);
}

document.addEventListener("DOMContentLoaded", () => {
    updateCartCounter();
    renderCartItems();
    setupCartEvents();
    setupProductFilters();
});
