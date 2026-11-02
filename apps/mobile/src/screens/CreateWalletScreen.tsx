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


export default function CreateWalletScreen({navigation}:any){

  return (

    <View style={styles.container}>


      <Text style={styles.icon}>
        🔐
      </Text>


      <Text style={styles.title}>
        Create New Wallet
      </Text>


      <Text style={styles.description}>

        Create your secure
        self-custody wallet.

        {"\n\n"}

        Your recovery phrase is
        the only way to access
        your assets.

      </Text>


      <View style={styles.warning}>

        <Text style={styles.warningTitle}>
          ⚠ Security Reminder
        </Text>

        <Text style={styles.warningText}>
          Never share your recovery
          phrase with anyone.
        </Text>

      </View>



      <TouchableOpacity

        style={styles.button}

        onPress={()=>navigation.navigate("RecoveryPhrase")}

      >

        <Text style={styles.buttonText}>
          Continue
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
  fontSize:72,
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
  marginTop:20,
  color:Colors.gray,
  fontSize:16,
  lineHeight:25,
  textAlign:"center"
},


warning:{
  marginTop:40,
  padding:20,
  backgroundColor:"#111111",
  borderRadius:Radius.medium,
  borderWidth:1,
  borderColor:Colors.warning
},


warningTitle:{
  color:Colors.warning,
  fontSize:16,
  fontWeight:"700"
},


warningText:{
  marginTop:8,
  color:Colors.white,
  fontSize:14
},


button:{
  marginTop:40,
  backgroundColor:Colors.primary,
  padding:18,
  borderRadius:Radius.large,
  alignItems:"center"
},


buttonText:{
  color:Colors.background,
  fontSize:16,
  fontWeight:"700"
}


});
