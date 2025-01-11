// 1 - Metodos
console.log("---------- Metodos ----------");

const animal = {
  nome: "Bob",
  latir: function () {
    console.log("Au Au");
  },
};

console.log(animal.nome);

animal.latir();

// 2 - Aprofundando em metodos
console.log("---------- Aprofundando em Metodos ----------");

const pessoa = {
  nome: "Marcos",

  getNome: function () {
    return this.nome;
  },

  setNome: function (nome) {
    this.nome = nome;
  },
};

console.log(pessoa.nome);
console.log(pessoa.getNome());

pessoa.setNome("Joao");

console.log(pessoa.getNome());

// 3 - Prototype
console.log("---------- Prototype ----------");

const text = "asd";

console.log(Object.getPrototypeOf(text));

const bool = true;

console.log(Object.getPrototypeOf(bool));

const arr = [];

console.log(Object.getPrototypeOf(arr));

console.log(Object.getPrototypeOf(arr) === Array.prototype);

// 4 - Mais sobre prototype
console.log("---------- Mais sobre prototype ----------");

const myObject = { a: "b" };

console.log(Object.getPrototypeOf(myObject));

console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject);

console.log(mySecondObject);

console.log(mySecondObject.a);

console.log(Object.getPrototypeOf(mySecondObject) === myObject);

console.log(Object.getPrototypeOf(mySecondObject) === Object.prototype);

// 5 - Classes basicas
console.log("---------- Classes basicas ----------");

const cachorro = {
  raca: null,
  patas: 4,
};

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemao";

console.log(pastorAlemao);

console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro);

bulldog.raca = "Bulldog";

console.log(bulldog);

// 6 - Funcao como classe: funcao construtora
console.log("---------- Funcao construtora -----------");

function criarCachorro(nome, raca) {
  const cachorro = Object.create({});

  cachorro.nome = nome;
  cachorro.raca = raca;

  return cachorro;
}

const bob = criarCachorro("Bob", "Vira lata");

console.log(bob);

const jack = criarCachorro("Jack", "Pitbull");

console.log(jack);

console.log(Object.getPrototypeOf(jack));

// 7 - funcoes como classe: funcao construtora
console.log("---------- Funcao construtora -----------");

function Cachorro(nome, raca) {
  this.nome = nome;
  this.raca = raca;
}

const husky = new Cachorro("Ozzy", "Husky");

console.log(husky);

// 8 - Metodos na funcao construtora
console.log("---------- Metodos na funcao construtora ----------");

Cachorro.prototype.uivar = function () {
  console.log("Auuuuu");
};

console.log(Cachorro.prototype);

husky.uivar();

// 9 - Classes em JavaScript
console.log("---------- Classes em JavaScript ----------");

class CachorroClasse {
  constructor(nome, raca) {
    this.nome = nome;
    this.raca = raca;
  }
}

const jeff = new CachorroClasse("Jeff", "Labrador");

console.log(jeff);

console.log(Object.getPrototypeOf(jeff));

// 10 - Mais sobre as classes
console.log("---------- Mais sobre as classes ----------");

class Caminhao {
  constructor(eixos, cor) {
    this.eixos = eixos;
    this.cor = cor;
  }

  descreverCaminhao() {
    console.log(`Este caminhao tem ${this.eixos} eixos e é da cor ${this.cor}`);
  }
}

const scania = new Caminhao(6, "vermelho");

console.log(scania);

scania.descreverCaminhao();

// 11 - Override
console.log("---------- Override ----------");

class Humano {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const mateus = new Humano("Mateus", 22);

console.log(mateus);

Humano.prototype.idade = "Nao definida";

console.log(mateus.idade);

console.log(Humano.prototype.idade);

// 12 - Symbols em classes
console.log("---------- Symbols em classe ----------");

class Aviao {
  constructor(marca, turbinas) {
    this.marca = marca;
    this.turbinas = turbinas;
  }
}

const asas = Symbol();
const piloto = Symbol();

Aviao.prototype[asas] = 2;
Aviao.prototype[piloto] = 3;

const boeing = new Aviao("Boeing", 10);

console.log(boeing);

console.log(boeing[asas]);
console.log(boeing[piloto]);

// 13 - Getters e Setters
console.log("---------- Getters e Setters ----------");

class Post {
  constructor(titulo, descricao, tags) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.tags = tags;
  }

  get exibirTitulo() {
    return `Voce esta lendo: ${this.titulo}`;
  }

  set adicionarTags(tags) {
    const tagsArray = tags.split(", ");

    this.tags = tagsArray;
  }
}

const myPost = new Post("Algum post", "Um post sobre programacao");

console.log(myPost);

console.log(myPost.exibirTitulo);

myPost.adicionarTags = "programacao, Angular, Js";

console.log(myPost);

// 14 - Heranca
console.log("---------- Heranca ----------");

class Mamifero {
  constructor(patas) {
    this.patas = patas;
  }
}

class Lobo extends Mamifero {
  constructor(patas, nome) {
    super(patas, patas);
    this.nome = nome;
  }
}

const shark = new Lobo(4, "Shark");

console.log(shark);

console.log(shark.patas);

// 15 - Operador InstanceOf
console.log("---------- Operador instanceOf ----------");

console.log(shark instanceof Lobo);

console.log(Lobo instanceof Mamifero);

console.log(new Lobo(4, "Teste") instanceof Mamifero)

console.log(new Post("a", "b") instanceof Cachorro)