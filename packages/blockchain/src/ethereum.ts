export function getEthereumBalance(
address:string
){

  return {

    address,

    balance:0,

    asset:"ETH"

  };

}



export function sendEthereumTransaction(){

  return {

    status:"created",

    network:"Ethereum"

  };

}
