let store;

try {
  store = JSON.parse(localStorage.store);
} catch (e) {
  store = {};
}

store.save = function() {
  localStorage.store = JSON.stringify(this);
};

class ShoppingCart {
  constructor() {
    this.cart = store.cart || [];
    this.addListener();
    this.render();
  }

  addListener() {
    let buyBtn = document.querySelector(".buy-button");

    if (!buyBtn) {
      return;
    }

    buyBtn.addEventListener("click", e => {
      let productEl = e.target.closest(".product");
      let name = productEl.querySelector("h1").innerHTML;
      let price = productEl.querySelector(".product-price span").innerHTML / 1;
      console.log(name, price);
      this.add(name, price);
    });
  }

  add(name, price) {
    this.cart.push({
      name,
      price
    });
    console.log(this.cart);

    this.save();
  }

  save() {
    store.cart = this.cart;
    store.save();
  }

  load() {
    // hitta class="cart-body"
    // skriv ut från localstorage
  }

  render(cartEl = document.querySelector(".cart-body")) {
    if (!cartEl) {
      return;
    }

    if (!this.cart.length) {
      cartEl.innerHTML = `
        <p>Your cart is empty</p>
        `;
      return;
    }

    console.log(this.cart); // Här avslutade Paula

    cartEl.innerHTML = `
      <p>HAlluuuuuuu, här kan man skriva saker</p>  
        
      `;
  }
}

new ShoppingCart();
