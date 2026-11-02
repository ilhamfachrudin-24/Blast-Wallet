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



export default function ImportWalletScreen(){

return(

<View style={styles.container}>


<Text style={styles.icon}>
📥
</Text>


<Text style={styles.title}>
Import Wallet
</Text>


<Text style={styles.description}>

Restore your existing wallet
using your recovery phrase.

</Text>



<View style={styles.inputBox}>

<Text style={styles.placeholder}>
Recovery phrase input
</Text>

</View>



<TouchableOpacity
style={styles.button}
>

<Text style={styles.buttonText}>
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
padding:24,
justifyContent:"center"
},


icon:{
fontSize:70,
textAlign:"center"
},


title:{
marginTop:30,
color:Colors.white,
fontSize:30,
fontWeight:"800",
textAlign:"center"
},


description:{
marginTop:15,
color:Colors.gray,
fontSize:16,
textAlign:"center"
},


inputBox:{
marginTop:40,
height:120,
backgroundColor:Colors.card,
borderRadius:Radius.medium,
borderWidth:1,
borderColor:"#333",
justifyContent:"center",
padding:20
},


placeholder:{
color:Colors.gray
},


button:{
marginTop:30,
backgroundColor:Colors.primary,
padding:18,
borderRadius:Radius.large,
alignItems:"center"
},


buttonText:{
color:Colors.background,
fontWeight:"700"
}


});
