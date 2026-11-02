export interface DApp {


name:string;

url:string;

category:string;

icon?:string;


}





let dapps:DApp[]=[

{

name:"Jupiter",

url:"https://jup.ag",

category:"DEX"

},


{

name:"Aave",

url:"https://aave.com",

category:"DeFi"

}


];





export function getDApps(){


return dapps;


}





export function addDApp(

app:DApp

){


dapps.push(app);


return app;


}
