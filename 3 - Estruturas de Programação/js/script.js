// 1 - Variaveis
console.log(
  "--------------------------------------Variáveis------------------------------------"
);

let nome = "Marcos";
console.log(nome);

nome = "Marcos Vinicios";
console.log(nome);

const idade = 21;
console.log(idade);

console.log(typeof nome);
console.log(typeof idade);

// 2 - Mais sobre variaveis
console.log(
  "--------------------------------Mais sobre variáveis------------------------------"
);

let a = 10,
  b = 5,
  c = "10";

console.log(a, b, c);

const nomecompleto = "Marcos Vinicios";
const nomeCompleto = "Joao da silva";

console.log(nomecompleto);
console.log(nomeCompleto);

let _teste = "teste";
let $teste = "teste";

console.log(_teste, $teste);

// 3 - Funçoes do JS: Prompt
console.log(
  "--------------------------------Funções do JS: Prompt-----------------------------"
);

// const age = prompt("Digite sua idade: ");

// console.log(`Voce tem ${age} anos`);

// 4 - Funçoes do JS: Alert
console.log(
  "--------------------------------Funções do JS: Alert------------------------------"
);

// alert("Seja bem vindo");

// 5 - Funçoes do JS: Math
console.log(
  "--------------------------------Funções do JS: Math-------------------------------"
);

let num1 = 9.54578;
let num2 = Math.floor(num1);
let num3 = Math.ceil(num1);
let num4 = Math.round(num1);

console.log(num1);
console.log(`Arredonda para baixo ${num2}`);
console.log(`Arredonda para cima ${num3}`);
console.log(`Arredonda para o mais proximo ${num4}`);

// 6 - Funçoes do JS: Console
console.log(
  "-------------------------------Funções do JS: Console-----------------------------"
);

console.log("Mensagem de log");
console.warn("Mensagem de aviso");
console.error("Mensagem de erro");

// 7 - Estruturas de Controle - If
console.log(
  "----------------------------Estruturas de Controle - If---------------------------"
);

const m = 10;

if (m > 5) {
  console.log("Sim, m é maior que 5");
}

const user = "Marcos";

if (user === "Marcos") {
  console.log("Olá Marcos");
}

if (user === "Maria") {
  console.log("Olá Maria");
}

// 8 - Estruturas de Controle - Else
console.log(
  "---------------------------Estruturas de Controle - Else-------------------------"
);

const loggedIn = false;

if (loggedIn) {
  console.log("está autenticado");
} else {
  console.log("Não está autenticado");
}

const q = 10,
  w = 15;

if (q > 5 && w > 20) {
  console.log("Números mais altos");
} else {
  console.log("Os números nao sao mais altos");
}

// 9 - Estruturas de Controle - Else If
console.log(
  "-------------------------Estruturas de Controle - Else If------------------------"
);

if (1 > 2) {
  console.log("teste");
} else if (2 > 3) {
  console.log("teste 2");
} else if (5 > 4) {
  console.log("Agora sim");
}

const userName = "Marcos";
const userAge = 21;

if (userName === "José") {
  console.log("Olá José");
} else if (userName === "Marcos" && userAge === 21) {
  console.log("Olá Marcos, você tem 21 anos");
} else {
  console.log("Usuário não encontrado");
}

// 10 - Estruturas de Repetição - While
console.log(
  "-------------------------Estruturas de Repetição - While-------------------------"
);

let i = 0;

while (i < 5) {
  console.log(`Repetindo ${i}`);
  i++;
}

// 11 - Estruturas de Repetição - do While
console.log(
  "------------------------Estruturas de Repetição - do While-----------------------"
);

let j = 10;

do {
  console.log(`Valor de j é ${j}`);
  j--;
} while (j > 0);

// 12 - Estruturas de Repetição - For
console.log(
  "---------------------------Estruturas de Repetição - For-------------------------"
);

for (let k = 0; k < 5; k++) {
  console.log(`Repetindo ${k}`);
}

// 13 - Forçando a saida de um loop
console.log(
  "----------------------------Forçando a saida de um loop-------------------------"
);

for (let g = 20; g > 10; g--) {
  if (g === 12) {
    console.log(`O g é igual a ${g}, saindo do loop`);
    break;
  }
  console.log(`O valor de g é : ${g}`);
}

// 14 - Pulando uma execução do loop
console.log(
  "----------------------------Pulando uma execução do loop-------------------------"
);

for (let h = 0; h < 10; h++) {
  // Operadore de resto = %
  if (h % 2 !== 0) {
    console.log(`Pulando os numeros impares ${h}`);
    continue;
  }
  console.log(`Os numeros pares são ${h}`);
}

// 15 - Estrutura Condicional - Switch
console.log(
  "--------------------------Estrutura Condicional - Switch-------------------------"
);

const data = new Date();
const diaSemana = data.getDay();
let diaSemanaTexto;

switch (diaSemana) {
  case 0:
    diaSemanaTexto = "Domingo";
    break;
  case 1:
    diaSemanaTexto = "Segunda-feira";
    break;
  case 2:
    diaSemanaTexto = "Terça-feira";
    break;
  case 3:
    diaSemanaTexto = "Quarta-feira";
    break;
  case 4:
    diaSemanaTexto = "Quinta-feira";
    break;
  case 5:
    diaSemanaTexto = "Sexta-feira";
    break;
  case 6:
    diaSemanaTexto = "Sábado";
    break;
  default:
    diaSemanaTexto = "Dia inválido";
}
console.log(`Hoje é ${diaSemanaTexto}`);
