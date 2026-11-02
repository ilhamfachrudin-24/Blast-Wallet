const words = [

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



export function generateMnemonic(){

  return words.join(" ");

}



export function validateMnemonic(
phrase:string
){

  const count =
  phrase.trim().split(" ").length;


  return (
    count === 12 ||
    count === 24
  );

}
