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



export default function AISecurityScreen(){


return (

<View style={styles.container}>


<Text style={styles.icon}>
🛡
</Text>


<Text style={styles.title}>
Blast AI Guardian
</Text>


<Text style={styles.subtitle}>
AI powered transaction security
</Text>



<View style={styles.scoreCard}>


<Text style={styles.scoreLabel}>
Security Score
</Text>


<Text style={styles.score}>
95
</Text>


<Text style={styles.status}>
SAFE
</Text>


</View>




<View style={styles.analysis}>


<Text style={styles.heading}>
Transaction Analysis
</Text>


<Text style={styles.item}>
✓ Contract verified
</Text>


<Text style={styles.item}>
✓ No malicious permission detected
</Text>


<Text style={styles.item}>
✓ Wallet risk: Low
</Text>


</View>




<TouchableOpacity

style={styles.button}

>


<Text style={styles.buttonText}>
Scan Transaction
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


icon:{
fontSize:70,
textAlign:"center"
},


title:{
marginTop:20,
color:Colors.white,
fontSize:32,
fontWeight:"800",
textAlign:"center"
},


subtitle:{
marginTop:10,
color:Colors.gray,
textAlign:"center"
},


scoreCard:{
marginTop:40,
backgroundColor:Colors.card,
padding:30,
borderRadius:Radius.large,
alignItems:"center",
borderWidth:1,
borderColor:Colors.success
},


scoreLabel:{
color:Colors.gray
},


score:{
marginTop:10,
fontSize:60,
fontWeight:"800",
color:Colors.success
},


status:{
marginTop:5,
color:Colors.success,
fontWeight:"800"
},


analysis:{
marginTop:30,
backgroundColor:Colors.card,
padding:20,
borderRadius:Radius.medium
},


heading:{
color:Colors.white,
fontWeight:"700",
fontSize:18
},


item:{
marginTop:12,
color:Colors.success
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
