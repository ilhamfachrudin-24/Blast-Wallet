import React from "react";


import {

ActivityIndicator,

View

} from "react-native";


import {

Colors

} from "../theme/theme";





export default function Loading(){



return (

<View>

<ActivityIndicator

size="large"

color={Colors.primary}

/>

</View>

);

}
