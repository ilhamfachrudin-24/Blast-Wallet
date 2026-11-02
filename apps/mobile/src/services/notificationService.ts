import {

createNotification,

getNotifications

} from "@blast-wallet/notification";





export function sendNotification(

data:any

){


return createNotification(data);

}





export function loadNotifications(){


return getNotifications();


}
