export interface TransactionRecord {


hash:string;

type:string;

amount:number;

token:string;

status:string;

timestamp:number;


}





let transactions:TransactionRecord[]=[];





export function addTransaction(

tx:TransactionRecord

){


transactions.push(tx);


return tx;


}





export function getTransactions(){


return transactions;


}
