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

Colors,

Radius

} from "../theme/theme";


import {

getDashboardData

} from "../services/dashboardService";





export default function WalletDashboardScreen(){


const [data,setData]=

useState<any>(null);



useEffect(()=>{


getDashboardData()

.then(setData);


},[]);




return (

<View style={styles.container}>


<Text style={styles.logo}>
⚡
</Text>


<Text style={styles.title}>
Blast Wallet
</Text>



<View style={styles.card}>


<Text style={styles.label}>
Wallet
</Text>


<Text style={styles.value}>
{
data?.wallet?.address ??
"Loading..."
}
</Text>


</View>




<View style={styles.card}>


<Text style={styles.label}>
Assets
</Text>



{
data?.tokens?.map(

(token:any,index:number)=>(

<Text

key={index}

style={styles.asset}

>

{token.symbol}

</Text>

)

)

}



</View>





<View style={styles.card}>


<Text style={styles.label}>
Portfolio Value
</Text>


<Text style={styles.balance}>
{
data?.portfolio?.totalValue ??
0
}
</Text>


</View>



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


logo:{
fontSize:70,
textAlign:"center"
},


title:{
color:Colors.white,
fontSize:32,
fontWeight:"800",
textAlign:"center",
marginBottom:30
},


card:{
backgroundColor:Colors.card,
padding:20,
borderRadius:Radius.medium,
marginBottom:15
},


label:{
color:Colors.gray
},


value:{
marginTop:10,
color:Colors.primary
},


asset:{
color:Colors.white,
marginTop:10
},


balance:{
color:Colors.success,
fontSize:28,
fontWeight:"800",
marginTop:10
}

});
