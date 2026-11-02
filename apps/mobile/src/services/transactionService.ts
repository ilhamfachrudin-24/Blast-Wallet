import {

buildTransaction,

signTransaction

} from "@blast-wallet/blockchain";


import {

analyzeTransactionRisk

} from "@blast-wallet/ai-engine";





export function createWalletTransaction(

data:any

){



const transaction =

buildTransaction(data);





const security =

analyzeTransactionRisk(

transaction

);





if(!security.safe){


return {


status:"blocked",


security


};


}





const signed =

signTransaction(

transaction,

"LOCAL_VAULT_KEY"

);





return {


status:"signed",


transaction:signed,


security


};


}
