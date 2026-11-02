import React from "react";

import {
View,
Text,
StyleSheet
} from "react-native";


import {
Colors,
Radius
} from "../theme/theme";


import {
getDashboardData
} from "../services/dashboardService";



export default function WalletDashboardScreen(){


const data =
getDashboardData();



return (

<View style={styles.container}>


<Text style={styles.logo}>
⚡
</Text>


<Text style={styles.title}>
Blast Wallet
</Text>



<View style={styles.card}>


<Text style={styles.label}>
Wallet Address
</Text>


<Text style={styles.address}>
{
data.wallet?.address ??
"Generate Wallet First"
}
</Text>


</View>



<View style={styles.card}>


<Text style={styles.label}>
AI Security Score
</Text>


<Text style={styles.score}>
{
data.security
?
"95 / 100"
:
"Unknown"
}
</Text>


</View>




<View style={styles.card}>


<Text style={styles.label}>
Portfolio Status
</Text>


<Text style={styles.text}>
{
data.portfolio.recommendation
}
</Text>


</View>


</View>

);

}




const styles=StyleSheet.create({

container:{
flex:1,
backgroundColor:Colors.background,
padding:24,
justifyContent:"center"
},


logo:{
fontSize:70,
textAlign:"center"
},


title:{
color:Colors.white,
fontSize:32,
fontWeight:"800",
textAlign:"center",
marginBottom:30
},


card:{
backgroundColor:Colors.card,
padding:20,
borderRadius:Radius.medium,
marginBottom:15
},


label:{
color:Colors.gray
},


address:{
color:Colors.primary,
marginTop:8
},


score:{
color:Colors.success,
fontSize:30,
fontWeight:"800",
marginTop:8
},


text:{
color:Colors.white,
marginTop:8
}


});
