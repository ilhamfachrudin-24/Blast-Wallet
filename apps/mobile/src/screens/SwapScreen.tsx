import React,{
useState
} from "react";


import {

View,

Text,

TouchableOpacity,

StyleSheet

} from "react-native";


import {

Colors

} from "../theme/theme";


import {

createSwapQuote

} from "../services/swapService";





export default function SwapScreen(){



const [result,setResult]=

useState<any>(null);





function swap(){


setResult(

createSwapQuote(

"SOL",

"USDC",

1

)

);


}





return (

<View style={styles.container}>


<Text style={styles.title}>
Token Swap
</Text>



<TouchableOpacity

style={styles.button}

onPress={swap}

>


<Text style={styles.text}>
Get Quote
</Text>


</TouchableOpacity>



{

result &&

<Text style={styles.result}>

Receive:

{result.quote.estimated}

{"\n"}

DEX:

{result.route.dex}

{"\n"}

Safe:

{result.security.safe}

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
fontWeight:"900"
},


button:{
marginTop:30,
backgroundColor:Colors.primary,
padding:18,
borderRadius:20
},


text:{
color:Colors.white,
textAlign:"center"
},


result:{
marginTop:30,
color:Colors.success
}

});
