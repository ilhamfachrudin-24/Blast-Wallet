export interface Session {


id:string;

appName:string;

url:string;

connected:boolean;


}





let sessions:Session[]=[];





export function createSession(

appName:string,

url:string

){


const session={


id:

Date.now().toString(),


appName,


url,


connected:true


};


sessions.push(session);


return session;


}





export function getSessions(){


return sessions;


}





export function disconnectSession(

id:string

){


sessions = sessions.filter(

item=>item.id !== id

);


return true;

}
