export interface Transaction {

  from:string;

  to:string;

  amount:number;

  asset:string;

}



export function createTransaction(

data:Transaction

){

  return {

    status:"pending",

    transaction:data

  };

}
