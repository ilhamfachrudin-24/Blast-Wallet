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

tokenRisk

} from "../services/riskService";





export default function RiskScannerScreen(){


const [risk,setRisk]=

useState<any>(null);





function scan(){


setRisk(

tokenRisk({

liquidity:true,

contractVerified:false

})

);


}





return (

<View style={styles.container}>


<Text style={styles.title}>
AI Risk Scanner
</Text>



<TouchableOpacity

style={styles.button}

onPress={scan}

>


<Text style={styles.text}>
Scan Token
</Text>


</TouchableOpacity>



{

risk &&

<Text style={styles.result}>

Score:

{risk.score}

{"\n"}

Level:

{risk.level}

{"\n"}

Warnings:

{risk.warnings.join(", ")}

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
