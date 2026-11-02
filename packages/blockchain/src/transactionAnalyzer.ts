export function analyzeTransaction(

from:string,

to:string,

wallet:string

){



return {


type:

from===wallet ?

"Outgoing"

:

"Incoming",


from,


to


};


}
