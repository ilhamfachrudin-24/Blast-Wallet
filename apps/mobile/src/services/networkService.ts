import {

getCurrentNetwork,

switchNetwork

} from "@blast-wallet/blockchain";





export function currentNetwork(){


return getCurrentNetwork();


}





export function changeNetwork(

network:any

){


return switchNetwork(

network

);


}
