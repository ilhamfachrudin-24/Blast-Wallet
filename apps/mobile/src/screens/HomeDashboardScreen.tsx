import React,{
useEffect,
useState
} from "react";


import {

View,

Text,

StyleSheet,

ScrollView,

TouchableOpacity

} from "react-native";


import {

Colors,

Radius

} from "../theme/theme";


import AnimatedCard from "../components/AnimatedCard";


import {

dashboardData

} from "../services/dashboardService";





export default function HomeDashboardScreen(){


const [data,setData]=useState<any>(null);



useEffect(()=>{


setData(

dashboardData()

);


},[]);





return (

<ScrollView

style={styles.container}

showsVerticalScrollIndicator={false}

>



<Text style={styles.logo}>
BLAST WALLET
</Text>



<Text style={styles.subtitle}>
AI Powered Web3 Wallet
</Text>




<AnimatedCard>


<Text style={styles.label}>
Portfolio Balance
</Text>



<Text style={styles.balance}>
$

{data?.portfolio?.stats?.totalValue ?? "0.00"}

</Text>



<Text style={styles.change}>
+0.00% Today
</Text>



</AnimatedCard>






<View style={styles.row}>


<TouchableOpacity

style={styles.action}

activeOpacity={0.8}

>


<Text style={styles.icon}>
⇄
</Text>


<Text style={styles.actionText}>
Swap
</Text>


</TouchableOpacity>





<TouchableOpacity

style={styles.action}

activeOpacity={0.8}

>


<Text style={styles.icon}>
◈
</Text>


<Text style={styles.actionText}>
DeFi
</Text>


</TouchableOpacity>



</View>







<AnimatedCard>


<Text style={styles.section}>
AI Security Score
</Text>



<Text style={styles.score}>
{data?.security?.score ?? 95}%
</Text>



<Text style={styles.safe}>
Protection Active
</Text>



</AnimatedCard>







<AnimatedCard>


<Text style={styles.section}>
Web3 Intelligence
</Text>



<Text style={styles.item}>
✓ AI Trading Assistant
</Text>


<Text style={styles.item}>
✓ Risk Scanner
</Text>


<Text style={styles.item}>
✓ dApp Browser
</Text>


<Text style={styles.item}>
✓ NFT Portfolio
</Text>



</AnimatedCard>







<AnimatedCard>


<Text style={styles.section}>
Quick Actions
</Text>



<Text style={styles.item}>
Wallet • Swap • Bridge • DeFi
</Text>



<Text style={styles.item}>
Market • NFT • Security
</Text>



</AnimatedCard>




</ScrollView>

);

}





const styles=StyleSheet.create({


container:{


flex:1,


backgroundColor:Colors.background,


padding:24


},



logo:{


color:Colors.white,


fontSize:34,


fontWeight:"900"


},



subtitle:{


color:Colors.gray,


marginTop:6,


marginBottom:30


},



label:{


color:Colors.gray,


fontSize:16


},



balance:{


color:Colors.white,


fontSize:42,


fontWeight:"900",


marginTop:10


},



change:{


color:Colors.success,


marginTop:10


},



row:{


flexDirection:"row",


gap:16,


marginVertical:20


},



action:{


flex:1,


backgroundColor:Colors.card,


padding:25,


borderRadius:Radius.medium,


alignItems:"center"


},



icon:{


fontSize:32,


color:Colors.primary


},



actionText:{


color:Colors.white,


marginTop:10,


fontWeight:"800"


},



section:{


color:Colors.white,


fontSize:20,


fontWeight:"900"


},



score:{


color:Colors.success,


fontSize:42,


fontWeight:"900",


marginTop:10


},



safe:{


color:Colors.gray


},



item:{


color:Colors.white,


marginTop:14


}


});
