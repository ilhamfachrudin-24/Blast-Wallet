import {

getTransactions,

addTransaction

} from "@blast-wallet/blockchain";





export function transactionHistory(){


return getTransactions();


}





export function saveTransaction(

data:any

){


return addTransaction(data);


}
