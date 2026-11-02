import React,{
useEffect,
useState
} from "react";


import {

View,

Text,

StyleSheet

} from "react-native";


import {

Colors

} from "../theme/theme";


import {

transactionHistory

} from "../services/historyService";





export default function TransactionHistoryScreen(){



const [history,setHistory]=

useState<any[]>([]);





useEffect(()=>{


setHistory(

transactionHistory()

);


},[]);





return (

<View style={styles.container}>


<Text style={styles.title}>
Transaction History
</Text>



{

history.length===0 &&

<Text style={styles.empty}>
No Transactions
</Text>

}



{

history.map(

(tx,index)=>(

<View

key={index}

style={styles.card}

>


<Text style={styles.type}>
{tx.type}
</Text>


<Text style={styles.amount}>
{tx.amount} {tx.token}
</Text>


<Text style={styles.status}>
{tx.status}
</Text>



</View>

)

)

}



</View>

);

}





const styles=StyleSheet.create({

container:{
flex:1,
backgroundColor:Colors.background,
padding:24
},


title:{
color:Colors.white,
fontSize:32,
fontWeight:"900"
},


empty:{
color:Colors.gray,
marginTop:30
},


card:{
backgroundColor:Colors.card,
padding:20,
borderRadius:20,
marginTop:20
},


type:{
color:Colors.white,
fontWeight:"800"
},


amount:{
color:Colors.success,
marginTop:10
},


status:{
color:Colors.gray,
marginTop:5
}

});
