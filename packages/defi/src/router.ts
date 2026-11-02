export interface SwapRoute {


dex:string;

path:string[];




}





export function findRoute(

from:string,

to:string

):SwapRoute{


return {


dex:"Jupiter / Uniswap Router",


path:[

from,

to

]


};


}
