import {data} from './donut.js'

    const donuts = data.items.item;

//1.- Nuestro grupo se encuentra totalmente debilitado. Necesitamos tomar azúcares, hierro, proteínas y poca fibra. Para ello debemos preparar un conjuro que nos muestre:

	//donut con más azúcar (+ 50 exp)
    function mostSugarDonut(){
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
    function findVitamin(donut, vitaminName){
        const donutVitamins = donut.nutrition_facts.nutrition.vitamins;
        for(let i = 0; i < donutVitamins.length; i++){
            const vitamin = donutVitamins[i];
            if(vitamin.type.toUpperCase() === vitaminName.toUpperCase() ){
                return vitamin;
            }
        }
        return null;
    }

    function mostIronDonut(){
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

    function mostProteinDonut(){
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
    function leastFiberDonut(){
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

    function mostCaloriesDonut(){
        let maxCalories = donuts[0].nutrition_facts.nutrition.calories;
        let mostCaloriesDonut = donuts[0];
        for(let i=0; i < donuts.length; i++){
            const donut = donuts[i];

            let donutCalories = donut.nutrition_facts.nutrition.calories;
            donutCalories =  parseInt(donutCalories.substring(donutCalories.length-1, 0));

            if(maxCalories < donutCalories){
                maxCalories = donutCalories;
                mostCaloriesDonut = donut;
            }
        }
        return mostCaloriesDonut;
    }


    const donutMostSugar = mostSugarDonut();
    const donutMostIron  = mostIronDonut();
    const donutMostProtein = mostProteinDonut();
    const donutLeastFiber = leastFiberDonut();
    const donutMostCalories = mostCaloriesDonut();


    console.log('-----------------------------SPELL 1-----------------------------');
    console.log(`The donut with the most sugar is {${donutMostSugar.name}} with ${donutMostSugar.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars}r of sugar.`);
    console.log(`The donut with the most iron is {${donutMostIron.name}} with ${findVitamin(donutMostIron, 'iron').percent} of iron.`);
    console.log(`The donut with the most protein is {${donutMostProtein.name}} with ${donutMostProtein.nutrition_facts.nutrition.protein}r of protein.`);
    console.log(`The donut with the least fiber is {${donutLeastFiber.name}} with ${donutLeastFiber.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre}r of fiber.`);
    console.log(`The donut with the most calories is {${donutMostCalories.name}} with ${donutMostCalories.nutrition_facts.nutrition.calories}.`);


    console.log('-----------------------------------------------------------------');

