import React from "react";


import {

View,

Text,

TouchableOpacity,

StyleSheet,

Alert

} from "react-native";


import {

Colors

} from "../theme/theme";


import {

authenticateUser

} from "../services/biometricService";





export default function LockScreen(){



async function unlock(){


const success =

await authenticateUser();



if(success){


Alert.alert(

"Unlocked",

"Welcome back to Blast Wallet"

);


}else{


Alert.alert(

"Failed",

"Authentication failed"

);


}


}





return (

<View style={styles.container}>


<Text style={styles.icon}>
🔐
</Text>


<Text style={styles.title}>
Blast Wallet Locked
</Text>


<TouchableOpacity

style={styles.button}

onPress={unlock}

>


<Text style={styles.text}>
Unlock Wallet
</Text>


</TouchableOpacity>



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

icon:{
fontSize:80
},

title:{
marginTop:20,
color:Colors.white,
fontSize:28,
fontWeight:"800"
},

button:{
marginTop:40,
backgroundColor:Colors.primary,
padding:18,
borderRadius:20
},

text:{
color:Colors.background,
fontWeight:"700"
}

});
