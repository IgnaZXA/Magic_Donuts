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

            if(maxCalories < donutCalories){
                maxCalories = donutCalories;
                mostCaloriesDonut = donut;
            }
        }
        return mostCaloriesDonut;
    }


    //2.- Necesitamos saber si la ingesta de calorías, grasas y carbohidratos puede mellar nuestra agilidad por lo que necesitamos:

	//Listar todos los donuts y sus calorías (+ 50 exp)
    function listDonutsWithCalories(){
        for(let i = 0; i < donuts.length; i++){
            const donut = donuts[i];
            console.log(`Name: {${donut.name}} , \tCalories: ${donut.nutrition_facts.nutrition.calories}\n`);
        }
        console.log();
    }

	//Listar todos los donuts y sus carbohidratos (+ 50 exp)
    function listDonutsWithCarbohidrates(){
        for(let i = 0; i < donuts.length; i++){
            const donut = donuts[i];
            const donutCarbohidrates = donut.nutrition_facts.nutrition.carbohydrate;
            console.log(`Name: {${donut.name}} , \nCarbohidrates:\n \tFiber: ${donutCarbohidrates.carbs_detail.type.fibre}\n \tSugars: ${donutCarbohidrates.carbs_detail.type.sugars}\n`);
        }
        console.log();
    }

	//Mostrar la media de calorías de todos los donuts (+ 50 exp)
    function donutCaloriesAverage(){
        let sumCalories = 0;
        for(let i = 0; i < donuts.length; i++){
            const donut = donuts[i];
            sumCalories += donut.nutrition_facts.nutrition.calories;
        }

        return (sumCalories) / donuts.length;
    }

	//Mostrar la suma de las grasas saturadas de todos los donuts (+ 50 exp)
    function calculateSumOfAllSaturatedFats(){
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

    //3.- El horno a la leña de esta posada es de alta calidad, debemos lanzar un hechizo para saber qué tipo de masa utilizan

	//Listar cada donut con sus posibles masas, batter (+ 50 exp)
    function listDonutBatters(){
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
    function listAllDonutsToppings(){
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

    function showMostBatterVarietyDonut(){
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

    function showMostToppingsVarietyDonut(){
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

    function countTotalBatterAndToppings(){
        const allBatters  = getAllBatters(); 
        const allToppings = getAllToppings();

        console.log(`The total number of different batters is: ${allBatters.length}`);
        console.log(`The total number of different toppings is: ${allToppings.length}`);
        console.log();
    }

    //4.- Nuestro grupo sólo dispone de 4 monedas de plata.


	//Mostrar cuántos donuts de cada tipo podemos comprar y las monedas sobrantes. (+ 50 exp)
    function quantityOfDonutsYouCanBuy(silverCoins, donut){
        let donutCount = 0;  
        while(silverCoins > donut.ppu) { donutCount++; silverCoins -= donut.ppu; }

        return [donutCount, silverCoins];
    }

    function showEachDonutTypeHowManyCanBuy(){
        for(let i = 0; i < donuts.length; i++){
            const donut = donuts[i];
            const [donutQuantity, leftoverCoins] =  quantityOfDonutsYouCanBuy(4.0, donut);
            
            console.log(`The donut {${donut.name}} with 4 silver coins you can buy ${donutQuantity} and the leftover are {${leftoverCoins.toFixed(2)}}\n`);
        }
    }

	//Encontrar el donut más caro que aún podamos comprar con 4 monedas de plata (+ 50 exp)

	//Encontrar el donut más barato de la posada (+ 50 exp)

	//Ordenar los donuts por precio de menor a mayor (+ 50 exp)
    function orderDonutsByPrice(){
        const orderedDonuts = [donuts[0]];
        for(let i = 1; i < donuts.length; i++){
            const donut = donuts[i];
            let j = 0;
            while(j < orderedDonuts.length && donut.ppu > orderedDonuts[j].ppu){
                j++;
            }

            for(let k = orderedDonuts.length; k > j; k--){
                orderedDonuts[k] = orderedDonuts[k-1];
            }

            orderedDonuts[j] = donut;

        }

        return orderedDonuts;
    }

    function showDonutsOrderedByPrice(){
        const donutListPrice = orderDonutsByPrice();
        console.log(`The list of donuts ordered by price (asc.):\n`);

        for(let i = 0; i < donutListPrice.length; i++){
            const donut = donutListPrice[i];
            console.log(`{${donut.name}}'s price is: ${donut.ppu}`);
        }
    }

	//Calcular cuántos donuts distintos podríamos comprar con 4 monedas en total (mezclando tipos) (+ 50 exp)


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

    function showHighCholesterolChanges(){
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

    function showHighSugarChanges(){
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

    function showNicatinaAdditionInMagicFusionDonut(){
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




    // SPELL 1
    const donutMostSugar = mostSugarDonut();
    const donutMostIron  = mostIronDonut();
    const donutMostProtein = mostProteinDonut();
    const donutLeastFiber = leastFiberDonut();
    const donutMostCalories = mostCaloriesDonut();

    // SPELL 2
    

    // CONSOLE LOGS
    console.log('-----------------------------SPELL 1-----------------------------\n');
    console.log(`The donut with the most sugar is {${donutMostSugar.name}} with ${donutMostSugar.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars}r of sugar.`);
    console.log(`The donut with the most iron is {${donutMostIron.name}} with ${findVitamin(donutMostIron, 'iron').percent} of iron.`);
    console.log(`The donut with the most protein is {${donutMostProtein.name}} with ${donutMostProtein.nutrition_facts.nutrition.protein}r of protein.`);
    console.log(`The donut with the least fiber is {${donutLeastFiber.name}} with ${donutLeastFiber.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre}r of fiber.`);
    console.log(`The donut with the most calories is {${donutMostCalories.name}} with ${donutMostCalories.nutrition_facts.nutrition.calories}.`);

    console.log('-----------------------------SPELL 2-----------------------------\n');

    console.log(`List all Donuts with its Calories:\n`);
    listDonutsWithCalories();

    console.log('-----------------------------------------------------------------\n');

    console.log(`List all Donuts with its Carbohidrates:\n`);
    listDonutsWithCarbohidrates();

    

    console.log(`The donut calories average is: ${donutCaloriesAverage()}\n`);

    console.log(`The sum of all saturated fats is ${calculateSumOfAllSaturatedFats()}\n`);


    console.log('-----------------------------SPELL 3-----------------------------\n');

    console.log(`List all donuts with all their posible batters: \n`);
    listDonutBatters();
    
    console.log('List all donuts with their toppings:\n');
    listAllDonutsToppings();

    console.log('Show most batter variety donut:');
    showMostBatterVarietyDonut();

    console.log('Show most toppings variety donut:');
    showMostToppingsVarietyDonut();


    console.log('Count the total number of different doughs and toppings that exist in the entire inn.');
    countTotalBatterAndToppings();

    console.log('-----------------------------SPELL 4-----------------------------\n');

    showEachDonutTypeHowManyCanBuy();

    showDonutsOrderedByPrice();

    console.log(`Change the donuts fat trans which have high cholesterol (> 12)`);

    showHighCholesterolChanges();


    console.log(`Change the donutscarbohidrates amount which have high sugar (> 50)`);
    showHighSugarChanges();

    showNicatinaAdditionInMagicFusionDonut();

    console.log('-----------------------------------------------------------------');



