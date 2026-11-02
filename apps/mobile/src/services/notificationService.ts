import {

getNotifications,

transactionAlert,

securityAlert

} from "@blast-wallet/notification";





export function notifications(){


return getNotifications();


}





export function notifyTransaction(

message:string

){


return transactionAlert(message);


}





export function notifySecurity(

message:string

){


return securityAlert(message);


}
