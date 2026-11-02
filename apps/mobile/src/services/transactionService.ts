import {

validateTransaction,

signTransaction

} from "@blast-wallet/blockchain";


import {

analyzeTransactionRisk

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


message:validation.message


};


}




const guardian =

analyzeTransactionRisk(

data

);





if(!guardian.safe){


return {


success:false,


message:

guardian.message,


risk:guardian


};


}





const signed =

signTransaction(

data,


"wallet_private_key"

);





return {


success:true,


transaction:signed,


risk:guardian


};


}
