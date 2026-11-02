import React from "react";


import {

View,

Text,

StyleSheet

} from "react-native";


import {

Colors

} from "../theme/theme";





export default function SettingsHubScreen(){



return (

<View style={styles.container}>


<Text style={styles.title}>
Settings
</Text>



<Text style={styles.item}>
🔐 Security Center
</Text>


<Text style={styles.item}>
💾 Backup Wallet
</Text>


<Text style={styles.item}>
🌐 Network
</Text>


<Text style={styles.item}>
🔗 Connected Apps
</Text>



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
fontWeight:"900"
},


item:{
color:Colors.white,
fontSize:18,
marginTop:25
}

});
