import {

createWallet,

getWallets,

switchWallet,

getActiveWallet

} from "@blast-wallet/wallet-core";





export function addWallet(

name:string,

address:string

){


return createWallet(

name,

address

);


}





export function wallets(){


return getWallets();


}





export function changeWallet(

id:string

){


return switchWallet(id);


}





export function activeWallet(){


return getActiveWallet();


}
