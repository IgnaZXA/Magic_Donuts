import {data} from '../donut.js';

const donuts = data.items.item;

//4.- Nuestro grupo sólo dispone de 4 monedas de plata.


//Mostrar cuántos donuts de cada tipo podemos comprar y las monedas sobrantes. (+ 50 exp)
function quantityOfDonutsYouCanBuy(silverCoins, donut){
    let donutCount = 0;  
    while(silverCoins > donut.ppu) { donutCount++; silverCoins -= donut.ppu; }

    return [donutCount, silverCoins];
}

export function showEachDonutTypeHowManyCanBuy(){
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

export function showDonutsOrderedByPrice(){
    const donutListPrice = orderDonutsByPrice();
    console.log(`The list of donuts ordered by price (asc.):\n`);

    for(let i = 0; i < donutListPrice.length; i++){
        const donut = donutListPrice[i];
        console.log(`{${donut.name}}'s price is: ${donut.ppu}`);
    }
}

//Calcular cuántos donuts distintos podríamos comprar con 4 monedas en total (mezclando tipos) (+ 50 exp)

