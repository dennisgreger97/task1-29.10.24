const products = [
  {
    type: "t-shirt",
    price: 19,
    color: "green",
  },
  {
    type: "jeans",
    price: 27,
    color: "blue",
  },
  {
    type: "shirt",
    price: 32,
    color: "white",
  },
  {
    type: "jacket",
    price: 25,
    color: "grey",
  },
  {
    type: "shorts",
    price: 19,
    color: "yellow",
  },
  {
    type: "skirt",
    price: 18,
    color: "brown",
  },
  {
    type: "t-shirt",
    price: 5,
    color: "red",
  },
  {
    type: "jeans",
    price: 29,
    color: "black",
  },
];

const applyDiscount = (products, discount) => {
  const discountedProducts = [];

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const discountedPrice = product.price - (product.price * discount) / 100;
    discountedProducts.push({ ...product, price: discountedPrice });
  }
  return discountedProducts;
};

console.log(applyDiscount(products, 10));
console.log(products);
