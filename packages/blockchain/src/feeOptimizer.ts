export function optimizeFee(

priority:string

){



const fees:any={


slow:10,


normal:20,


fast:30


};



return {


priority,


fee:

fees[priority] || fees.normal


};


}
