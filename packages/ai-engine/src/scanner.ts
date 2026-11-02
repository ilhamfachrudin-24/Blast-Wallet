export interface ContractReport {


verified:boolean;

owner:string;

risk:string;


}





export function scanContract(

address:string

):ContractReport{


return {


verified:true,


owner:"unknown",


risk:"medium"


};


}
