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

connectApplication

} from "../services/dappService";





export default function DAppConnectScreen(){



function handleConnect(){


const session =

connectApplication(

"Demo dApp",

"https://example.com"

);



console.log(session);


}





return (

<View style={styles.container}>


<Text style={styles.icon}>
🌐
</Text>


<Text style={styles.title}>
Connect dApp
</Text>


<Text style={styles.subtitle}>
Allow this application
to connect with Blast Wallet
</Text>



<View style={styles.card}>


<Text style={styles.name}>
Demo dApp
</Text>


<Text style={styles.url}>
https://example.com
</Text>


</View>




<TouchableOpacity

style={styles.button}

onPress={handleConnect}

>


<Text style={styles.buttonText}>
Connect Wallet
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
fontSize:70,
textAlign:"center"
},


title:{
marginTop:20,
color:Colors.white,
fontSize:32,
fontWeight:"800",
textAlign:"center"
},


subtitle:{
marginTop:15,
color:Colors.gray,
textAlign:"center"
},


card:{
marginTop:35,
backgroundColor:Colors.card,
padding:20,
borderRadius:Radius.medium
},


name:{
color:Colors.white,
fontWeight:"700",
fontSize:18
},


url:{
marginTop:10,
color:Colors.primary
},


button:{
marginTop:30,
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
