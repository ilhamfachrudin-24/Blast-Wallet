import {

buildTransaction,

signTransaction,

broadcastTransaction

} from "@blast-wallet/blockchain";


import {

analyzeTransactionRisk

} from "@blast-wallet/ai-engine";





export async function sendTransaction(

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





const broadcast =

await broadcastTransaction(

signed.raw

);





return {


status:

broadcast.status,


hash:

broadcast.txHash,


security


};


}
