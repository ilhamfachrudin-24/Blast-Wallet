import {

validateTransaction,

signTransaction

} from "@blast-wallet/blockchain";


import {

analyzeTransaction

} from "@blast-wallet/ai-engine";



export function prepareTransaction(

data:any

){



const validation =

validateTransaction(

data.amount,

data.to

);



if(!validation.valid){

return {

success:false,

message:
validation.message

};

}




const security =

analyzeTransaction(data);



if(security.score < 70){

return {

success:false,

message:
"Transaction blocked by AI Security"

};

}




const signed =

signTransaction(

data,

"wallet_private_key"

);



return {

success:true,

transaction:signed

};


}
