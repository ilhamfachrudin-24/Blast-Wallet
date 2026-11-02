export interface SwapQuote {


from:string;

to:string;

amount:number;

estimated:number;

priceImpact:number;


}





export function getSwapQuote(

from:string,

to:string,

amount:number

):SwapQuote{


return {


from,


to,


amount,


estimated:

amount * 0.98,


priceImpact:

0.5


};


}
