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



export default function WalletDashboardScreen(){

  return (

    <View style={styles.container}>


      <ScrollView>


        <View style={styles.header}>

          <Text style={styles.logo}>
            ⚡
          </Text>


          <View>

            <Text style={styles.walletName}>
              Blast Wallet
            </Text>

            <Text style={styles.address}>
              0x82F9...A91B
            </Text>

          </View>


        </View>



        <View style={styles.balanceCard}>


          <Text style={styles.balanceLabel}>
            Total Balance
          </Text>


          <Text style={styles.balance}>
            $25,430.50
          </Text>


          <Text style={styles.change}>
            +3.24% Today
          </Text>


        </View>



        <View style={styles.actions}>


          <TouchableOpacity style={styles.actionButton}>

            <Text style={styles.actionIcon}>
              ↑
            </Text>

            <Text style={styles.actionText}>
              Send
            </Text>

          </TouchableOpacity>



          <TouchableOpacity style={styles.actionButton}>

            <Text style={styles.actionIcon}>
              ↓
            </Text>

            <Text style={styles.actionText}>
              Receive
            </Text>

          </TouchableOpacity>



          <TouchableOpacity style={styles.actionButton}>

            <Text style={styles.actionIcon}>
              🔄
            </Text>

            <Text style={styles.actionText}>
              Swap
            </Text>

          </TouchableOpacity>


        </View>




        <Text style={styles.sectionTitle}>
          Assets
        </Text>



        <View style={styles.assetCard}>


          <Text style={styles.assetIcon}>
            ◎
          </Text>


          <View>

            <Text style={styles.assetName}>
              Solana
            </Text>


            <Text style={styles.assetBalance}>
              12.50 SOL
            </Text>

          </View>


          <Text style={styles.assetPrice}>
            $2,000
          </Text>


        </View>




        <View style={styles.securityCard}>


          <Text style={styles.securityTitle}>
            🛡 AI Security Score
          </Text>


          <Text style={styles.securityScore}>
            95 / 100
          </Text>


          <Text style={styles.securityText}>
            Wallet protection status: Excellent
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


header:{
  flexDirection:"row",
  alignItems:"center",
  marginTop:20
},


logo:{
  fontSize:45,
  marginRight:15
},


walletName:{
  color:Colors.white,
  fontSize:20,
  fontWeight:"700"
},


address:{
  color:Colors.gray,
  marginTop:4
},


balanceCard:{
  marginTop:30,
  backgroundColor:Colors.card,
  padding:25,
  borderRadius:Radius.large,
  borderWidth:1,
  borderColor:Colors.primary
},


balanceLabel:{
  color:Colors.gray
},


balance:{
  color:Colors.white,
  fontSize:36,
  fontWeight:"800",
  marginTop:10
},


change:{
  color:Colors.success,
  marginTop:10
},


actions:{
  flexDirection:"row",
  justifyContent:"space-between",
  marginTop:25
},


actionButton:{
  width:"31%",
  backgroundColor:Colors.card,
  padding:15,
  borderRadius:Radius.medium,
  alignItems:"center"
},


actionIcon:{
  color:Colors.primary,
  fontSize:24
},


actionText:{
  color:Colors.white,
  marginTop:8
},


sectionTitle:{
  color:Colors.white,
  fontSize:22,
  fontWeight:"700",
  marginTop:35
},


assetCard:{
  marginTop:15,
  backgroundColor:Colors.card,
  padding:18,
  borderRadius:Radius.medium,
  flexDirection:"row",
  alignItems:"center"
},


assetIcon:{
  fontSize:30,
  color:Colors.primary,
  marginRight:15
},


assetName:{
  color:Colors.white,
  fontWeight:"700"
},


assetBalance:{
  color:Colors.gray,
  marginTop:5
},


assetPrice:{
  marginLeft:"auto",
  color:Colors.white
},


securityCard:{
  marginTop:25,
  backgroundColor:"#101820",
  padding:20,
  borderRadius:Radius.medium,
  borderWidth:1,
  borderColor:Colors.secondary
},


securityTitle:{
  color:Colors.white,
  fontSize:16,
  fontWeight:"700"
},


securityScore:{
  color:Colors.primary,
  fontSize:32,
  fontWeight:"800",
  marginTop:10
},


securityText:{
  color:Colors.gray,
  marginTop:5
}


});
