export interface DAppRequest {

type:string;

payload:any;

}



export function approveRequest(
request:DAppRequest
){


return {

approved:true,

request

};


}



export function rejectRequest(
request:DAppRequest
){


return {

approved:false,

request

};


}
