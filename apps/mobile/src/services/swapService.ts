import {

getSwapQuote,

findRoute,

checkSlippage

} from "@blast-wallet/defi";





export function createSwapQuote(

from:string,

to:string,

amount:number

){



const quote =

getSwapQuote(

from,

to,

amount

);



const route =

findRoute(

from,

to

);



const security =

checkSlippage(

quote.priceImpact

);



return {


quote,


route,


security


};


}
