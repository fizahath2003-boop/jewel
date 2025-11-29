let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, image) {
    cart.push({ name, price, image });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
}

// Load cart on cart page
function loadCart() {
    let container = document.getElementById("cart-items");
    let total = 0;
    container.innerHTML = "";

    cart.forEach((item, index) => {
        total += item.price;
        container.innerHTML += `
            <div class="card" style="display:flex;gap:20px;padding:15px;">
                <img src="${item.image}" width="120">
                <div>
                    <h3>${item.name}</h3>
                    <p>₹${item.price}</p>
                    <button onclick="removeItem(${index})">Remove</button>
                </div>
            </div>`;
    });

    document.getElementById("total").innerText = total;
}

// remove item
function removeItem(i) {
    cart.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

// Payment
function payNow() {
    alert("Payment Successful!");
    localStorage.removeItem("cart");
    window.location.href = "index.html";
}
