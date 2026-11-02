export interface DAppSession {

  id:string;

  appName:string;

  url:string;

  connected:boolean;

}



let session:DAppSession | null = null;



export function connectDApp(
appName:string,
url:string
){


session = {

id:"session_001",

appName,

url,

connected:true

};


return session;

}



export function getSession(){

return session;

}



export function disconnectDApp(){

session = null;

}
