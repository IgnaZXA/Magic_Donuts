import {data} from './donut.js';

import {mostSugarDonut, findVitamin, mostIronDonut, mostProteinDonut, leastFiberDonut, mostCaloriesDonut} from './exercises/e1.js';
import {listDonutsWithCalories, listDonutsWithCarbohidrates, donutCaloriesAverage, calculateSumOfAllSaturatedFats} from './exercises/e2.js';
import {listDonutBatters, listAllDonutsToppings, showMostBatterVarietyDonut, showMostToppingsVarietyDonut, countTotalBatterAndToppings} from './exercises/e3.js';
import {showEachDonutTypeHowManyCanBuy, showDonutsOrderedByPrice} from './exercises/e4.js';

import {showHighCholesterolChanges, showHighSugarChanges, showNitacinaAdditionInMagicFusionDonut} from './exercises/e5.js'

    const donuts = data.items.item;




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

    showNitacinaAdditionInMagicFusionDonut();

    console.log('-----------------------------------------------------------------');



