import React from "react";


import {

View,

Text,

StyleSheet

} from "react-native";


import {

Colors

} from "../theme/theme";





export default function TransactionConfirmScreen(){



return (

<View style={styles.container}>


<Text style={styles.title}>
Confirm Transaction
</Text>


<Text style={styles.text}>
AI Guardian checked this transaction.
</Text>


<Text style={styles.safe}>
Risk Level: SAFE
</Text>



</View>

);

}





const styles=StyleSheet.create({

container:{
flex:1,
backgroundColor:Colors.background,
justifyContent:"center",
alignItems:"center"
},


title:{
color:Colors.white,
fontSize:28,
fontWeight:"900"
},


text:{
marginTop:20,
color:Colors.gray
},


safe:{
marginTop:20,
color:Colors.success,
fontWeight:"800"
}

});
