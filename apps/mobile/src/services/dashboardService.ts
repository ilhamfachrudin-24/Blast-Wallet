import {

activeWallet

} from "./walletManagerService";


import {

analyzePortfolio

} from "./portfolioAIService";


import {

getSecurityScore

} from "./securityService";





export function dashboardData(){


return {


wallet:

activeWallet(),


portfolio:

analyzePortfolio([]),


security:

getSecurityScore()


};


}
