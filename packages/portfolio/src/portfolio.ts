import {

Token

} from "./scanner";





export function calculatePortfolio(

tokens:Token[]

){



let total = 0;



tokens.forEach(token=>{


total += token.balance;


});



return {


assets:tokens,


totalValue:total


};


}
