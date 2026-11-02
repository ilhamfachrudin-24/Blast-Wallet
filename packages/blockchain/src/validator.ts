export interface ValidationResult {

valid:boolean;

message:string;

}



export function validateTransaction(
amount:number,
address:string
):ValidationResult{


if(amount <= 0){

return {

valid:false,

message:"Invalid amount"

};

}



if(!address){

return {

valid:false,

message:"Missing recipient address"

};

}



return {

valid:true,

message:"Transaction valid"

};


}
