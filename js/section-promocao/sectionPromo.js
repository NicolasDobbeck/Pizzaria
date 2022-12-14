'use strict'

import './card-promo.js'
import { fetchCardPizza } from '../section-cardapio/sectionCardapio.js'

const {pizzaComponentes} = await fetchCardPizza(); 
const ingredientes = pizzaComponentes.map(pizza => {
    console.log(pizza.ingrediente);
    return pizza.ingrediente;
}).join(', ');

const selectPizza =() => {
    const array = []
    let count = 0;
    pizzaComponentes.forEach(pizza => {
        if(!array[count]?.sabor.includes(pizza.sabor)) {
            array.push({
                sabor: pizza.sabor,
                ingredientes: pizzaComponentes.map(pizzaMap => {
                    if(pizzaMap.sabor === pizza.sabor) {
                        return pizzaMap.ingrediente;
                    }
                    
                })
            })
            count += 1;
        }
        if(array[count]?.sabor.includes(pizza.sabor)) return; 
        array.push({
            sabor: pizza.sabor,
            ingredientes: pizzaComponentes.map(pizzaMap => {
                if(pizzaMap.sabor === pizza.sabor) {
                    return pizzaMap.ingrediente;
                }
                
            })
        })
    })

    return array;
}

console.log(selectPizza(), 'aaa');

const pizzas = selectPizza()

pizzas.forEach(item => {
    console.log(item)
    const container = document.querySelector('.container-cards')
    const card = document.createElement('card-promocoes')


    card.setAttribute('nome', item.sabor)
    card.setAttribute('descricao', item.ingredientes)
    card.setAttribute('imagem', item.imagem)
    card.setAttribute('preco', item.preco)

    container.appendChild(card)
});