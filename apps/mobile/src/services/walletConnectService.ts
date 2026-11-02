import {

createSession,

getSession,

disconnectSession

} from "@blast-wallet/walletconnect";





export function connectWalletConnect(

name:string,

url:string

){


return createSession(

name,

url

);


}





export function getWalletConnectSession(){


return getSession();


}





export function disconnectWalletConnect(){


disconnectSession();


}
