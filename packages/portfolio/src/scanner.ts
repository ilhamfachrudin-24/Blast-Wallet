export interface Token {


symbol:string;

name:string;

balance:number;

chain:string;


}



export function scanTokens(

address:string

):Token[]{



return [

{

symbol:"SOL",

name:"Solana",

balance:0,

chain:"Solana"

},


{

symbol:"ETH",

name:"Ethereum",

balance:0,

chain:"Ethereum"

}


];


}
