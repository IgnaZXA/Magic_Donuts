import {data} from '../donut.js';

const donuts = data.items.item;


//5.- Para nuestro horror y preocupación hemos detectado grandes errores sintácticos en el conjuro original, es momento de poner nuestros conocimientos arcanos al servicio de toda la posada.

//Los donuts con el colesterol > 12 modificar las grasas trans a 3,2 gr (+ 50 exp)
function setDonutFatTrans(donut, value){
    donut.nutrition_facts.nutrition.fat.fat_type.trans = `${value}g`;
}

function changeDonutsWithHighColesterol(){
    for(let i = 0; i < donuts.length; i++){
        const donut = donuts[i]; 
        const cholesterolAmount = donut.nutrition_facts.nutrition.cholesterol.amount;
        if(parseFloat(cholesterolAmount.substring(cholesterolAmount.length-2, 0)) > 12){
            setDonutFatTrans(donut, 3.2);
        }
    }
}

export function showHighCholesterolChanges(){
    changeDonutsWithHighColesterol();

    for(let i = 0; i < donuts.length; i++ ){
        const don = donuts[i];
        console.log(`${don.name}:`);
        console.log('\tCholesterol: ', don.nutrition_facts.nutrition.cholesterol.amount);
        console.log('\tFat Trans:', don.nutrition_facts.nutrition.fat.fat_type.trans, '\n');
    }
}

//Donuts con azúcar > 50  modificar el amount de los detalles de carbohidratos a 42gr (+ 50 exp)
function setDonutCarbohidratesAmount(donut, value){
    donut.nutrition_facts.nutrition.carbohydrate.carbs_detail.amount= `${value}g`;
}

function changeDonutsWithHighSugar(){
    for(let i = 0; i < donuts.length; i++){
        const donut = donuts[i]; 
        const sugarAmount = donut.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars;
        if(parseInt(sugarAmount.substring(sugarAmount.length-1, 0)) > 50){
            setDonutCarbohidratesAmount(donut, 42);
        }
    }
}

export function showHighSugarChanges(){
    changeDonutsWithHighSugar();

    for (let i = 0; i < donuts.length; i++) {
        const donut = donuts[i];
        console.log(`${donut.name}:`);
        console.log('\tSugar: ', donut.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars);
        console.log('\tCarbohidrates:', donut.nutrition_facts.nutrition.carbohydrate.carbs_detail.amount, '\n');
        
    }
}

//Añadir una vitamina llamada "Nitacina" al donut con el nombre "Magic Fusion" (+ 50 exp)
function findDonutByName(name){
    for(let i = 0; i < donuts.length ;i++){
        const donut = donuts[i];
        if(donut.name === name){
            return donut; 
        }
    }
    return null;
}

function addNicatinaToDonut(){

    const magicFusionDonut = findDonutByName('Magic Fusion');

    if(magicFusionDonut !== null){
        const donutVitamins = magicFusionDonut.nutrition_facts.nutrition.vitamins;
        donutVitamins.push({type: 'Nitacina', percent:'6%'});
    }

    return magicFusionDonut;
}

export function showNitacinaAdditionInMagicFusionDonut(){
    const changedMagicFusionDonut = addNicatinaToDonut();
    const changedMFVitamins = changedMagicFusionDonut.nutrition_facts.nutrition.vitamins;
    console.log(`List of all ${changedMagicFusionDonut.name}'s vitamins: \n`);
    for(let i = 0; i < changedMFVitamins.length; i++){
        console.log(`\t${changedMFVitamins[i].type}`);
    }
    console.log();
}

//El daily value de los carbohidratos de todos los donuts va a ser de 53% (+ 50 exp)

//Crearle un nuevo atributo "Alergen" al donut llamado "Relaxing Alchemy" y que dentro de el ponga "Gluten Free" (+ 50 exp)



