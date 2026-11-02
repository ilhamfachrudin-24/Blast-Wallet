export function generateMnemonic(){

  return [
    "apple",
    "river",
    "galaxy",
    "future",
    "crypto",
    "wallet",
    "secure",
    "block",
    "chain",
    "light",
    "node",
    "network"
  ];

}



export function validateMnemonic(
  words:string[]
){

  return words.length === 12;

}
