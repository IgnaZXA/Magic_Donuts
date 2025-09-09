import {data} from '../donut.js';

const donuts = data.items.item;

//1.- Nuestro grupo se encuentra totalmente debilitado. Necesitamos tomar azúcares, hierro, proteínas y poca fibra. Para ello debemos preparar un conjuro que nos muestre:

//donut con más azúcar (+ 50 exp)
export function mostSugarDonut(){
    let maxSugar = -1;
    let maxSugarDonut = null;
    for(let i=0; i < donuts.length; i++){
        const donut = donuts[i];
        let donutSugar = donut.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars;
        donutSugar = parseInt(donutSugar.substring(donutSugar.length-1, 0)); // Todos los valores de sugar tienen el patrón '%g'
        if(maxSugar < donutSugar){
            maxSugar = donutSugar;
            maxSugarDonut = donut;
        }
    }
    return maxSugarDonut;
}

//donut con más hierro (+ 50 exp)

/**
 * 
 * @param {*} donut 
 * @param {String} vitaminName
 * @returns 
 */
export function findVitamin(donut, vitaminName){
    const donutVitamins = donut.nutrition_facts.nutrition.vitamins;
    for(let i = 0; i < donutVitamins.length; i++){
        const vitamin = donutVitamins[i];
        if(vitamin.type.toUpperCase() === vitaminName.toUpperCase() ){
            return vitamin;
        }
    }
    return null;
}

export function mostIronDonut(){
    let maxIron = -1;
    let maxIronDonut = null;
    for(let i=0; i < donuts.length; i++){
        const donut = donuts[i];
        let donutIron = findVitamin(donut, 'iron').percent;
        donutIron = parseInt(donutIron.substring(donutIron.length-1, 0));
        if(maxIron < donutIron){
            maxIron = donutIron;
            maxIronDonut = donut;
        }
    }
    return maxIronDonut;
}

//donut con más proteína (+ 50 exp)
export function mostProteinDonut(){
    let maxProtein = -1;
    let maxProteinDonut = null;
    for(let i=0; i < donuts.length; i++){
        const donut = donuts[i];
        let donutProtein = donut.nutrition_facts.nutrition.protein;
        donutProtein = parseInt(donutProtein.substring(donutProtein.length-1, 0));
        if(maxProtein < donutProtein){
            maxProtein = donutProtein;
            maxProteinDonut = donut;
        }
    }
    return maxProteinDonut;
}

//donut con menos fibra (+ 50 exp)
export function leastFiberDonut(){
    let leastFiber = donuts[0].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre;
    let leastFiberDonut = donuts[0];
    for(let i=0; i < donuts.length; i++){
        const donut = donuts[i];
        let fiberDonut = donut.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre;
        fiberDonut = parseInt(fiberDonut.substring(fiberDonut.length-1, 0));
        if(leastFiber > fiberDonut){
            leastFiber = fiberDonut;
            leastFiberDonut = donut;
        }
    }
    return leastFiberDonut;
}


//donut con más calorías (+ 50 exp)
export function mostCaloriesDonut(){
    let maxCalories = donuts[0].nutrition_facts.nutrition.calories;
    let mostCaloriesDonut = donuts[0];
    for(let i=0; i < donuts.length; i++){
        const donut = donuts[i];

        let donutCalories = donut.nutrition_facts.nutrition.calories;

        if(maxCalories < donutCalories){
            maxCalories = donutCalories;
            mostCaloriesDonut = donut;
        }
    }
    return mostCaloriesDonut;
}