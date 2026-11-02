import {

verifyPIN,

setPIN,

getLockConfig

} from "@blast-wallet/security";





export function createPIN(

pin:string

){


return setPIN(pin);


}





export function unlock(

pin:string

){


return verifyPIN(pin);


}





export function securityConfig(){


return getLockConfig();


}
