// 1 - Movendo-se pelo DOM
console.log("---------- Movendo-se pelo DOM ----------");

console.log(document.body);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].childNodes[1].textContent);

// 2 - Selecionando elementos por tag
console.log("---------- Selecionando elementos por tag ----------");

const listItens = document.getElementsByTagName("li");

console.log(listItens);

// 3 - Selecionando elementos por Id
console.log("---------- Selecionando elementos por Id ----------");

const title = document.getElementById("title");

console.log(title);

// 4 - Selecionando elementos por Classe
console.log("---------- Selecionando elementos por Classe ----------");

const products = document.getElementsByClassName("product");

console.log(products);

// 5 - Selecionando elementos por querySelector
console.log("---------- Selecionando elementos por querySelector ----------");

const productsQuery = document.querySelectorAll(".product");

console.log(productsQuery);

const mainContainer = document.querySelector("#main-container");

console.log(mainContainer);

// 6 - Alterando o HTML: insertBefora
console.log("---------- Alterando o HTML: insertBefore ----------");

const p = document.createElement("p");

const header = title.parentElement;

header.insertBefore(p, title);

// 7 - Alterando o HTML: appendChild
console.log("---------- Alterando o HTML: appendChild ----------");

const navLinks = document.querySelector("nav ul");

const li = document.createElement("li");

navLinks.appendChild(li);

// 8 - Alterando o HTML: replaceChild
console.log("---------- Alterando o HTML: replaceChild ----------");

const h2 = document.createElement("h2");

h2.textContent = "Meu novo titulo";

header.replaceChild(h2, title);

// 9 - Criando nós de texto
console.log("---------- Criando nós de texto ----------");

const myText = document.createTextNode("Agora vamos colocar mais um titulo");

console.log(myText);

const h3 = document.createElement("h3");

h3.appendChild(myText);

console.log(h3);

mainContainer.appendChild(h3);

// 10 - Trabalhando com atributos
console.log("---------- Trabalhando com atributos ----------");

const firstLink = navLinks.querySelector("a");

console.log(firstLink);

firstLink.setAttribute("href", "https://www.google.com");

console.log(firstLink.getAttribute("href"));

// 11 - Altura e largura dos elementos
console.log("---------- Altura e largura dos elementos");

const footer = document.querySelector("footer");

console.log(footer.offsetWidth);
console.log(footer.offsetHeight);

console.log(footer.clientWidth);
console.log(footer.clientHeight);

// 12 - Posicao do elemento
console.log("---------- Posicao do elemento ----------");

const product1 = products[0]

console.log(product1.getBoundingClientRect())

// 13 - CSS com JS
console.log("---------- CSS com JS ----------")

mainContainer.style.color = "red"
mainContainer.style.backgroundColor = "#333"
mainContainer.style.paddingBottom = "15px"

// 14 - Estilizando varios itens
console.log("---------- Estilizando varios itens ----------")

for(const li of listItens){
    li.style.backgroundColor = "red"
}