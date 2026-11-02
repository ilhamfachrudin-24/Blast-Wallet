export interface NFT {


id:string;

name:string;

collection:string;

image:string;


}




export function scanNFTs(

address:string

):NFT[]{



return [

{

id:"1",

name:"Blast NFT",

collection:"Blast Collection",

image:""


}

];


}
