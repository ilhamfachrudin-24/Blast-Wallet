let storedPin:string|null=null;





export function setPIN(

pin:string

){


storedPin=pin;


return true;

}





export function verifyPIN(

pin:string

){


return storedPin===pin;


}
