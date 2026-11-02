export interface WalletConnectSession {


id:string;

peerName:string;

peerUrl:string;

connected:boolean;


}



let activeSession:
WalletConnectSession | null = null;




export function createSession(

name:string,

url:string

){


activeSession = {


id:
"wc_session_001",


peerName:name,


peerUrl:url,


connected:true


};



return activeSession;


}





export function getSession(){


return activeSession;


}





export function disconnectSession(){


activeSession = null;


}
