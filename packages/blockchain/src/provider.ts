export interface NetworkProvider {

  name:string;

  rpc:string;

}



export const SolanaProvider:NetworkProvider = {

  name:"Solana",

  rpc:"https://api.mainnet-beta.solana.com"

};



export const EthereumProvider:NetworkProvider = {

  name:"Ethereum",

  rpc:"https://ethereum.publicnode.com"

};
