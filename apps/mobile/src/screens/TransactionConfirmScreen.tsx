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

createWalletTransaction

} from "../services/transactionService";





export default function TransactionConfirmScreen(){


const [status,setStatus]=

useState("");





function confirm(){


const result =

createWalletTransaction({

from:"wallet",

to:"receiver",

amount:1,

asset:"SOL"

});



setStatus(

result.status

);


}





return (

<View style={styles.container}>


<Text style={styles.title}>
Confirm Transaction
</Text>


<Text style={styles.text}>
AI Guardian Protection Active
</Text>



<TouchableOpacity

style={styles.button}

onPress={confirm}

>


<Text style={styles.btnText}>
Sign Transaction
</Text>


</TouchableOpacity>




<Text style={styles.result}>
{status}
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


button:{
marginTop:30,
backgroundColor:Colors.primary,
padding:18,
borderRadius:20
},


btnText:{
color:Colors.white,
fontWeight:"800"
},


result:{
marginTop:20,
color:Colors.success
}

});
