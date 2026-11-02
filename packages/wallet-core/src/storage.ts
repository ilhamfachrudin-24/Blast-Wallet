import {
Wallet
} from "./wallet";


let walletStorage:Wallet | null = null;



export function saveWallet(
wallet:Wallet
){

  walletStorage = wallet;

}



export function loadWallet(){

  return walletStorage;

}



export function clearWallet(){

  walletStorage = null;

}
