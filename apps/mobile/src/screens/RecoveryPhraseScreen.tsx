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


export default function RecoveryPhraseScreen({navigation}: any) {

  const words = [
    "apple",
    "river",
    "galaxy",
    "future",
    "crypto",
    "wallet",
    "secure",
    "block",
    "chain",
    "light",
    "node",
    "network"
  ];


  return (

    <View style={styles.container}>


      <Text style={styles.title}>
        Recovery Phrase
      </Text>


      <Text style={styles.description}>
        Write these words down and
        keep them somewhere safe.
      </Text>



      <View style={styles.phraseContainer}>

        {
          words.map((word,index)=>(

            <View
              key={index}
              style={styles.wordBox}
            >

              <Text style={styles.number}>
                {index + 1}
              </Text>

              <Text style={styles.word}>
                {word}
              </Text>

            </View>

          ))
        }

      </View>



      <View style={styles.warning}>

        <Text style={styles.warningText}>
          ⚠ Never share your recovery phrase.
          Anyone with these words can access
          your wallet.
        </Text>

      </View>



      <TouchableOpacity

        style={styles.button}

        onPress={()=>navigation.navigate("VerifyPhrase")}

      >

        <Text style={styles.buttonText}>
          I Saved My Phrase
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
  fontSize:30,
  fontWeight:"800",
  textAlign:"center"
},


description:{
  marginTop:12,
  color:Colors.gray,
  textAlign:"center",
  fontSize:16
},


phraseContainer:{
  marginTop:30,
  flexDirection:"row",
  flexWrap:"wrap",
  justifyContent:"space-between"
},


wordBox:{
  width:"30%",
  backgroundColor:Colors.card,
  padding:12,
  marginBottom:12,
  borderRadius:Radius.small,
  borderWidth:1,
  borderColor:"#222"
},


number:{
  color:Colors.gray,
  fontSize:12
},


word:{
  color:Colors.white,
  marginTop:5,
  fontWeight:"600"
},


warning:{
  marginTop:20,
  padding:16,
  borderRadius:Radius.medium,
  backgroundColor:"#1A1200",
  borderWidth:1,
  borderColor:Colors.warning
},


warningText:{
  color:Colors.warning,
  fontSize:14,
  lineHeight:20
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
}

});
