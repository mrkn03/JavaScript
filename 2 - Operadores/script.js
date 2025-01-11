// 1 - Number

console.log(
  "-----------------------------------Number-----------------------------------------"
);

console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -127);

// 2 - Operações Ariméticas
console.log(
  "-----------------------------Operacoes Aritiméticas-------------------------------"
);

console.log(2 + 2);
console.log(10 - 5);
console.log(5 * 5);
console.log(10 / 2);
console.log(5 + 4 * 2);

// 3 - Special Numbers
console.log(
  "----------------------------------Special Numbers---------------------------------"
);

console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof NaN);

console.log(1 / 0);
console.log(-1 / 0);
console.log(0 / 0);

// 4 - String
console.log(
  "-----------------------------------String-----------------------------------------"
);

console.log(typeof "Hello");
console.log(typeof "Hello");
console.log(typeof `Hello`);

console.log("Hello");
console.log("Hello");
console.log(`Hello`);

// 5 - Simbolos especiais em strings
console.log(
  "----------------------------------Special Simbols---------------------------------"
);

console.log("Hello\nWorld");
console.log("Hello\tWorld");

// 6 - Concatenação
console.log(
  "-----------------------------------Concatenacao-----------------------------------"
);

console.log("Hello " + "World");
console.log("Hello " + 5);
console.log("Hello " + 5 + 5);
console.log("Hello " + (5 + 5));

// 7 - Interpolação
console.log(
  "----------------------------Interpolação / Template String------------------------"
);

console.log(`A soma de 5 + 5 é: ${5 + 5}`);
console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`);

// 8 - Booleanos
console.log(
  "---------------------------------------Booleanos----------------------------------"
);
console.log(true);
console.log(false);

console.log(5 > 20);
console.log(5 < 20);

// 9 - Comparação
console.log(
  "--------------------------------------Comparação----------------------------------"
);
console.log(5 <= 5);
console.log(5 < 5);
console.log(10 == 10);
console.log(10 == 9);
console.log(10 != 9);

// 10 - Comparação de identicos
console.log(
  "----------------------------------Comparação de identicos-------------------------"
);
console.log(9 == "9");
console.log(9 === "9");

console.log(9 != "9");
console.log(9 !== "9");

// 11 - Operadores Lógicos
console.log(
  "----------------------------------Operadores Lógicos-----------------------------"
);
console.log(true && true);
console.log(true && false);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || false);

console.log(!true);
console.log(!false);

// 12 - Empty values
console.log(
  "------------------------------------Empty values---------------------------------"
);
console.log(typeof null, typeof undefined);

console.log(null === undefined);
console.log(null == undefined);

console.log(null == false);
console.log(undefined == false);

// 13 - Conversáo de tipo automática
console.log(
  "--------------------------------Conversão de tipo automática---------------------"
);

console.log(5 + "5");
console.log(5 * "5");
console.log(5 - "5");
console.log(5 / "5");
console.log("teste" * "opa" )