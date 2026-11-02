export interface AIResponse {


message:string;

type:string;


}




export function askWalletAI(

question:string,

context:any

):AIResponse{



return {


type:"assistant",


message:

`Blast AI analyzed your wallet. Your question: ${question}`


};


}
