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



export default function SettingsScreen(){


const items = [

"🔐 Security",

"👆 Biometric Lock",

"💾 Backup Wallet",

"🌐 Connected dApps",

"⛓ Network",

"ℹ About Blast Wallet"

];


return (

<View style={styles.container}>


<Text style={styles.title}>
Settings
</Text>



<View style={styles.card}>


{
items.map((item,index)=>(


<TouchableOpacity

key={index}

style={styles.item}

>


<Text style={styles.itemText}>
{item}
</Text>


<Text style={styles.arrow}>
›
</Text>


</TouchableOpacity>


))
}


</View>



<Text style={styles.version}>
Blast Wallet v1.0.0
</Text>


</View>

);

}



const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:Colors.background,
padding:24
},


title:{
marginTop:40,
color:Colors.white,
fontSize:32,
fontWeight:"800"
},


card:{
marginTop:30,
backgroundColor:Colors.card,
borderRadius:Radius.large,
padding:10
},


item:{
height:60,
flexDirection:"row",
alignItems:"center",
justifyContent:"space-between",
paddingHorizontal:15,
borderBottomWidth:1,
borderBottomColor:"#222"
},


itemText:{
color:Colors.white,
fontSize:16
},


arrow:{
color:Colors.gray,
fontSize:30
},


version:{
marginTop:40,
textAlign:"center",
color:Colors.gray
}


});
