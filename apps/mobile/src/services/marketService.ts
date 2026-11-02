import {

getTokenPrice,

addWatchToken,

getWatchlist

} from "@blast-wallet/market";





export function price(

symbol:string

){


return getTokenPrice(symbol);


}





export function watch(

symbol:string

){


return addWatchToken(symbol);


}





export function watchTokens(){


return getWatchlist();


}
