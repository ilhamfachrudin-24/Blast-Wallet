export type Network =
"solana" |
"ethereum";


export interface NetworkConfig {

name:string;

rpc:string;

chainId?:number;

}



export const Networks = {


solana: {

name:"Solana",

rpc:
"https://api.mainnet-beta.solana.com"

},



ethereum: {

name:"Ethereum",

rpc:
"https://ethereum.publicnode.com",

chainId:1

}


};



export function getNetwork(
network:Network
):NetworkConfig{


return Networks[network];

}
