export interface RouteQuote {


fromToken:string;

toToken:string;

amount:number;

estimatedOutput:number;

provider:string;


}



export function getSwapQuote(

fromToken:string,

toToken:string,

amount:number

):RouteQuote{


return {


fromToken,


toToken,


amount,


estimatedOutput:

amount * 0.99,


provider:

"Blast Swap Router"


};


}
