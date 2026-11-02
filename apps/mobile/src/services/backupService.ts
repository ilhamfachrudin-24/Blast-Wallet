import {

saveVault,

readVault,

validateRecoveryPhrase

} from "@blast-wallet/security";





export function backupWallet(

phrase:string

){



const check =

validateRecoveryPhrase(

phrase

);





if(!check.valid){


return {


success:false,


error:"Invalid recovery phrase"


};


}





saveVault(phrase);





return {


success:true


};


}





export function restoreCheck(){


return readVault();


}
