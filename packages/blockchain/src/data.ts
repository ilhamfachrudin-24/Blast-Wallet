export interface BlockchainBalance {


address:string;

network:string;

balance:number;


}





export async function getBalance(

address:string,

network:string

):Promise<BlockchainBalance>{



return {


address,


network,


balance:0


};


}
