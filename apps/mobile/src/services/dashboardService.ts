import {

loadWallet

} from "@blast-wallet/wallet-core";


import {

getSecurityStatus

} from "@blast-wallet/wallet-core";


import {

scanTokens,

calculatePortfolio

} from "@blast-wallet/portfolio";





export async function getDashboardData(){


const wallet =
loadWallet();



const tokens =

scanTokens(

wallet.address

);



const portfolio =

await calculatePortfolio(

tokens

);



return {


wallet,


tokens,


portfolio,


security:

getSecurityStatus()


};


}
