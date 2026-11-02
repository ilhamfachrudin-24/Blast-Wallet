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



export default function CreateWalletScreen({navigation}: any){


  return (

    <View style={styles.container}>


      <Text style={styles.icon}>
        🔐
      </Text>


      <Text style={styles.title}>
        Create New Wallet
      </Text>


      <Text style={styles.description}>

        Generate your secure
        self-custody wallet.

        {"\n\n"}

        You will receive a recovery
        phrase to protect your assets.

      </Text>



      <View style={styles.infoBox}>


        <Text style={styles.infoTitle}>
          Your wallet, your control
        </Text>


        <Text style={styles.infoText}>
          Blast Wallet does not store
          your private keys or recovery
          phrase.
        </Text>


      </View>



      <TouchableOpacity

        style={styles.button}

        onPress={() =>
          navigation.navigate("RecoveryPhrase")
        }

      >

        <Text style={styles.buttonText}>
          Generate Wallet
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
  marginTop:18,
  color:Colors.gray,
  fontSize:16,
  lineHeight:25,
  textAlign:"center"
},


infoBox:{
  marginTop:35,
  backgroundColor:Colors.card,
  padding:20,
  borderRadius:Radius.medium,
  borderWidth:1,
  borderColor:"#222"
},


infoTitle:{
  color:Colors.primary,
  fontSize:16,
  fontWeight:"700"
},


infoText:{
  marginTop:10,
  color:Colors.white,
  fontSize:14,
  lineHeight:20
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
