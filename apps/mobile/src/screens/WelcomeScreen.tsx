import React from "react";

import {
 View,
 Text,
 TouchableOpacity,
 StyleSheet
} from "react-native";


import {
 Colors,
 Radius
} from "../theme/theme";


export default function WelcomeScreen({navigation}:any){


return(

<View style={styles.container}>


<Text style={styles.icon}>
⚡
</Text>


<Text style={styles.title}>
Welcome to Blast
</Text>


<Text style={styles.description}>

Your secure gateway
to the decentralized world.

</Text>



<TouchableOpacity
style={styles.primaryButton}
onPress={()=>{}}
>

<Text style={styles.primaryText}>
Create Wallet
</Text>

</TouchableOpacity>



<TouchableOpacity
style={styles.secondaryButton}
onPress={()=>{}}
>

<Text style={styles.secondaryText}>
Import Wallet
</Text>

</TouchableOpacity>


</View>

)

}



const styles=StyleSheet.create({

container:{
flex:1,
backgroundColor:Colors.background,
justifyContent:"center",
padding:24
},


icon:{
fontSize:80,
textAlign:"center"
},


title:{
marginTop:30,
color:Colors.white,
fontSize:32,
fontWeight:"800",
textAlign:"center"
},


description:{
marginTop:16,
color:Colors.gray,
fontSize:16,
textAlign:"center",
lineHeight:24
},


primaryButton:{
marginTop:50,
backgroundColor:Colors.primary,
padding:18,
borderRadius:Radius.large,
alignItems:"center"
},


primaryText:{
color:Colors.background,
fontWeight:"700",
fontSize:16
},


secondaryButton:{
marginTop:16,
padding:18,
borderRadius:Radius.large,
borderWidth:1,
borderColor:Colors.primary,
alignItems:"center"
},


secondaryText:{
color:Colors.primary,
fontWeight:"700",
fontSize:16
}


});
