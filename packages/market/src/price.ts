export interface TokenPrice {


symbol:string;

price:number;

change24h:number;


}





export function getTokenPrice(

symbol:string

):TokenPrice{


return {


symbol,


price:100,


change24h:2.5


};


}
