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

gasData,

recommendedFee

} from "../services/gasService";





export default function GasTrackerScreen(){


const [gas,setGas]=

useState<any>(null);





function check(){


setGas({

data:

gasData("Ethereum"),


recommendation:

recommendedFee("normal")

});


}





return (

<View style={styles.container}>


<Text style={styles.title}>
Gas Tracker
</Text>



<TouchableOpacity

style={styles.button}

onPress={check}

>


<Text style={styles.text}>
Check Gas
</Text>


</TouchableOpacity>



{

gas &&

<Text style={styles.result}>

Slow:

{gas.data.slow}

{"\n"}

Normal:

{gas.data.normal}

{"\n"}

Fast:

{gas.data.fast}

{"\n\n"}

Recommended:

{gas.recommendation.fee}

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
