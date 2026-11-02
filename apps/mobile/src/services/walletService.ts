import {
  createWallet,
  saveWallet
} from "@blast-wallet/wallet-core";



export function generateNewWallet(){


  const wallet = createWallet();


  saveWallet(wallet);


  return wallet;

}
