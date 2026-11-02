import {

executeSwap,

stakeAsset,

supplyAsset

} from "@blast-wallet/defi";





export function swapToken(data:any){

return executeSwap(data);

}




export function stakeToken(data:any){

return stakeAsset(data);

}





export function lendToken(data:any){

return supplyAsset(data);

}
