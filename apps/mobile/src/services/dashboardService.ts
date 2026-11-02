import {

loadWallet

} from "@blast-wallet/wallet-core";


import {

getSecurityStatus

} from "@blast-wallet/wallet-core";


import {

analyzePortfolio

} from "@blast-wallet/ai-engine";


import {

getSolanaBalance,

getEthereumBalance

} from "@blast-wallet/blockchain";


import {

scanTokens,

calculatePortfolio

} from "@blast-wallet/portfolio";





export async function getDashboardData(){


const wallet = loadWallet();



const security =
getSecurityStatus();



const tokens =

scanTokens(

wallet.address

);



const portfolio =

calculatePortfolio(

tokens

);



let solBalance = null;

let ethBalance = null;




try{


solBalance =

await getSolanaBalance(

wallet.address

);



}catch(e){}





try{


ethBalance =

await getEthereumBalance(

wallet.address

);



}catch(e){}






return {


wallet,

security,

solBalance,

ethBalance,

tokens,

portfolio


};


}
