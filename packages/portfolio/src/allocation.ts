export interface Allocation {


symbol:string;

percentage:number;


}





export function calculateAllocation(

assets:any[]

):Allocation[]{



const total = assets.reduce(

(sum,item)=>sum + (item.value || 0),

0

);



return assets.map(asset=>({


symbol:asset.symbol,


percentage:

total ?

(asset.value / total) * 100

:

0


}));


}
