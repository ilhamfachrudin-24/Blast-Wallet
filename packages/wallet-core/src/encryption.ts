export function encrypt(
data:string,
password:string
){

  return `ENCRYPTED_${data}`;

}



export function decrypt(
encrypted:string,
password:string
){

  return encrypted.replace(
    "ENCRYPTED_",
    ""
  );

}
