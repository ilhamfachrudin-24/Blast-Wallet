export interface TokenAsset {


symbol:string;

name:string;

balance:number;


}





export async function scanTokens(

wallet:string

):Promise<TokenAsset[]>{



return [


{

symbol:"ETH",

name:"Ethereum",

balance:0

},


{

symbol:"SOL",

name:"Solana",

balance:0

}


];


}
