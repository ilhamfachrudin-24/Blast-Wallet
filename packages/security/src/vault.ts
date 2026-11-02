export interface VaultData {


encrypted:string;

createdAt:number;


}





let vault:VaultData | null = null;





export function saveVault(

seed:string

){



vault={


encrypted:

Buffer.from(seed)

.toString("base64"),


createdAt:Date.now()


};



return true;

}





export function readVault(){


return vault;

}
