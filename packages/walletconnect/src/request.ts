export interface DAppRequest {


method:string;

params:any;


}



export function handleRequest(

request:DAppRequest

){



return {


approved:true,


method:request.method,


result:"signed"


};


}
