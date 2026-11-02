export interface Network {


name:string;

chain:string;

rpc:string;

active:boolean;


}





let currentNetwork:Network = {


name:"Solana Mainnet",

chain:"solana",

rpc:

"https://api.mainnet-beta.solana.com",

active:true


};





export function switchNetwork(

network:Network

){


currentNetwork = network;


return currentNetwork;


}





export function getCurrentNetwork(){


return currentNetwork;


}
