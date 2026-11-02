import {

calculatePortfolio,

calculateAllocation

} from "@blast-wallet/portfolio";





export function analyzePortfolio(

assets:any[]

){



return {


stats:

calculatePortfolio(assets),



allocation:

calculateAllocation(assets)


};


}
