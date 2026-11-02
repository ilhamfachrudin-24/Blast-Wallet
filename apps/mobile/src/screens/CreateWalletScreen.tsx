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


import {
generateNewWallet
} from "../services/walletService";



export default function CreateWalletScreen({navigation}:any){


function handleCreateWallet(){


 const wallet = generateNewWallet();


 console.log(wallet);


 navigation.navigate("RecoveryPhrase");


}



return(

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

</Text>



<View style={styles.infoBox}>


<Text style={styles.infoTitle}>
Your wallet, your control
</Text>


<Text style={styles.infoText}>
Your private keys stay with you.
Blast Wallet never controls your funds.
</Text>


</View>




<TouchableOpacity

style={styles.button}

onPress={handleCreateWallet}

>


<Text style={styles.buttonText}>
Generate Wallet
</Text>


</TouchableOpacity>



</View>

)

}



const styles=StyleSheet.create({

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
marginTop:15,
color:Colors.gray,
textAlign:"center"
},

infoBox:{
marginTop:35,
backgroundColor:Colors.card,
padding:20,
borderRadius:Radius.medium
},

infoTitle:{
color:Colors.primary,
fontWeight:"700"
},

infoText:{
marginTop:10,
color:Colors.white
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
fontWeight:"700"
}

});
