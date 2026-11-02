export interface SignedTransaction {

  hash:string;

  status:string;

  network:string;

}



export interface TransactionPayload {

  from:string;

  to:string;

  amount:number;

  asset:string;

}



export function signTransaction(
transaction:TransactionPayload,
privateKey:string
):SignedTransaction{


return {


hash:
"transaction_hash_generated",


status:
"signed",


network:
transaction.asset


};


}
