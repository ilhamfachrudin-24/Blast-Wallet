import React from "react";


import {

View,

StyleSheet

} from "react-native";


import {

Colors,

Radius

} from "../theme/theme";





export default function GlassCard({

children

}:any){



return (

<View style={styles.card}>

{children}

</View>

);

}





const styles=StyleSheet.create({

card:{


backgroundColor:Colors.card,


borderRadius:Radius.large,


padding:20,


borderWidth:1,


borderColor:"#222"


}

});
