import {

createSession,

getSessions,

disconnectSession

} from "@blast-wallet/walletconnect";





export function connectApp(

name:string,

url:string

){


return createSession(

name,

url

);

}





export function sessions(){


return getSessions();


}





export function disconnect(

id:string

){


return disconnectSession(id);


}
