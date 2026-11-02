import {

getGasPrice,

optimizeFee

} from "@blast-wallet/blockchain";





export function gasData(

network:string

){


return getGasPrice(network);


}





export function recommendedFee(

mode:string

){


return optimizeFee(mode);


}
