export interface BridgeRequest {


fromChain:string;

toChain:string;

token:string;

amount:number;


}



export interface BridgeQuote {


fee:number;

estimatedTime:number;

provider:string;


}





export function getBridgeQuote(

request:BridgeRequest

):BridgeQuote{


return {


fee:0.001,


estimatedTime:300,


provider:"Bridge Router"


};


}
