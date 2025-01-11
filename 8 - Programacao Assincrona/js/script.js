// 1 - setTimeout
console.log("---------- setTimeout ----------");

console.log("Ainda nao executou");

// setTimeout(function () {
//   console.log("Requisicao assincrona");
// }, 2000);

console.log("Ainda nao executou 2");

// 2 - setInterval
console.log("---------- setInterval ----------");

console.log("Ainda nao comecou");

// setInterval(function(){
//     console.log("Intervalo assincrono")
// }, 3000)

console.log("Ainda nao comecou");

// 3 - Promises
console.log("---------- Promises ----------");

const promessa = Promise.resolve(5 + 5);

console.log("Algum codigo");

promessa
  .then((value) => {
    console.log(`A soma é ${value}`);
    return value;
  })
  .then((value) => value - 1)
  .then((value) => console.log(`Agora é ${value}`));

console.log("Outro codigo");

// 4 - Tratando erros nas Promises
console.log("---------- Tratando erros nas Promises ----------");

Promise.resolve(4 * "asda")
  .then((n) => {
    if (Number.isNaN(n)) {
      throw new Error("Valores invalidos");
    }
  })
  .catch((err) => {
    console.log(`Um erro ocorreu: ${err}`);
  });

// 5 - Rejeitando Promises
console.log("---------- Rejeitando Promises ----------");

function checkNumber(n) {
  return new Promise((resolve, reject) => {
    if (n > 10) {
      resolve(`O numero é maior que 10`);
    } else {
      reject(new Error("Numero muito baixo"));
    }
  });
}

const a = checkNumber(20);
const b = checkNumber(10);

a.then((v) => console.log(`O resultado é ${v}`)).catch((err) =>
  console.log(`Um erro ocorreu: ${err}`)
);

b.then((v) => console.log(`O resultado é ${v}`)).catch((err) =>
  console.log(`Um erro ocorreu: ${err}`)
);

// 6 - Resolvendo varias Promises
console.log("---------- Resolvendo varias Promises ----------");

const p1 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve(10);
  }, 3000);
});

const p2 = Promise.resolve(10 + 10);

const p3 = new Promise((resolve, reject) => {
  if (30 > 10) {
    resolve(30);
  } else {
    reject("Erro");
  }
});

Promise.all([p1, p2, p3]).then((values) => console.log(values));

// 7 - Async Functions
console.log("---------- Async Functions ----------");

async function somarComDelay(a, b) {
  return a + b;
}

somarComDelay(2, 4).then((value) => {
  console.log(`O valor da soma é ${value}`);
});

// 8 - Instrucao await
console.log("---------- Instrucao await ----------");

function resolveComDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolveu a Promise");
    }, 2000);
  });
}

async function chamadaAsync() {
  console.log("Chamando a promise, e esperando o resultado");
  const result = await resolveComDelay();
  console.log(`O resultado chegou ${result}`);
}

chamadaAsync();

// 9 - Generators
console.log("---------- Generators ----------");

function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
