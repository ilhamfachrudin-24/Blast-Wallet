export interface GasData {


network:string;

slow:number;

normal:number;

fast:number;


}





export function getGasPrice(

network:string

):GasData{


return {


network,


slow:10,


normal:20,


fast:30


};


}
