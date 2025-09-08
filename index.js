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

	//donut con menos fibra (+ 50 exp)

	//donut con más calorías (+ 50 exp)



    const donutMostSugar = mostSugarDonut();
    const donutMostIron  = mostIronDonut();

    console.log('-----------------------------SPELL 1-----------------------------');
    console.log(`The donut with the most sugar is {${donutMostSugar.name}} with ${donutMostSugar.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars}r of sugar.`);
    console.log(`The donut with the most iron is {${donutMostIron.name}} with ${findVitamin(donutMostIron, 'iron').percent} of iron.`);

