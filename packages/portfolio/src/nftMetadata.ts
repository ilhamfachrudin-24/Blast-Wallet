export interface NFTMetadata {


name:string;

description:string;

image:string;


}





export function getNFTMetadata(

id:string

):NFTMetadata{


return {


name:"Blast NFT",

description:

"Web3 collectible asset",


image:""


};


}
