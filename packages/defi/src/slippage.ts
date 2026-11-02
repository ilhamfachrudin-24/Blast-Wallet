export function checkSlippage(

impact:number

){



return {


safe:

impact < 3,


impact


};


}
