import {

getExplorerUrl

} from "@blast-wallet/blockchain";





export function openTransactionExplorer(

chain:string,

hash:string

){



return getExplorerUrl(

chain,

hash

);


}
