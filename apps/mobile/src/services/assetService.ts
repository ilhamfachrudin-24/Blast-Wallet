import {

scanTokens,

scanNFTs

} from "@blast-wallet/portfolio";





export function getWalletAssets(

address:string

){



return {


tokens:

scanTokens(address),


nfts:

scanNFTs(address)


};


}
