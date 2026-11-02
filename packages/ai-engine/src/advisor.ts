export interface PortfolioAdvice {


riskLevel:string;

message:string;


}



export function generateAdvice(

portfolio:any

):PortfolioAdvice{


return {


riskLevel:"Moderate",


message:

"Review portfolio diversification and risk exposure"


};


}
