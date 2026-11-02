export interface LockConfig {


enabled:boolean;

method:string;

timeout:number;


}





let config:LockConfig={


enabled:true,


method:"biometric",


timeout:300


};





export function getLockConfig(){


return config;


}





export function updateLockConfig(

data:Partial<LockConfig>

){


config={


...config,


...data


};


return config;


}
