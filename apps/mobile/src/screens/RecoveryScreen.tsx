import React,{
useState
} from "react";


import {

View,

Text,

TextInput,

TouchableOpacity,

StyleSheet

} from "react-native";


import {

Colors

} from "../theme/theme";


import {

backupWallet

} from "../services/backupService";





export default function RecoveryScreen(){



const [phrase,setPhrase]=

useState("");

const [status,setStatus]=

useState("");





function verify(){


const result=

backupWallet(phrase);



setStatus(

result.success ?

"Backup Verified"

:

"Invalid Phrase"

);


}





return (

<View style={styles.container}>


<Text style={styles.title}>
Wallet Recovery
</Text>



<TextInput

style={styles.input}

placeholder="Recovery phrase"

placeholderTextColor="#777"

onChangeText={setPhrase}

/>



<TouchableOpacity

style={styles.button}

onPress={verify}

>


<Text style={styles.text}>
Verify Backup
</Text>


</TouchableOpacity>



<Text style={styles.status}>
{status}
</Text>


</View>

);

}





const styles=StyleSheet.create({

container:{
flex:1,
backgroundColor:Colors.background,
padding:24,
justifyContent:"center"
},


title:{
color:Colors.white,
fontSize:30,
fontWeight:"900"
},


input:{
backgroundColor:Colors.card,
color:Colors.white,
padding:18,
marginTop:30,
borderRadius:20
},


button:{
backgroundColor:Colors.primary,
padding:18,
marginTop:20,
borderRadius:20
},


text:{
color:Colors.white,
textAlign:"center"
},


status:{
color:Colors.success,
marginTop:20
}

});
