export interface BridgeRoute {


path:string[];

provider:string;


}





export function findBridgeRoute(

from:string,

to:string

):BridgeRoute{


return {


path:[

from,

to

],


provider:"Auto Router"


};


}
