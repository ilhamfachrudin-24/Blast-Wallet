import {
loadWallet
} from "@blast-wallet/wallet-core";


import {
getSecurityStatus
} from "@blast-wallet/wallet-core";


import {
analyzePortfolio
} from "@blast-wallet/ai-engine";



export function getDashboardData(){


const wallet = loadWallet();


const security =
getSecurityStatus();



const portfolio =
analyzePortfolio([]);



return {

wallet,

security,

portfolio

};


}
