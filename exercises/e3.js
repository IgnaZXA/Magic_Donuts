import {data} from '../donut.js';

const donuts = data.items.item;

//3.- El horno a la leña de esta posada es de alta calidad, debemos lanzar un hechizo para saber qué tipo de masa utilizan

//Listar cada donut con sus posibles masas, batter (+ 50 exp)
export function listDonutBatters(){
    for(let i = 0; i < donuts.length; i++){
        const donut = donuts[i];
        console.log(`Donut: {${donut.name}} has this posible batters:\n`);
        const donutBatters = donut.batters.batter;
        for(let j = 0; j < donutBatters.length; j++){
            console.log(`\t${donutBatters[j].type}\n`);
        }
    }
    console.log(`\n`);
}

//Listar cada donut con sus posibles extras topping (+ 50 exp)
export function listAllDonutsToppings(){
    for(let i = 0; i < donuts.length; i++){
        const donut = donuts[i];
        const donutToppings = donut.topping;
        console.log(`Donut {${donut.name}} can have this toppings:`);
        for(let j=1; j < donutToppings.length; j++){ // El primer valor en toppings siempre es None.
            console.log(`\t${donutToppings[j].type}`);
        }
        console.log('\n');

    }
}

//Mostrar el donut con más variedad de masas (batters) (+ 50 exp)
function mostBatterVarietyDonut(){
    let maxBatterCount = donuts[0].batters.batter.length;
    let mostBatterDonut = donuts[0];

    for (let i = 1; i < donuts.length; i++) {
        const donut = donuts[i];
        if(maxBatterCount < donut.batters.batter.length){
            mostBatterDonut = donut;
            maxBatterCount = donut.batters.batter.length;
        }
    }
    return mostBatterDonut;
}

export function showMostBatterVarietyDonut(){
    const mostBatterDonut = mostBatterVarietyDonut();
    console.log(`The donut with the most variety of batters is {${mostBatterDonut.name}}\n`);
}

//Mostrar el donut con más variedad de toppings (+ 50 exp)
function mostToppingVarietyDonut(){
    let maxToppingsCount = donuts[0].topping.length;
    let mostToppingsDonut = donuts[0];

    for (let i = 1; i < donuts.length; i++) {
        const donut = donuts[i];
        if(maxToppingsCount < donut.topping.length){
            mostToppingsDonut = donut;
            maxToppingsCount = donut.topping.length;
        }
    }
    return mostToppingsDonut;
}

export function showMostToppingsVarietyDonut(){
    const mostToppingsDonut = mostToppingVarietyDonut();
    console.log(`The donut with the most variety of toppings is {${mostToppingsDonut.name}}\n`);
}

//Contar el número total de masas y toppings diferentes que existen en toda la posada (+ 50 exp)
function getAllBatters(){
    const allBatters = [];
    for(let i = 0; i < donuts.length; i++){
        const donut = donuts[i];
        const donutBatters = donut.batters.batter;

        for(let j = 0; j < donutBatters.length; j++){
            const batter = donutBatters[j];
            if(!allBatters.includes(batter.type)){
                allBatters.push(batter);
            }
        }
    }
    return allBatters;
}

function getAllToppings(){
    const allToppings = [];
    for(let i = 0; i < donuts.length; i++){
        const donut = donuts[i];
        const donutToppings = donut.topping;

        for(let j = 0; j < donutToppings.length; j++){
            const topping = donutToppings[j];
            if(!allToppings.includes(topping.type) && topping.type !== 'None'){
                allToppings.push(topping);
            }
        }
    }
    return allToppings;
}

export function countTotalBatterAndToppings(){
    const allBatters  = getAllBatters(); 
    const allToppings = getAllToppings();

    console.log(`The total number of different batters is: ${allBatters.length}`);
    console.log(`The total number of different toppings is: ${allToppings.length}`);
    console.log();
}