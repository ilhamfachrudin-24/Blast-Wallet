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



export default function ReceiveWalletScreen(){


return (

<View style={styles.container}>


<Text style={styles.title}>
Receive Crypto
</Text>


<Text style={styles.subtitle}>
Share your wallet address
to receive assets
</Text>




<View style={styles.qrBox}>

<Text style={styles.qr}>
▦
</Text>


<Text style={styles.qrText}>
QR Code
</Text>

</View>





<Text style={styles.label}>
Your Wallet Address
</Text>



<View style={styles.addressBox}>


<Text style={styles.address}>
0x82F9A72C91B8...
</Text>


</View>





<TouchableOpacity

style={styles.button}

>

<Text style={styles.buttonText}>
Copy Address
</Text>


</TouchableOpacity>




<TouchableOpacity

style={styles.secondaryButton}

>

<Text style={styles.secondaryText}>
Share Address
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
fontWeight:"800",
textAlign:"center"
},


subtitle:{
marginTop:12,
color:Colors.gray,
textAlign:"center",
lineHeight:22
},


qrBox:{
marginTop:40,
height:220,
backgroundColor:Colors.card,
borderRadius:Radius.large,
justifyContent:"center",
alignItems:"center",
borderWidth:1,
borderColor:Colors.primary
},


qr:{
fontSize:90,
color:Colors.white
},


qrText:{
color:Colors.gray,
marginTop:10
},


label:{
marginTop:30,
color:Colors.white,
fontWeight:"700"
},


addressBox:{
marginTop:10,
backgroundColor:Colors.card,
padding:20,
borderRadius:Radius.medium
},


address:{
color:Colors.primary,
fontSize:14
},


button:{
marginTop:25,
backgroundColor:Colors.primary,
padding:18,
borderRadius:Radius.large,
alignItems:"center"
},


buttonText:{
color:Colors.background,
fontWeight:"700"
},


secondaryButton:{
marginTop:15,
borderWidth:1,
borderColor:Colors.primary,
padding:18,
borderRadius:Radius.large,
alignItems:"center"
},


secondaryText:{
color:Colors.primary,
fontWeight:"700"
}


});
