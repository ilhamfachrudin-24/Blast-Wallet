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

createBridge

} from "../services/bridgeService";





export default function BridgeScreen(){



const [result,setResult]=

useState<any>(null);





function bridge(){


setResult(

createBridge({

fromChain:"Ethereum",

toChain:"Solana",

token:"USDC",

amount:100

})

);


}





return (

<View style={styles.container}>


<Text style={styles.title}>
Cross Chain Bridge
</Text>



<TouchableOpacity

style={styles.button}

onPress={bridge}

>


<Text style={styles.text}>
Get Bridge Quote
</Text>


</TouchableOpacity>




{

result &&

<Text style={styles.result}>

Provider:

{result.quote.provider}

{"\n"}

Fee:

{result.quote.fee}

{"\n"}

Risk:

{result.security.risk}

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
backgroundColor:Colors.primary,
padding:18,
borderRadius:20,
marginTop:30
},


text:{
color:Colors.white,
textAlign:"center"
},


result:{
color:Colors.success,
marginTop:30
}

});
