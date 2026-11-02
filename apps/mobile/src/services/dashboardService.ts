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





export async function getDashboardData(){


const wallet =

loadWallet();



const security =

getSecurityStatus();



const portfolio =

analyzePortfolio([]);



let solBalance = null;

let ethBalance = null;




if(wallet?.address){


try{


solBalance =

await getSolanaBalance(

wallet.address

);



}catch(error){


console.log(
"Solana balance error",
error
);


}



try{


ethBalance =

await getEthereumBalance(

wallet.address

);



}catch(error){


console.log(
"Ethereum balance error",
error
);


}


}




return {


wallet,

security,

portfolio,

solBalance,

ethBalance


};


}
