import {

Connection,
PublicKey

} from "@solana/web3.js";


import {

JsonRpcProvider

} from "ethers";


import {

Networks

} from "./network";





export async function getSolanaBalance(

address:string

){


const connection =

new Connection(

Networks.solana.rpc

);



const balance =

await connection.getBalance(

new PublicKey(address)

);



return {


asset:"SOL",


balance:

balance / 1000000000


};


}





export async function getEthereumBalance(

address:string

){


const provider =

new JsonRpcProvider(

Networks.ethereum.rpc

);



const balance =

await provider.getBalance(

address

);



return {


asset:"ETH",


balance:

Number(balance) / 1e18


};


}
