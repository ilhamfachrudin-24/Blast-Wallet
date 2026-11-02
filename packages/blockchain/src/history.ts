export interface TransactionHistory {


hash:string;

status:string;

timestamp:number;


}



let history:TransactionHistory[]=[];




export function saveTransaction(

tx:TransactionHistory

){


history.push(tx);


}




export function getTransactionHistory(){


return history;

}
