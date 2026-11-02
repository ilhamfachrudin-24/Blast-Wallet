import React from "react";


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

changeNetwork

} from "../services/networkService";





export default function NetworkScreen(){



function select(){


changeNetwork({

name:"Ethereum Mainnet",

chain:"ethereum",

rpc:

"https://ethereum.rpc",

active:true

});


}





return (

<View style={styles.container}>


<Text style={styles.title}>
Network
</Text>



<TouchableOpacity

style={styles.card}

onPress={select}

>


<Text style={styles.text}>
Ethereum Mainnet
</Text>


</TouchableOpacity>




<TouchableOpacity

style={styles.card}

>


<Text style={styles.text}>
Solana Mainnet
</Text>


</TouchableOpacity>



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

card:{
backgroundColor:Colors.card,
padding:25,
marginTop:20,
borderRadius:20
},

text:{
color:Colors.white
}

});
