import React,{
useEffect,
useState
} from "react";


import {

View,

Text,

StyleSheet,

TouchableOpacity

} from "react-native";


import {

Colors,

Radius

} from "../theme/theme";


import GlassCard from "../components/GlassCard";

import BlastLogo from "../components/BlastLogo";


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


<BlastLogo />



<Text style={styles.title}>
Blast Wallet
</Text>




<Text style={styles.balance}>

$

{

data?.portfolio?.totalValue ??

"0.00"

}

</Text>



<Text style={styles.label}>
Total Portfolio Value
</Text>





<View style={styles.actions}>


<TouchableOpacity style={styles.action}>

<Text style={styles.icon}>
↑
</Text>

<Text style={styles.actionText}>
Send
</Text>

</TouchableOpacity>



<TouchableOpacity style={styles.action}>

<Text style={styles.icon}>
↓
</Text>

<Text style={styles.actionText}>
Receive
</Text>

</TouchableOpacity>



<TouchableOpacity style={styles.action}>

<Text style={styles.icon}>
↔
</Text>

<Text style={styles.actionText}>
Swap
</Text>

</TouchableOpacity>



</View>





<GlassCard>


<Text style={styles.section}>
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



</GlassCard>






<GlassCard>


<Text style={styles.section}>
AI Guardian
</Text>


<Text style={styles.safe}>
🟢 Wallet Protected
</Text>



</GlassCard>




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

fontSize:28,

fontWeight:"900",

textAlign:"center"

},


balance:{

marginTop:30,

color:Colors.white,

fontSize:42,

fontWeight:"900",

textAlign:"center"

},


label:{

color:Colors.gray,

textAlign:"center",

marginBottom:30

},


actions:{

flexDirection:"row",

justifyContent:"space-between",

marginBottom:25

},


action:{

backgroundColor:Colors.card,

padding:18,

borderRadius:Radius.medium,

alignItems:"center",

width:"30%"

},


icon:{

fontSize:25,

color:Colors.primary

},


actionText:{

color:Colors.white,

marginTop:8

},


section:{

color:Colors.white,

fontSize:20,

fontWeight:"800"

},


asset:{

color:Colors.gray,

marginTop:15

},


safe:{

color:Colors.success,

marginTop:15

}

});
