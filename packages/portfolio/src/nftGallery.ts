export interface NFTAsset {


id:string;

name:string;

collection:string;

image:string;


}





let nfts:NFTAsset[]=[];





export function addNFT(

nft:NFTAsset

){


nfts.push(nft);


return nft;


}





export function getNFTs(){


return nfts;


}
