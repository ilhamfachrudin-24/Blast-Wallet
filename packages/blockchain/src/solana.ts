export function getSolanaBalance(
address:string
){

  return {

    address,

    balance:0,

    asset:"SOL"

  };

}



export function sendSolanaTransaction(){

  return {

    status:"created",

    network:"Solana"

  };

}
