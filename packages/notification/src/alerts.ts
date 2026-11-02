import {

createNotification

} from "./engine";





export function transactionAlert(

message:string

){


return createNotification({

id:Date.now().toString(),

title:"Transaction",

message,

type:"transaction",

createdAt:Date.now()

});


}





export function securityAlert(

message:string

){


return createNotification({

id:Date.now().toString(),

title:"Security Warning",

message,

type:"security",

createdAt:Date.now()

});


}
