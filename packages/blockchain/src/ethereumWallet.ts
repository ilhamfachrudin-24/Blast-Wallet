import {

Wallet

} from "ethers";



export interface EthereumWallet {


address:string;

privateKey:string;


}



export function createEthereumWallet()
:EthereumWallet{


const wallet =
Wallet.createRandom();



return {


address:
wallet.address,


privateKey:
wallet.privateKey


};


}



export function getEthereumAddress(
wallet:EthereumWallet
){


return wallet.address;

}
