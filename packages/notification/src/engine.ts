export interface Notification {


id:string;

type:string;

title:string;

message:string;

createdAt:number;


}



let notifications:Notification[] = [];





export function createNotification(

data:Omit<Notification,"id"|"createdAt">

){


const notification = {


id:Date.now().toString(),


createdAt:Date.now(),


...data


};



notifications.push(notification);



return notification;

}





export function getNotifications(){


return notifications;


}





export function clearNotifications(){


notifications=[];


}
