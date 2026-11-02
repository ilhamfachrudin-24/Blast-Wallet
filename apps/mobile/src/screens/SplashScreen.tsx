import React, {useEffect} from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import {Colors} from "../theme/theme";


export default function SplashScreen({navigation}: any){

  useEffect(()=>{

    const timer = setTimeout(()=>{

      navigation.replace("Welcome");

    },2500);


    return ()=>clearTimeout(timer);

  },[]);


  return (

    <View style={styles.container}>

      <View style={styles.logoContainer}>

        <Text style={styles.logo}>
          ⚡
        </Text>

      </View>


      <Text style={styles.title}>
        BLAST WALLET
      </Text>


      <Text style={styles.subtitle}>
        AI-Powered Self-Custody
        {"\n"}
        Web3 Wallet
      </Text>


      <View style={styles.loading}>

        <Text style={styles.loadingText}>
          Securing your wallet...
        </Text>

      </View>


    </View>

  );

}



const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:Colors.background,
    justifyContent:"center",
    alignItems:"center",
  },


  logoContainer:{

    width:120,
    height:120,
    borderRadius:60,
    backgroundColor:"#111111",
    justifyContent:"center",
    alignItems:"center",
    borderWidth:2,
    borderColor:Colors.primary

  },


  logo:{
    fontSize:64,
  },


  title:{
    marginTop:32,
    color:Colors.white,
    fontSize:32,
    fontWeight:"800",
    letterSpacing:3
  },


  subtitle:{
    marginTop:12,
    textAlign:"center",
    color:Colors.gray,
    fontSize:16,
    lineHeight:24
  },


  loading:{
    position:"absolute",
    bottom:80
  },


  loadingText:{
    color:Colors.primary,
    fontSize:14
  }

});
