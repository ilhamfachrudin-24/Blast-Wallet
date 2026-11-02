import React from "react";


import {

View,

Text,

StyleSheet

} from "react-native";


import {

Colors

} from "../theme/theme";





export default function TransactionDetailScreen(){



const hash =

"transaction_hash";





return (

<View style={styles.container}>


<Text style={styles.title}>
Transaction Detail
</Text>



<Text style={styles.label}>
Hash
</Text>


<Text style={styles.value}>
{hash}
</Text>



<Text style={styles.status}>
Confirmed
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
fontWeight:"900"
},


label:{
color:Colors.gray,
marginTop:30
},


value:{
color:Colors.white,
marginTop:10
},


status:{
marginTop:20,
color:Colors.success,
fontWeight:"800"
}

});
