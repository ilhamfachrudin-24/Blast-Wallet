export interface StakeRequest {


asset:string;

amount:number;


}



export function stakeAsset(

request:StakeRequest

){



return {


status:"staked",


asset:request.asset,


amount:request.amount


};


}
