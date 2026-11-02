import React from "react";


import {

TouchableOpacity,

Text,

StyleSheet

} from "react-native";


import {

Colors,

Radius

} from "../theme/theme";





export default function PrimaryButton({

title,

onPress

}:any){



return (

<TouchableOpacity

onPress={onPress}

style={styles.button}

>


<Text style={styles.text}>

{title}

</Text>


</TouchableOpacity>

);

}





const styles=StyleSheet.create({

button:{

backgroundColor:Colors.primary,

padding:18,

borderRadius:Radius.large,

alignItems:"center"

},


text:{

color:Colors.white,

fontWeight:"800",

fontSize:16

}


});
