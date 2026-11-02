import React from "react";


import {

View,

Text,

StyleSheet

} from "react-native";


import {

Colors

} from "../theme/theme";





export default function BackupWalletScreen(){



return (

<View style={styles.container}>


<Text style={styles.title}>
Backup Wallet
</Text>


<Text style={styles.text}>
Your recovery phrase is stored securely.
</Text>



</View>

);

}





const styles=StyleSheet.create({

container:{
flex:1,
backgroundColor:Colors.background,
justifyContent:"center",
alignItems:"center"
},


title:{
color:Colors.white,
fontSize:30,
fontWeight:"900"
},


text:{
color:Colors.gray,
marginTop:20
}

});
