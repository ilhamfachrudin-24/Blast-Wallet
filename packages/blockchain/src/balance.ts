import {

Connection,
PublicKey

} from "@solana/web3.js";



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
