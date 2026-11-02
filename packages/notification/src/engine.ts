export interface Notification {


id:string;

title:string;

message:string;

type:string;

createdAt:number;


}





let notifications:Notification[]=[];





export function createNotification(

data:Notification

){


notifications.push(data);


return data;


}





export function getNotifications(){


return notifications;


}
