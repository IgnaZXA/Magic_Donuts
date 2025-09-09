import {data} from '../donut.js';

const donuts = data.items.item;

//2.- Necesitamos saber si la ingesta de calorías, grasas y carbohidratos puede mellar nuestra agilidad por lo que necesitamos:

//Listar todos los donuts y sus calorías (+ 50 exp)
export function listDonutsWithCalories(){
    for(let i = 0; i < donuts.length; i++){
        const donut = donuts[i];
        console.log(`Name: {${donut.name}} , \tCalories: ${donut.nutrition_facts.nutrition.calories}\n`);
    }
    console.log();
}

//Listar todos los donuts y sus carbohidratos (+ 50 exp)
export function listDonutsWithCarbohidrates(){
    for(let i = 0; i < donuts.length; i++){
        const donut = donuts[i];
        const donutCarbohidrates = donut.nutrition_facts.nutrition.carbohydrate;
        console.log(`Name: {${donut.name}} , \nCarbohidrates:\n \tFiber: ${donutCarbohidrates.carbs_detail.type.fibre}\n \tSugars: ${donutCarbohidrates.carbs_detail.type.sugars}\n`);
    }
    console.log();
}

//Mostrar la media de calorías de todos los donuts (+ 50 exp)
export function donutCaloriesAverage(){
    let sumCalories = 0;
    for(let i = 0; i < donuts.length; i++){
        const donut = donuts[i];
        sumCalories += donut.nutrition_facts.nutrition.calories;
    }

    return (sumCalories) / donuts.length;
}

//Mostrar la suma de las grasas saturadas de todos los donuts (+ 50 exp)
export function calculateSumOfAllSaturatedFats(){
    let saturatedFatsCount = 0.0;
    for (let i = 0; i < donuts.length; i++) {
        const donut = donuts[i];
        const donutSaturatedFat = donut.nutrition_facts.nutrition.fat.fat_type.saturated;
        saturatedFatsCount += parseFloat(donutSaturatedFat.substring(donutSaturatedFat.length - 1, 0));
    }
    return saturatedFatsCount;
}

//Mostrar el porcentaje medio de cada vitamina (+ 50 exp)

function calcAllVitaminsAveragePercentage(){

    for(let i = 0; i < donuts.length; i++){
        
    }
}
