import {

getSettings,

updateSettings

} from "@blast-wallet/settings";





export function settings(){


return getSettings();


}





export function saveSettings(

data:any

){


return updateSettings(data);


}
