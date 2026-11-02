import {
  generateMnemonic as bip39GenerateMnemonic,
  validateMnemonic as bip39ValidateMnemonic
} from "@scure/bip39";


import {
  wordlist
} from "@scure/bip39/wordlists/english";



export function generateMnemonic(){

  return bip39GenerateMnemonic(
    wordlist
  );

}



export function validateMnemonic(
phrase:string
){

  return bip39ValidateMnemonic(
    phrase,
    wordlist
  );

}
