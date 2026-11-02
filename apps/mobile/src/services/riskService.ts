import {

analyzeRisk,

scanContract

} from "@blast-wallet/ai-engine";





export function tokenRisk(

data:any

){


return analyzeRisk(data);


}





export function contractScan(

address:string

){


return scanContract(address);


}
