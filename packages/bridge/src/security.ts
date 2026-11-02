export function checkBridgeRisk(

amount:number

){



return {


safe:

amount < 10000,


risk:

amount >=10000 ?

"High"

:

"Low"


};


}
