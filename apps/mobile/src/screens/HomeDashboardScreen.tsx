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

dashboardData

} from "../services/dashboardService";





export default function HomeDashboardScreen(){



const [data,setData]=

useState<any>(null);





useEffect(()=>{


setData(

dashboardData()

);


},[]);





return (

<View style={styles.container}>


<Text style={styles.title}>
Blast Wallet
</Text>



<Text style={styles.balance}>
Total Portfolio
</Text>



<Text style={styles.value}>
${data?.portfolio.stats.totalValue ?? 0}
</Text>



<Text style={styles.section}>
Security Score
</Text>



<Text style={styles.security}>
{data?.security.score ?? 0}%
</Text>



<Text style={styles.section}>
Quick Actions
</Text>



<Text style={styles.action}>
Swap • Bridge • DeFi • AI
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
fontSize:36,
fontWeight:"900"
},


balance:{
color:Colors.gray,
marginTop:30
},


value:{
color:Colors.white,
fontSize:40,
fontWeight:"900"
},


section:{
color:Colors.white,
fontSize:20,
marginTop:30
},


security:{
color:Colors.success,
fontSize:30
},


action:{
color:Colors.primary,
marginTop:10
}

});
