import {

getPositions,

addPosition,

getAPY

} from "@blast-wallet/defi";





export function positions(){


return getPositions();


}





export function deposit(

data:any

){


return addPosition(data);


}





export function protocolAPY(

name:string

){


return getAPY(name);


}
