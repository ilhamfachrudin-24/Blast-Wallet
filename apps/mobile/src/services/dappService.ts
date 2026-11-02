import {

getDApps,

favoriteDApp

} from "@blast-wallet/dapp";





export function discoverDApps(){


return getDApps();


}





export function saveFavorite(

name:string

){


return favoriteDApp(name);


}
