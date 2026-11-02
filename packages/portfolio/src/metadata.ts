export interface TokenMetadata {


address:string;

symbol:string;

name:string;

decimals:number;

logo?:string;


}



export function getTokenMetadata(

address:string

):TokenMetadata{


return {


address,


symbol:"TOKEN",


name:"Unknown Token",


decimals:9,


logo:""


};


}
