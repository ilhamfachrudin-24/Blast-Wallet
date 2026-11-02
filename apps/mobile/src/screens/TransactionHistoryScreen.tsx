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

loadHistory

} from "../services/historyService";





export default function TransactionHistoryScreen(){


const [history,setHistory]=

useState<any[]>([]);





useEffect(()=>{


setHistory(

loadHistory()

);



},[]);





return (

<View style={styles.container}>


<Text style={styles.title}>
Transaction History
</Text>




{

history.length === 0 &&

<Text style={styles.empty}>
No transactions yet
</Text>

}



{

history.map(

(tx,index)=>(

<View

key={index}

style={styles.card}

>


<Text style={styles.hash}>
{tx.hash}
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
fontSize:30,
fontWeight:"900",
marginBottom:30
},


empty:{
color:Colors.gray
},


card:{
backgroundColor:Colors.card,
padding:20,
borderRadius:20,
marginBottom:15
},


hash:{
color:Colors.white
},


status:{
marginTop:10,
color:Colors.success
}

});
