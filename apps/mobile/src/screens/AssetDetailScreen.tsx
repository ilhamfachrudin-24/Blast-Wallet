import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from "react-native";


import {
  Colors,
  Radius
} from "../theme/theme";


export default function AssetDetailScreen(){

return (

<View style={styles.container}>


<ScrollView>


<Text style={styles.title}>
Solana
</Text>


<Text style={styles.symbol}>
SOL
</Text>



<View style={styles.balanceCard}>


<Text style={styles.label}>
Your Balance
</Text>


<Text style={styles.balance}>
12.50 SOL
</Text>


<Text style={styles.usd}>
≈ $2,000 USD
</Text>


</View>



<View style={styles.actions}>


<TouchableOpacity style={styles.button}>

<Text style={styles.buttonText}>
Send
</Text>

</TouchableOpacity>



<TouchableOpacity style={styles.button}>

<Text style={styles.buttonText}>
Receive
</Text>

</TouchableOpacity>


</View>




<Text style={styles.section}>
Price Chart
</Text>



<View style={styles.chart}>


<Text style={styles.chartText}>
SOL Price Chart
</Text>


<Text style={styles.chartPlaceholder}>
────────────
╱╲╱╲╱╲
────────────
</Text>


</View>




<Text style={styles.section}>
Transactions
</Text>



<View style={styles.transaction}>


<Text style={styles.transactionTitle}>
Received SOL
</Text>


<Text style={styles.transactionInfo}>
+2.5 SOL
</Text>


</View>



<View style={styles.transaction}>


<Text style={styles.transactionTitle}>
Sent SOL
</Text>


<Text style={styles.transactionInfo}>
-0.8 SOL
</Text>


</View>



</ScrollView>


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
marginTop:30,
color:Colors.white,
fontSize:32,
fontWeight:"800"
},


symbol:{
color:Colors.primary,
fontSize:18,
marginTop:5
},


balanceCard:{
marginTop:30,
backgroundColor:Colors.card,
padding:25,
borderRadius:Radius.large,
borderWidth:1,
borderColor:Colors.primary
},


label:{
color:Colors.gray
},


balance:{
color:Colors.white,
fontSize:34,
fontWeight:"800",
marginTop:10
},


usd:{
color:Colors.gray,
marginTop:8
},


actions:{
flexDirection:"row",
gap:15,
marginTop:25
},


button:{
flex:1,
backgroundColor:Colors.primary,
padding:16,
borderRadius:Radius.medium,
alignItems:"center"
},


buttonText:{
color:Colors.background,
fontWeight:"700"
},


section:{
color:Colors.white,
fontSize:22,
fontWeight:"700",
marginTop:35
},


chart:{
marginTop:15,
height:180,
backgroundColor:Colors.card,
borderRadius:Radius.medium,
justifyContent:"center",
alignItems:"center"
},


chartText:{
color:Colors.gray
},


chartPlaceholder:{
marginTop:20,
color:Colors.primary
},


transaction:{
marginTop:15,
backgroundColor:Colors.card,
padding:18,
borderRadius:Radius.medium,
flexDirection:"row",
justifyContent:"space-between"
},


transactionTitle:{
color:Colors.white
},


transactionInfo:{
color:Colors.success,
fontWeight:"700"
}


});
