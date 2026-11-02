import {

analyzeMarket,

generateAdvice

} from "@blast-wallet/ai-engine";





export function marketInsight(

symbol:string

){


return analyzeMarket(symbol);


}





export function portfolioAdvice(

data:any

){


return generateAdvice(data);


}
