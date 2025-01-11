// 1 - Criando uma função
console.log(
  "-------------------------------------------Criando uma função---------------------------------------"
);

function minhaFuncao() {
  console.log("Minha primeira função");
}

minhaFuncao();

const minhaFuncaoEmVariavel = function () {
  console.log("Minha primeira função em variável");
};

minhaFuncaoEmVariavel();

function funcaoComParametro(txt) {
  console.log(txt);
}

funcaoComParametro("Função com parâmetro");

// 2 - return
console.log("---------------Return--------------------------------");

const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(n1, n2) {
  return n1 + n2;
}

const resultado = soma(a, b);
console.log(resultado);

console.log(soma(c, d));

// 3 - Escopo das funcoes
console.log("---------- Escopo das funcoes ----------");

let y = 10;

function testandoEscopo() {
  let y = 20;
  console.log(`Y dentro da funcao é: ${y}`);
}

testandoEscopo();

console.log(`Y fora da funcao é: ${y}`);

// 4 - Escopo aninhado (bested scopes)
console.log("---------- Escopo aninhado ----------");

let m = 10;

function escopoAninhado() {
  let m = 20;

  if (true) {
    let m = 30;

    if (true) {
      let m = 40;

      console.log(m);
    }

    console.log(m);
  }

  console.log(m);
}

escopoAninhado();

console.log(m);

// 5 - Arrow funtion
console.log("---------- Arrow function ----------");

const testeArrow = () => {
  console.log("Esta é uma arrow function");
};

testeArrow();

const parOuImpar = (n) => {
  if (n % 2 === 0) {
    console.log("par");
    return;
  }
  console.log("impar");
};

parOuImpar(5);
parOuImpar(10);

// 6 - Mais sobre arrow function
console.log("---------- Mais sobre arrow function ----------");
const raizQuadrada = (x) => {
  return x * x;
};

console.log(raizQuadrada(4));

const raizQuadrada2 = (x) => x * x;

console.log(raizQuadrada2(12));

const helloWorld = () => console.log("Hello world");

helloWorld();

// 7 - Argumentos opcionais
console.log("---------- Argumentos Opcionais ----------");

const multiplicacao = function (m, n) {
  if (n === undefined) {
    return m * 2;
  } else {
    return m * n;
  }
};

console.log(multiplicacao(2));

console.log(multiplicacao(10, 2));

const greeting = (name) => {
  if (!name) {
    console.log("Ola");
    return;
  }

  console.log(`Ola ${name}`);
};

greeting();

greeting("Marcos");

// 8 - Argumentos com valor default
console.log("---------- Argumentos com valor default ----------");

const customGreeting = (name, greet = "Ola") => {
  return `${greet}, ${name}`;
};

console.log(customGreeting());

console.log(customGreeting("Marcos", "Bom dia"));

console.log(customGreeting("Marcos"));

const repeatText = (text, repeat = 2) => {
  for (let i = 0; i < repeat; i++) {
    console.log(text);
  }
};

repeatText("Testando");
repeatText("Agora repete 5 vezes", 5);

// 9 - Closure
console.log("---------- Closure ----------");

function someFunction() {
  let txt = "Alguma coisa";

  function display() {
    console.log(txt);
  }

  display();
}

someFunction();

// 10 - Mais sobre Closure
console.log("---------- Mais sobre Closure ----------");

const multiplicacaoClosure = (n) => {
  return (m) => {
    return n * m;
  };
};

const c1 = multiplicacaoClosure(5);

const c2 = multiplicacaoClosure(10);

console.log(c1);

console.log(c2);

console.log(c1(5));

console.log(c2(10));

// 11 - Recursão
console.log("---------- Recursão ----------");

const untilTen = (n, m) => {
  if (n < 10) {
    console.log("A funcao parou de executar");
  } else {
    const x = n - m;

    console.log(x);

    untilTen(x, m);
  }
};

untilTen(100, 10);

function factorial(x) {
  if (x === 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}

const num = 6;

const result = factorial(num);

console.log(`O fatorial do numero ${num} é ${result}`);
