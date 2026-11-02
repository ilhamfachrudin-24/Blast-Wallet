export interface VaultData {


encryptedKey:string;

createdAt:number;


}



let vault:
VaultData | null = null;




export function saveVault(

privateKey:string,

password:string

){


const encrypted =

Buffer.from(

privateKey + password

)

.toString("base64");




vault = {


encryptedKey:encrypted,


createdAt:

Date.now()


};



return true;


}





export function unlockVault(

password:string

){


if(!vault){

return null;

}



return {


status:"unlocked",


key:

vault.encryptedKey


};


}





export function clearVault(){


vault = null;


}
