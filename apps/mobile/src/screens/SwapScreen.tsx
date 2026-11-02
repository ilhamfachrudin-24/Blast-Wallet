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

getQuote

} from "../services/defiService";





export default function SwapScreen(){


const [quote,setQuote]=useState<any>(null);



function preview(){


const result =

getQuote({

fromToken:"SOL",

toToken:"USDC",

amount:1

});


setQuote(result);


}




return (

<View style={styles.container}>


<Text style={styles.title}>
Swap
</Text>


<Text style={styles.subtitle}>
Blast DEX Router
</Text>



<View style={styles.card}>


<Text style={styles.text}>
SOL → USDC
</Text>


</View>



<TouchableOpacity

style={styles.button}

onPress={preview}

>


<Text style={styles.buttonText}>
Get Quote
</Text>


</TouchableOpacity>



{
quote &&

<Text style={styles.result}>

Receive:

{quote.estimatedOutput}

USDC

</Text>

}



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
fontSize:32,
fontWeight:"800"
},

subtitle:{
color:Colors.gray,
marginBottom:30
},

card:{
backgroundColor:Colors.card,
padding:20,
borderRadius:Radius.medium
},

text:{
color:Colors.white
},

button:{
marginTop:30,
backgroundColor:Colors.primary,
padding:18,
borderRadius:20,
alignItems:"center"
},

buttonText:{
color:Colors.background,
fontWeight:"700"
},

result:{
marginTop:30,
color:Colors.white
}

});
