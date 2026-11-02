export interface RiskReport {


score:number;

level:string;

warnings:string[];


}





export function analyzeRisk(

token:any

):RiskReport{



let score = 50;


const warnings:string[]=[];



if(!token.liquidity){


score -=20;


warnings.push(

"Low liquidity detected"

);


}



if(!token.contractVerified){


score -=20;


warnings.push(

"Contract verification missing"

);


}





return {


score,


level:

score >=70 ?

"Low Risk"

:

"High Risk",


warnings


};


}
