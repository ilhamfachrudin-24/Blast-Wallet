export interface SignedTransaction {


raw:string;

signature:string;


}





export function signTransaction(

transaction:any,

privateKey:string

):SignedTransaction{



const payload =

JSON.stringify({

transaction,

privateKey

});




return {


raw:

Buffer.from(payload)

.toString("base64"),



signature:

"local_signature"


};


}
