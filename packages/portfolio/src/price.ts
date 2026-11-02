export interface TokenPrice {


symbol:string;

price:number;

currency:string;


}



export async function getTokenPrice(

symbol:string

):Promise<TokenPrice>{



const prices:any = {


SOL:150,

ETH:3500,

BTC:100000


};



return {


symbol,


price:

prices[symbol] || 0,


currency:"USD"


};


}
