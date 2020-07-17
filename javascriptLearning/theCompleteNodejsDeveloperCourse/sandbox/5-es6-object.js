// Object property shorthand
const name = "Allen";
const userAge = 30;

const user = {
  name,
  age: userAge,
  location: "Bangkok",
};

console.log(user);

// Object destructuring
const product = {
  label: "Red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
};

// const label = product.label;
// const stock = product.stock;

// const { label: productLabel, stock, rating = 5, score } = product;
// console.log(productLabel, stock);
// console.log(score);
// console.log(rating);

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction("order", product);
