export interface RPCProvider {


network:string;

url:string;


}





const providers:RPCProvider[]=[


{

network:"Ethereum",

url:"https://ethereum-rpc.publicnode.com"

},


{

network:"Solana",

url:"https://api.mainnet-beta.solana.com"

},


{

network:"Polygon",

url:"https://polygon-rpc.com"

}


];





export function getRPC(

network:string

){


return providers.find(

item=>item.network===network

);

}





export function getNetworks(){


return providers;


}
