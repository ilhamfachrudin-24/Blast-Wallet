import {

scanTokens

} from "@blast-wallet/blockchain";





export async function syncPortfolio(

wallet:string

){



const assets = await scanTokens(wallet);





return {


assets,


updatedAt:Date.now()


};


}
