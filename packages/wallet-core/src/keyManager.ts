import {
sha256
} from "@noble/hashes/sha256";


import {
utf8ToBytes
} from "@noble/hashes/utils";



export interface KeyPair {

privateKey:string;

publicKey:string;

}



export function generateKeyPair()
:KeyPair{


const seed =
sha256(
utf8ToBytes(
Date.now().toString()
)
);



const privateKey =
Buffer.from(seed)
.toString("hex");



const publicKey =
sha256(seed)
.toString();



return {

privateKey,

publicKey

};


}



export function createAddress(
publicKey:string
){


return "blast_" +
publicKey.slice(0,32);


}
