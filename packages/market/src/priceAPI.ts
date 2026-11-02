export interface TokenPrice {


symbol:string;

price:number;

change24h:number;


}





const prices:any={


BTC:65000,


ETH:3500,


SOL:150,


USDC:1


};





export async function getTokenPrice(

symbol:string

):Promise<TokenPrice>{



return {


symbol,


price:

prices[symbol] || 0,


change24h:0


};


}
