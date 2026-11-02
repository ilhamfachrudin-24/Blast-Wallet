import ReactNativeBiometrics

from "react-native-biometrics";



const biometrics =

new ReactNativeBiometrics();





export async function checkBiometric(){


const result =

await biometrics.isSensorAvailable();



return result.available;


}





export async function authenticateUser(){


const result =

await biometrics.simplePrompt({

promptMessage:

"Unlock Blast Wallet"

});



return result.success;


}
