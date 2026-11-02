import React from "react";


import {

View,

Text,

TouchableOpacity,

StyleSheet

} from "react-native";


import QRCode from "react-native-qrcode-svg";


import {

Colors,

Radius

} from "../theme/theme";


import GlassCard from "../components/GlassCard";





export default function ReceiveWalletScreen(){



const address =

"BLAST_WALLET_ADDRESS";





return (

<View style={styles.container}>


<Text style={styles.title}>
Receive
</Text>



<GlassCard>


<QRCode

value={address}

size={200}

/>


</GlassCard>




<Text style={styles.address}>

{address}

</Text>




<TouchableOpacity

style={styles.button}

>


<Text style={styles.text}>
Copy Address
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
justifyContent:"center",
alignItems:"center"
},


title:{
color:Colors.white,
fontSize:32,
fontWeight:"900"
},


address:{
marginTop:30,
color:Colors.gray
},


button:{
marginTop:30,
backgroundColor:Colors.primary,
padding:18,
borderRadius:Radius.large
},


text:{
color:Colors.white,
fontWeight:"800"
}

});
