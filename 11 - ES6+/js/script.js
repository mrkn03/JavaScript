// 1 - Var, let e const
console.log("---------- var, let e const ----------");

var x = 10;
var y = 15;

if (y > 10) {
  var x = 5;
  console.log(`var x = ${x}`);
}

console.log(x);

let a = 10;
let b = 15;

if (b > 10) {
  let a = 5;
  console.log(`let a = ${a}`);
}

console.log(a);

// 2 - Arrow Functions
console.log("---------- Arrow Functions ----------");
const sum = function (a, b) {
  return a + b;
};

const arrowSum = (a, b) => a + b;

console.log(sum(5, 5));

console.log(arrowSum(5, 5));

const greeting = (name) => {
  if (name) {
    return `Hello ${name}`;
  } else {
    return `Hello`;
  }
};

console.log(greeting("Marcos"));
console.log(greeting());

const user = {
  name: "Marcos",
  sayUserName() {
    setTimeout(function () {
      console.log(this);
      console.log(`Username: ${this.name}`);
    }, 1000);
  },
  sayUserNameArrow() {
    setTimeout(() => {
      console.log(this);
      console.log(`Username: ${this.name}`);
    }, 2000);
  },
};

// user.sayUserName()

// user.sayUserNameArrow()

// 3 - Filter
console.log("---------- Filter ----------");
const arr = [1, 2, 3, 4, 5, 6];

const highNumbers = arr.filter((n) => {
  if (n >= 3) {
    return n;
  }
});

console.log(highNumbers);

const users = [
  { name: "Marcos", available: true },
  { name: "Junior", available: false },
  { name: "Augusto", available: true },
  { name: "Maria", available: false },
  { name: "Ana", available: true },
];

const availableUsers = users.filter((user) => user.available);

console.log(availableUsers);

// 4 - Map
console.log("---------- Map ----------");

const products = [
  { name: "Camisa", price: 10.99, category: "Roupas" },
  { name: "Chaleira Eletrica", price: 150, category: "Eletro" },
  { name: "Fogao", price: 499, category: "Eletro" },
  { name: "Calça Jeans", price: 87.99, category: "Roupas" },
];

products.map((product) => {
  if (product.category === "Roupas") {
    product.onSale = true;
  }
});

console.log(products);

// 5 - Template literals
console.log("---------- Template Literals ----------");

const userName = "Marcos";
const age = 21;

console.log(`O nome do usuario é ${userName} e a idade é ${age}`);

// 6 - Destructuring
console.log("---------- Destructuring ----------");

const fruits = ["Maçã", "Mamão", "Laranja"];

const [f1, f2, f3] = fruits;

console.log(f1, f2, f3);

const productDetails = {
  name: "Mouse",
  price: 39.99,
  category: "Periférico",
  color: "Cinza",
};

const { name: nameProduct, price, category, color } = productDetails;

console.log(
  `Nome do produto: ${nameProduct} \nPreço: R$${price} \nCategoria: ${category} \nCor: ${color}`
);

// 7 - Spread Operator
console.log("---------- Spread Operator ----------");

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];

console.log(a3);

const a4 = [0, ...a3, 7];

console.log(a4);

const carName = { name: "Gol" };
const carBrand = { brand: "VW" };
const otherInfos = { km: 1000000, price: 499999 };

const car = { ...carName, ...carBrand, ...otherInfos };

console.log(car);

// 8 - Classes
console.log("---------- Classes ----------");

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  productWithDiscount(discount) {
    return this.price * ((100 - discount) / 100);
  }
}

const shirt = new Product("Camisa gola v", 20);

console.log(shirt);

console.log(shirt.productWithDiscount(10));
console.log(shirt.productWithDiscount(15));

// 9 - Herança
console.log("---------- Herança ----------");

class ProductWithAttributes extends Product {
  constructor(name, price, colors) {
    super(name, price);
    this.colors = colors;
  }
  showColors() {
    console.log("As cores sao:");
    this.colors.forEach((color) => {
      console.log(color);
    });
  }
}

const hat = new ProductWithAttributes("Chapeu", 29.99, [
  "Preto",
  "Amarelo",
  "Vermelho",
]);

console.log(hat);
console.log(hat.name);
hat.showColors();
