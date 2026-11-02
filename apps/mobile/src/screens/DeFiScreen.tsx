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



export default function DeFiScreen(){



return (

<View style={styles.container}>


<Text style={styles.title}>
Blast DeFi
</Text>


<Text style={styles.subtitle}>
Swap, Stake and Earn
</Text>




<TouchableOpacity style={styles.card}>


<Text style={styles.text}>
🔄 Swap Tokens
</Text>


</TouchableOpacity>




<TouchableOpacity style={styles.card}>


<Text style={styles.text}>
💎 Staking
</Text>


</TouchableOpacity>




<TouchableOpacity style={styles.card}>


<Text style={styles.text}>
🏦 Lending
</Text>


</TouchableOpacity>



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


title:{
color:Colors.white,
fontSize:32,
fontWeight:"800"
},


subtitle:{
color:Colors.gray,
marginTop:10,
marginBottom:30
},


card:{
backgroundColor:Colors.card,
padding:25,
borderRadius:Radius.medium,
marginBottom:15
},


text:{
color:Colors.white,
fontSize:18,
fontWeight:"700"
}


});
