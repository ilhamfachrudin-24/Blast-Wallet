import {

Token

} from "./scanner";


import {

getTokenPrice

} from "./price";





export async function calculatePortfolio(

tokens:Token[]

){



let totalValue = 0;



const assets = await Promise.all(

tokens.map(async(token)=>{


const price =

await getTokenPrice(

token.symbol

);



const value =

token.balance *

price.price;



totalValue += value;



return {


...token,


price:

price.price,


value


};


})


);




return {


assets,


totalValue


};


}
