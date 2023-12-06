import * as db from './db.js'
let tam = db.items.length
let content = "";
for (let i = 0; i < tam; i++) {
    content += `
    <article class="centralized">
        <img src="${db.items[i].image}" alt="${db.items[i].name}">
        <aside>
            <h2>${db.items[i].name}</h2>
            <h3>${db.items[i].description}</h3>
        </aside>
        <section class="centralized">
            <button onclick="plus1('${db.items[i].id}')">+</button>
            <h6 id="${db.items[i].id}">0</h6>
            <button onclick="less1('${db.items[i].id}')">-</button>
        </section>
        <h1 class="centralized">R$${db.items[i].price}</h1>
    </article>`;
}
document.getElementById('main').innerHTML = content;

function less1(id) {
    const content = document.getElementById(`${id}`);
    let value = content.textContent;
    if (value <= 0) {}
    else {
        value = parseInt(value);
        value = value - 1;
        content.innerHTML = value;
    }
}
function plus1(id) {
    const content = document.getElementById(`${id}`);
    let value = content.textContent;
    value = parseInt(value);
    value = value + 1;
    content.innerHTML = value;
}
export function calc() {
    let a; // Valor do item
    let x = 0; // A quantidade do item
    let b = 0; // Montante atual
    for(let i = 0; i < tam; i++) {
        const quant = document.getElementById(`${db.items[i].id}`);
        x = quant.textContent;
        x = parseInt(x);
        a = db.items[i].price;
        b = a*x+b;
    }
    document.getElementById('result').innerHTML = `R$${b}`;
}
let on = false;
export function mostrar () {
    const codigo =  document.getElementById("codigo");
    codigo.classList.remove('mostrar')
    if(!on)
    codigo.classList.add('mostrar')
    on = !on
}
window.mostrar = mostrar
window.plus1 = plus1;
window.less1 = less1;
window.calc = calc;