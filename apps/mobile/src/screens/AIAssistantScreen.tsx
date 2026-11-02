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

Colors,

Radius

} from "../theme/theme";


import {

chatWithWalletAI

} from "../services/aiAssistantService";





export default function AIAssistantScreen(){


const [question,setQuestion]=

useState("");


const [answer,setAnswer]=

useState("");





function send(){


const result =

chatWithWalletAI(

question,

{}

);



setAnswer(

result.message

);



}





return (

<View style={styles.container}>


<Text style={styles.title}>
Blast AI Assistant
</Text>


<TextInput

style={styles.input}

placeholder="Ask about your wallet..."

placeholderTextColor={Colors.gray}

value={question}

onChangeText={setQuestion}

/>



<TouchableOpacity

style={styles.button}

onPress={send}

>


<Text style={styles.text}>
Ask AI
</Text>


</TouchableOpacity>



<Text style={styles.answer}>
{answer}
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
fontWeight:"800",
marginBottom:30
},

input:{
backgroundColor:Colors.card,
height:55,
borderRadius:Radius.medium,
padding:15,
color:Colors.white
},

button:{
marginTop:20,
backgroundColor:Colors.primary,
padding:18,
borderRadius:Radius.large,
alignItems:"center"
},

text:{
color:Colors.background,
fontWeight:"700"
},

answer:{
marginTop:30,
color:Colors.white
}

});
