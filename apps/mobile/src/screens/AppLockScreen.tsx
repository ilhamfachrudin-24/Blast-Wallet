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

unlock

} from "../services/lockService";





export default function AppLockScreen(){



const [pin,setPin]=useState("");

const [status,setStatus]=useState("");





function check(){


const result=

unlock(pin);



setStatus(

result ?

"Unlocked"

:

"Wrong PIN"

);


}





return (

<View style={styles.container}>


<Text style={styles.title}>
Blast Wallet Locked
</Text>



<TextInput

style={styles.input}

secureTextEntry

keyboardType="numeric"

onChangeText={setPin}

/>



<TouchableOpacity

style={styles.button}

onPress={check}

>


<Text style={styles.text}>
Unlock
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
justifyContent:"center",
padding:24
},


title:{
color:Colors.white,
fontSize:30,
fontWeight:"900"
},


input:{
marginTop:30,
backgroundColor:Colors.card,
padding:18,
color:Colors.white,
borderRadius:20
},


button:{
marginTop:20,
backgroundColor:Colors.primary,
padding:18,
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
