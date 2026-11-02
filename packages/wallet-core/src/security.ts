export interface SecurityStatus {

  biometricEnabled:boolean;

  encrypted:boolean;

  backupCompleted:boolean;

}



export function getSecurityStatus()
:SecurityStatus{


return {

biometricEnabled:false,

encrypted:true,

backupCompleted:false

};


}
