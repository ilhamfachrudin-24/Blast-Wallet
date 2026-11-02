export interface TransactionRequest {


from:string;

to:string;

amount:number;

asset:string;


}



export function buildTransaction(

request:TransactionRequest

){



return {


from:

request.from,


to:

request.to,


amount:

request.amount,


asset:

request.asset,


timestamp:

Date.now()


};


}
