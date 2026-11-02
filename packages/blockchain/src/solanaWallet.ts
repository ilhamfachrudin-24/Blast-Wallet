import {
Keypair
} from "@solana/web3.js";



export interface SolanaWallet {


publicKey:string;

secretKey:string;


}




export function createSolanaWallet()
:SolanaWallet{


const keypair =
Keypair.generate();



return {

publicKey:
keypair.publicKey.toString(),


secretKey:
Buffer.from(
keypair.secretKey
).toString("hex")

};


}



export function getSolanaAddress(
publicKey:string
){

return publicKey;

}
