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

syncPrice

} from "@blast-wallet/market";





export default function MarketOverviewScreen(){



const [prices,setPrices]=

useState<any[]>([]);





async function load(){


setPrices(

await syncPrice(

[

"BTC",

"ETH",

"SOL"

]

)

);


}





return (

<View style={styles.container}>


<Text style={styles.title}>
Market Overview
</Text>



<TouchableOpacity

style={styles.button}

onPress={load}

>


<Text style={styles.text}>
Update Market
</Text>


</TouchableOpacity>



{

prices.map(

(item,index)=>(

<Text

key={index}

style={styles.price}

>

{item.symbol}

:

${item.price}

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
padding:24,
justifyContent:"center"
},


title:{
color:Colors.white,
fontSize:32,
fontWeight:"900"
},


button:{
marginTop:30,
backgroundColor:Colors.primary,
padding:18,
borderRadius:20
},


text:{
color:Colors.white,
textAlign:"center"
},


price:{
color:Colors.success,
marginTop:20
}

});
