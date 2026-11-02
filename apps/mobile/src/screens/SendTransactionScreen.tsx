import React from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";


import {
  Colors,
  Radius
} from "../theme/theme";



export default function SendTransactionScreen(){

return (

<View style={styles.container}>


<Text style={styles.title}>
Send Asset
</Text>


<Text style={styles.subtitle}>
Transfer your crypto securely
</Text>



<Text style={styles.label}>
Recipient Address
</Text>


<TextInput

style={styles.input}

placeholder="Wallet address"

placeholderTextColor={Colors.gray}

/>



<Text style={styles.label}>
Amount
</Text>


<TextInput

style={styles.input}

placeholder="0.00 SOL"

placeholderTextColor={Colors.gray}

keyboardType="numeric"

/>



<View style={styles.feeBox}>


<Text style={styles.feeTitle}>
Network Fee
</Text>


<Text style={styles.fee}>
0.000005 SOL
</Text>


</View>




<TouchableOpacity

style={styles.button}

>

<Text style={styles.buttonText}>
Review Transaction
</Text>


</TouchableOpacity>


</View>

);

}




const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:Colors.background,
padding:24,
justifyContent:"center"
},


title:{
color:Colors.white,
fontSize:32,
fontWeight:"800"
},


subtitle:{
marginTop:10,
color:Colors.gray
},


label:{
marginTop:25,
color:Colors.white,
fontWeight:"600"
},


input:{
marginTop:10,
backgroundColor:Colors.card,
height:55,
borderRadius:Radius.medium,
paddingHorizontal:15,
color:Colors.white,
borderWidth:1,
borderColor:"#333"
},


feeBox:{
marginTop:25,
backgroundColor:Colors.card,
padding:20,
borderRadius:Radius.medium
},


feeTitle:{
color:Colors.gray
},


fee:{
marginTop:5,
color:Colors.white,
fontWeight:"700"
},


button:{
marginTop:35,
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
