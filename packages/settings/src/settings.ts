export interface UserSettings {


theme:string;

currency:string;

language:string;

notifications:boolean;


}





let settings:UserSettings={


theme:"dark",


currency:"USD",


language:"English",


notifications:true


};





export function getSettings(){


return settings;


}





export function updateSettings(

data:Partial<UserSettings>

){


settings={


...settings,


...data


};



return settings;


}
