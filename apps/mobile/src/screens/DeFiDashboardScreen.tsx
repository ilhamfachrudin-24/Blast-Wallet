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

positions,

protocolAPY

} from "../services/defiService";





export default function DeFiDashboardScreen(){


const [data,setData]=

useState<any[]>([]);



useEffect(()=>{


setData(

positions()

);


},[]);





return (

<View style={styles.container}>


<Text style={styles.title}>
DeFi Dashboard
</Text>



<Text style={styles.apy}>

APY:

{protocolAPY("Aave").apy}%

</Text>



<Text style={styles.section}>
Active Positions
</Text>



{

data.map(

(item,index)=>(

<Text

key={index}

style={styles.item}

>

{item.asset}

-

{item.apy}%

</Text>

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


apy:{
color:Colors.success,
fontSize:22,
marginTop:30
},


section:{
color:Colors.white,
fontSize:20,
marginTop:30
},


item:{
color:Colors.gray,
marginTop:15
}

});
