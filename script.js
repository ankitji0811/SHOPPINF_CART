const products = [
  {
    id: 1,
    name: "Chocalate Cake",
    price: 99,
    image:
      "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "Finger Chips",
    price: 159,
    image:
      "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    name: "Pasta",
    price: 259,
    image:
      "https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    name: "Burger",
    price: 259,
    image:
      "https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    name: "Cold Coffe",
    price: 259,
    image:
      "https://images.pexels.com/photos/6895939/pexels-photo-6895939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    name: "Pasta",
    price: 259,
    image:
      "https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 7,
    name: "Finger Chips",
    price: 159,
    image:
      "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 8,
    name: "Chocalate Cake",
    price: 99,
    image:
      "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 9,
    name: "Burger",
    price: 259,
    image:
      "https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    name: "Cold Coffe",
    price: 259,
    image:
      "https://images.pexels.com/photos/6895939/pexels-photo-6895939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const container = document.querySelector(".container");

products.forEach((food) => {
  const product = document.createElement("div");
  product.classList.add("product");

  product.innerHTML = `
    <img src="${food.image}" alt="${food.name}"
    <div class="details">
    <div class="name">${food.name}</div>
    <div clas="price">${food.price}.00Rs</div>
    <button onclick="addToCart(${food.id})">Add To Cart</button>
    </div>
    `;
  container.appendChild(product);
});

const cartSection = document.querySelector(".cart");
cartSection.style.transform = "translateX(100%)";

const cartBtn = document.querySelector(".cart-logo");
const closeBtn = document.querySelector(".close");

closeBtn.addEventListener("click", () => {
  cartSection.style.transform = "translateX(100%)";
});
cartBtn.addEventListener("click", () => {
  cartSection.style.transform = "translateX(0)";
  updateCart();
});

const total = document.querySelector(".total");
let totalPrice = 0;
let cart = [];

function updateCart() {
  const cartItems = document.querySelector(".cart-items");
  cartItems.innerHTML = "";
  totalPrice = 0

  cart.forEach((item) => {
    const cartItem = document.createElement("li");

    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}"/>
       <div> <h4>${item.name}</h4>
        <p>${item.price}.00Rs</p></div>
        <button onclick="removeItem(${item.id})">Remove</button>`;

    cartItems.appendChild(cartItem);

    totalPrice = totalPrice + item.price;
  });

  total.textContent = `Total : ${totalPrice}.00Rs`;
}

const addBtn = document.querySelector(".product button");

function addToCart(id) {
  cartSection.style.transform = "translateX(0)";
  const product = products.find((p) => p.id === id);

  if (product) {
    cart.push(product);
    updateCart();
  }
}

function removeItem(id) {
  
 const removeitem = cart.find((item) => item.id !== id);

 if(removeItem){
  totalPrice = totalPrice - removeItem.price
 }

 cart = cart.filter((item ) => item.id !== id)

  updateCart();
}
