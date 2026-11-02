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

marketInsight

} from "../services/tradingAIService";





export default function AITradingScreen(){


const [result,setResult]=

useState<any>(null);





function analyze(){


setResult(

marketInsight("SOL")

);


}





return (

<View style={styles.container}>


<Text style={styles.title}>
AI Trading Assistant
</Text>



<TouchableOpacity

style={styles.button}

onPress={analyze}

>


<Text style={styles.text}>
Analyze SOL
</Text>


</TouchableOpacity>




{

result &&

<Text style={styles.result}>

Trend:

{result.trend}

{"\n"}

Risk:

{result.risk}

</Text>

}



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


button:{
marginTop:30,
backgroundColor:Colors.primary,
padding:18,
borderRadius:20
},


text:{
color:Colors.white,
fontWeight:"800",
textAlign:"center"
},


result:{
marginTop:30,
color:Colors.success
}

});
