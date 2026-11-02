export interface APYData {


protocol:string;

apy:number;


}





export function getAPY(

protocol:string

):APYData{


return {


protocol,


apy:8.5


};


}
