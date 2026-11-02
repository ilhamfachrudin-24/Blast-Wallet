export interface KeyPair {

  privateKey:string;

  publicKey:string;

}



export function generateKeyPair()
:KeyPair{


const privateKey =
"generated_private_key";


const publicKey =
"generated_public_key";



return {

privateKey,

publicKey

};


}



export function createAddress(
publicKey:string
){


return `blast_${publicKey}`;

}
