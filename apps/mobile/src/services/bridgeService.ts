import {

getBridgeQuote,

findBridgeRoute,

checkBridgeRisk

} from "@blast-wallet/bridge";





export function createBridge(

data:any

){



const quote =

getBridgeQuote(data);



const route =

findBridgeRoute(

data.fromChain,

data.toChain

);



const security =

checkBridgeRisk(

data.amount

);



return {


quote,


route,


security


};


}
