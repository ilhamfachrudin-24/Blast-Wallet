export interface LendingRequest {


asset:string;

amount:number;


}



export function supplyAsset(

request:LendingRequest

){



return {


status:"supplied",


asset:request.asset,


amount:request.amount


};


}
