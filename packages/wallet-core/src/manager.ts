export interface ManagedWallet {


id:string;

name:string;

address:string;


}





let wallets:ManagedWallet[]=[];


let activeWallet:string|null=null;





export function createWallet(

name:string,

address:string

){


const wallet={


id:Date.now().toString(),


name,


address


};



wallets.push(wallet);


if(!activeWallet){

activeWallet=wallet.id;

}


return wallet;

}





export function getWallets(){


return wallets;

}





export function switchWallet(

id:string

){


activeWallet=id;


return id;

}





export function getActiveWallet(){


return wallets.find(

wallet=>wallet.id===activeWallet

);

}
