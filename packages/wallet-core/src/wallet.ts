import {
generateMnemonic
} from "./mnemonic";


import {
generateKeyPair,
createAddress
} from "./keyManager";



export interface Wallet {


mnemonic:string[];

privateKey:string;

publicKey:string;

address:string;


}




export function createWallet()
:Wallet{


const mnemonic =
generateMnemonic();



const keys =
generateKeyPair();



const address =
createAddress(
keys.publicKey
);



return {


mnemonic,

privateKey:
keys.privateKey,


publicKey:
keys.publicKey,


address


};


}
