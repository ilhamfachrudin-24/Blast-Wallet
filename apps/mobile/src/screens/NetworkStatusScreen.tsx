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

networkProvider

} from "../services/blockchainService";





export default function NetworkStatusScreen(){



const [network,setNetwork]=

useState<any>(null);





function check(){


setNetwork(

networkProvider("Ethereum")

);


}





return (

<View style={styles.container}>


<Text style={styles.title}>
Network Status
</Text>



<TouchableOpacity

style={styles.button}

onPress={check}

>


<Text style={styles.text}>
Check RPC
</Text>


</TouchableOpacity>



{

network &&

<Text style={styles.result}>

Network:

{network.network}

{"\n"}

RPC:

Connected

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
