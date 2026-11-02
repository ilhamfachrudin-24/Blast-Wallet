import {

syncPrice

} from "@blast-wallet/market";





export async function calculateValue(

assets:any[]

){



const prices=

await syncPrice(

assets.map(

item=>item.symbol

)

);



let total=0;



assets.forEach(asset=>{


const price=

prices.find(

p=>p.symbol===asset.symbol

);



total +=

(asset.balance || 0)

*

(price?.price || 0);



});





return {


total,


prices


};


}
