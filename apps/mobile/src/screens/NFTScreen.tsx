import React from "react";


import {

View,

Text,

StyleSheet

} from "react-native";


import {

Colors

} from "../theme/theme";





export default function NFTScreen(){



return (

<View style={styles.container}>


<Text style={styles.title}>
NFT Gallery
</Text>


<Text style={styles.card}>
Blast NFT Collection
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
fontSize:32,
fontWeight:"800"
},


card:{
marginTop:30,
backgroundColor:Colors.card,
padding:20,
color:Colors.white
}

});
