export function getExplorerUrl(

chain:string,

hash:string

){



const explorers:any = {


solana:

"https://solscan.io/tx/",


ethereum:

"https://etherscan.io/tx/"


};



return (

explorers[chain] ??

""

)

+

hash;


}
