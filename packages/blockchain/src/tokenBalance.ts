export interface TokenBalance {


symbol:string;

address:string;

amount:number;

network:string;


}





export async function getTokenBalance(

wallet:string,

token:string,

network:string

):Promise<TokenBalance>{



return {


symbol:token,


address:wallet,


amount:0,


network


};


}
