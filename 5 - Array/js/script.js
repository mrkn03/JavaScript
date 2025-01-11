// 1 - Arrays
console.log("---------- Array ----------");

const list = [1, 2, 3, 4, 5];

console.log(list);
console.log(typeof list);

const itens = ["marcos", true, 3.1, []];

console.log(itens);

// 2 - Mais sobre arrays
console.log("---------- Mais sobre arrays ----------");
const arr = ["a", "b", "c", "d", "e"];

console.log(arr[1]);
console.log(arr[2]);
console.log(arr[6]);

// 3 - Propriedades
console.log("---------- Propriedades ----------");

const numbers = [5, 3, 4];

console.log(numbers.length);
console.log(numbers["length"]);

const myName = "Marcos";

console.log(myName.length);

// 4 - Metodos
console.log("---------- Metodos ----------");

const otherNumbers = [1, 2, 3];

const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);

const text = "algum texto";

console.log(text.toUpperCase());
console.log(typeof text.toUpperCase);
console.log(text.indexOf("g"));

// 5 - Objetos
console.log("---------- Objetos ----------");

const person = {
  name: "Marcos",
  age: 31,
  job: "Estagiario",
};

console.log(person);

console.log(person.job);

console.log(person.job.length);

console.log(typeof person);

// 6 - Criando e deletando propriedades
console.log("---------- Criando e deletando propriedades ----------");

const car = {
  engine: 2.0,
  brand: "VW",
  model: "Tiguan",
  km: 2000,
};

console.log(car);

car.doors = 4;

console.log(car);

delete car.km;

console.log(car);

// 7 - Mais sobre objetos
console.log("---------- Mais sobre objetos ----------");

const obj = {
  a: "teste",
  b: true,
};

console.log(obj instanceof Object);

const obj2 = {
  c: [],
};

Object.assign(obj2, obj);

console.log(obj2);

// 8 - Conhecendo melhor os objetos
console.log("---------- Conhecendo melhor os objetos ----------");

console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(car));

// 9 - Mutacao
console.log("---------- Mutacao ----------");

const a = {
  name: "marcos",
};

const b = a;

console.log(a);
console.log(b);

console.log(a === b);

a.age = 21;

console.log(a);
console.log(b);

delete b.age;

console.log(a);
console.log(b);

// 10 - Loops em arrays
console.log("---------- Loops em arrays ----------");

const users = ["Marcos", "Joao", "Pedro", "Miguel"];

for (let i = 0; i < users.length; i++) {
  console.log(`Listando o usuario: ${users[i]}`);
}

// 11 - metodos de arrays: push e pop
console.log("---------- Metodos de array: push e pop ----------");

const array = ["a", "b", "c"];

array.push("d");
console.log(array);
console.log(array.length);

array.pop();

console.log(array);

const itemRemovido = array.pop();

console.log(itemRemovido);
console.log(array);

array.push("z", "x", "y");
console.log(array);

// 12 - metodos de arrays: shift e unshift
console.log("---------- Metodos de array: shift e unshift ----------");

const letters = ["a", "b", "c"];

const letter = letters.shift();

console.log(letter);
console.log(letters);

letters.unshift("p", "q", "r");
letters.unshift("z");

console.log(letters);

// 13 - metodos de arrays: indexOf e lastIndexOf
console.log("---------- metodos de arrays: indexOf e lastIndexOf ----------");

const myElements = ["morango", "maca", "abacate", "pera", "abacate"];

console.log(myElements.indexOf("maca"));
console.log(myElements.indexOf("abacate"));

console.log(myElements[2]);
console.log(myElements[myElements.indexOf("abacate")]);

console.log(myElements.lastIndexOf("abacate"));

console.log(myElements.indexOf("mamao"));
console.log(myElements.lastIndexOf("mamao"));

// 14 - metodos de arrays: slice
console.log("---------- metodos de arrays: slice ----------");

const testeSlice = ["a", "b", "c", "d", "e", "f"];

const subArray = testeSlice.slice(2, 4);

console.log(subArray);
console.log(testeSlice);

const subArray2 = testeSlice.slice(2, 4 + 1);

console.log(subArray2);

const subArray3 = testeSlice.slice(10, 20);

console.log(subArray3);

const subArray4 = testeSlice.slice(2);

console.log(subArray4);

// 15 - metodos de arrays: foreach
console.log("---------- metodos de arrays: foreach ----------");

const nums = [1, 2, 3, 4, 5];
nums.forEach((numero) => {
  console.log(`O numero é ${numero}`);
});

const post = [
  {
    title: "Primeiro post",
    category: "PHP",
  },
  {
    title: "Segundo post",
    category: "JS",
  },
  {
    title: "Terceiro post",
    category: "JAVA",
  },
];

post.forEach((post) => {
  console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
});

// 16 - metodos de arrays: includes
console.log("---------- metodos de arrays: includes ----------");

const brands = ["BMW", "VW", "Fiat"];

console.log(brands.includes("Fiat"));

console.log(brands.includes("KIA"));

if (brands.includes("BMW")) {
  console.log("Há carros da marca BMW");
}

// 17 - metodos de arrays: reverse
console.log("---------- metodos de arrays: reverse ----------");

const reverseTest = [1, 2, 3, 4, 5];

reverseTest.reverse();

console.log(reverseTest);

// 18 - metodos de strings: trim
console.log("---------- Metodos de string: trim ----------");

const trimTest = "  testando \n  ";

console.log(trimTest);
console.log(trimTest.trim());

console.log(trimTest.length);
console.log(trimTest.trim().length);

// 19 - metodos de string: padStart
console.log("---------- Metodos de string: padStart ----------");

const testPadStart = "1";

const newNumber = testPadStart.padStart(4, "0");

console.log(testPadStart);
console.log(newNumber);

const testPadEnd = newNumber.padEnd(10, "0");

console.log(testPadEnd);

// 20 - metodos de string: split
console.log("---------- metodos de string: split ----------");
const frase = "O rato roeu a roupa do rei de roma";

const arrayDaFrase = frase.split(" ");

console.log(arrayDaFrase);

// 21 - metodos de string: Join
console.log("---------- Metodos de string: join ----------");

const fraseDeNovo = arrayDaFrase.join(" ");

console.log(fraseDeNovo);

const itensParaComprar = ["Mouse", "Teclado", "Monitor"];

const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}`;

console.log(fraseDeCompra);

// 22 - metodos de string: repeat
console.log("---------- Metodos de string: repeat ----------");

const palavra = "Testando ";

console.log(palavra.repeat(5));

// 23 - Rest Operator/Rest Parameters
console.log("---------- Rest Operator/Rest Parameters ----------");

const somaInfinita = (...args) => {
  let total = 0;

  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }

  return total;
};

console.log(somaInfinita(3, 34, 123, 32, 23, 23, 32, 12, 321));

// 24 - For of
console.log("---------- For of ----------");

const somaInfinita2 = (...args) => {
  let total = 0;

  for (num of args) {
    total += num;
  }

  return total;
};

console.log(
  somaInfinita2(2, 2, 1, 123, 1231, 23123, 123, 123, 12, 312, 31, 23, 123)
);

// 25 - Destructuring em Objetos
console.log("---------- Destructuring em Objetos ----------");

const userDetails = {
  firstName: "Marcos",
  lasName: "Fernandes",
  job: "Programador",
};

const { firstName, lasName, job } = userDetails;

console.log(firstName, lasName, job);

//Renomear variaveis

const { firstName: primeiroNome } = userDetails;

console.log(primeiroNome);

// 26 - Destructuring em Arrays
console.log("---------- Destructuring em Arrays ----------");

const myList = ["Aviao", "Submarino", "Carro"];

const [veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA, veiculoB, veiculoC);

// 27 - JSON
console.log("---------- JSON ----------");

const myJson =
  '{"name": "Marcos", "age": 21, "skills": ["JAVA", "JavaScript", "C"]}';

console.log(myJson);
console.log(typeof myJson);

// 28 - Conversao de JSON
console.log("---------- Conversao de JSON ----------");

// JSON para Objeto
const myObject = JSON.parse(myJson)

console.log(myObject)

console.log(myObject.name)

console.log(typeof myObject)

myObject.isOpenToWork = true

console.log(myObject)

// JSON invalido
const badJson = '{"name": Marcos, "age": 21}'

// const myBadJson = JSON.parse(myBadJson)

// Objeto para JSON
const myNewJson = JSON.stringify(myObject)

console.log(myNewJson)
console.log(typeof myNewJson)