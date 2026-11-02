import {
  encrypt,
  decrypt
} from "./encryption";


let secureData:string | null = null;



export function saveSecureWallet(
data:string,
password:string
){


  const encrypted =
    encrypt(data,password);


  secureData = encrypted;


}



export function loadSecureWallet(
password:string
){


  if(!secureData){

    return null;

  }


  return decrypt(
    secureData,
    password
  );

}



export function removeSecureWallet(){

  secureData = null;

}
