import {

getBalance,

getRPC

} from "@blast-wallet/blockchain";





export async function walletBalance(

address:string,

network:string

){


return await getBalance(

address,

network

);


}





export function networkProvider(

network:string

){


return getRPC(network);


}
