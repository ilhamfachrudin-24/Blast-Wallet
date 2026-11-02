import {

getTokenPrice

} from "./priceAPI";





export async function syncPrice(

tokens:string[]

){



const result=[];



for(const token of tokens){


result.push(

await getTokenPrice(token)

);


}





return result;

}
