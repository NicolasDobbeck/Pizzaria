'use strict'

import './card-cardapio.js'

export const fetchCardPizza = async function () {
    const url = `http://localhost:5050/v1/pizzaComponentes` 
    const response = await fetch(url);
    const data = await response.json()

    return data
}

const {pizzaComponentes}  = await fetchCardPizza();
console.log(pizzaComponentes)
const container = document.querySelector('.container-card-pizza')
const cardPizza = document.createElement('card-pizza')
const ingredientes = pizzaComponentes.map(pizza => {
    console.log(pizza.ingrediente);
    return pizza.ingrediente;
}).join(', ');

const tamanho = pizzaComponentes.map(item => {
    return item.tamanho
})
console.log(tamanho);

console.log(ingredientes);

cardPizza.setAttribute('descricao', ingredientes)

pizzaComponentes.forEach(item => {
    cardPizza.setAttribute('nome', item.sabor)
    
    cardPizza.setAttribute('preco1', item.preco)
    cardPizza.setAttribute('preco2', item.preco2)
    cardPizza.setAttribute('preco3', item.preco3)
    cardPizza.setAttribute('Broto', item.tamanho)
    cardPizza.setAttribute('Medio', item.tamanho)
    cardPizza.setAttribute('Grande', item.tamanho)
});

container.appendChild(cardPizza)