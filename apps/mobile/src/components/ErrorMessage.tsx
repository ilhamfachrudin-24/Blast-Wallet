import React from "react";


import {

Text

} from "react-native";


import {

Colors

} from "../theme/theme";





export default function ErrorMessage({

message

}:any){



return (

<Text

style={{

color:Colors.danger

}}

>

{message}

</Text>

);

}
