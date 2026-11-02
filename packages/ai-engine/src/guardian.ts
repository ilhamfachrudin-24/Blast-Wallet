export interface GuardianResult {


safe:boolean;

score:number;

level:string;

message:string;


}



export function analyzeTransactionRisk(

transaction:any

):GuardianResult{


let score = 100;


if(!transaction.to){

score -= 50;

}



if(transaction.amount > 100){

score -= 20;

}



if(transaction.to?.includes("scam")){

score -= 80;

}




let level = "SAFE";


if(score < 70){

level = "WARNING";

}


if(score < 40){

level = "DANGER";

}




return {


safe: score >= 70,


score,


level,


message:

level === "SAFE"

?

"Transaction looks safe"

:

"Review transaction before signing"


};


}
