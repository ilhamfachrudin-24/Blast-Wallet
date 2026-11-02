import {

connectDApp,

disconnectDApp,

getSession

} from "@blast-wallet/dapp-connector";





export function connectApplication(

name:string,

url:string

){


return connectDApp(

name,

url

);


}





export function currentSession(){


return getSession();


}





export function disconnectApplication(){


disconnectDApp();


}
