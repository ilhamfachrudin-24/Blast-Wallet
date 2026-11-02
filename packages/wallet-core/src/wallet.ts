import {
  generateMnemonic
} from "./mnemonic";



export interface Wallet {

  mnemonic: string[];

  privateKey: string;

  publicKey: string;

  address: string;

}



export function createWallet(): Wallet {


  const mnemonic = generateMnemonic();


  const privateKey =
    "PRIVATE_KEY_GENERATED";


  const publicKey =
    "PUBLIC_KEY_GENERATED";


  const address =
    "BLAST_WALLET_ADDRESS";


  return {

    mnemonic,

    privateKey,

    publicKey,

    address

  };


}



export function getAddress(
wallet:Wallet
){

  return wallet.address;

}
