export interface WalletRequest {


method:string;

params:any;


}





export function approveRequest(

request:WalletRequest

){


return {


approved:true,

request


};


}





export function rejectRequest(

request:WalletRequest

){


return {


approved:false,

request


};


}
