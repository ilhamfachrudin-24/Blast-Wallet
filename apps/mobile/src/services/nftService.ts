import {

getNFTs,

addNFT

} from "@blast-wallet/portfolio";





export function loadNFTs(){


return getNFTs();


}





export function saveNFT(

data:any

){


return addNFT(data);


}
