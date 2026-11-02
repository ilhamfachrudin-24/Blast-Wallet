export interface PortfolioStats {


totalValue:number;

profitLoss:number;

changePercent:number;


}





export function calculatePortfolio(

assets:any[]

):PortfolioStats{



let value = 0;


assets.forEach(asset=>{


value += asset.value || 0;


});





return {


totalValue:value,


profitLoss:0,


changePercent:0


};


}
