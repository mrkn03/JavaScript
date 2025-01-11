// 1 - Adicionando eventos
console.log("---------- Adicionando eventos ----------");
const btn = document.querySelector("#my-button");

btn.addEventListener("click", function () {
  console.log("Clicou aqui");
});

// 2 - Removendo eventos
console.log("---------- Removendo eventos -----------");

const secondBtn = document.querySelector("#btn");

function imprimirMensagem() {
  console.log("teste");
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirBtn = document.querySelector("#other-btn");

thirBtn.addEventListener("click", () => {
  console.log("Evento removido");
  secondBtn.removeEventListener("click", imprimirMensagem);
});

// 3 - O objeto do evento
console.log("---------- O objeto do evento ----------");

const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.offsetX);
  console.log(event.pointerType);
  console.log(event.target);
});

// 4 - Propagacao
console.log("---------- Propagacao ----------");

const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
  console.log("Evento 1");
});

btnInsideContainer.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Evento 2");
});

// 5 - Acoes default
console.log("---------- Acoes default ----------");

const a = document.querySelector("a");

a.addEventListener("click", (event) => {
  event.preventDefault();

  console.log("Nao alterou a pagina");
});

// 6 - Eventos de tecla
console.log("---------- Eventos de tecla ----------");

document.addEventListener("keyup", (event) => {
  console.log(`Apertou a tecla ${event.key}`);
});

document.addEventListener("keydown", (event) => {
  console.log(`Soltou a tecla ${event.key}`);
});

// 7 - Outros eventos de mouse
console.log("---------- Outros eventos de mouse ----------");

const mouseEvents = document.querySelector("#mouse");

mouseEvents.addEventListener("mousedown", () => {
  console.log(`Pressionou o botao`);
});

mouseEvents.addEventListener("mouseup", () => {
  console.log(`Soltou o botao`);
});

mouseEvents.addEventListener("dblclick", () => {
  console.log(`Click duplo`);
});

// 8 - Movimento do mouse
console.log("---------- Movimento do mouse ----------");

// document.addEventListener("mousemove", (event)=>{
//     console.log(`No eixo X: ${event.x}`)
//     console.log(`No eixo Y: ${event.y}`)
// })

// 9 - Evento por scroll
console.log("---------- Evento por scroll ----------");

window.addEventListener("scroll", (event) => {
  if (window.pageYOffset) {
    console.log("Passamos de 200px");
  }
});

// 10 - Eventos por foco
console.log("---------- Eventos por foco ---------");

const input = document.querySelector("#my-input");

input.addEventListener("focus", (event) => {
  console.log("Entrou no input");
});

input.addEventListener("blur", (event) => {
  console.log("Saiu do input");
});

// 11 - Eventos de carregamento de pagina
console.log("---------- Eventos de carregamento de pagina -----------");

window.addEventListener("load", () => {
  console.log("A pagina carregou");
});

window.addEventListener("beforeunload", (event) => {
  event.preventDefault();
  event.returnValue = "Testando";
});

// 12 - Debounce
console.log("---------- Debounce ----------");

const debounce = (funcao, delay) => {
  let timeout;

  return (...arguments) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      funcao.apply(arguments);
    }, delay);
  };
};

window.addEventListener(
  "mousemove",
  debounce(() => {
    console.log("Executando a cada 400ms");
  }, 400)
);
