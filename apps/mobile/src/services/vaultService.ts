import {

saveVault,

unlockVault

} from "@blast-wallet/wallet-core";





export function protectWallet(

privateKey:string,

password:string

){


return saveVault(

privateKey,

password

);


}





export function unlockWallet(

password:string

){


return unlockVault(

password

);


}
