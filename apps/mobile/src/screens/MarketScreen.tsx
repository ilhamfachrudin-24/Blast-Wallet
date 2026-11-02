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

price

} from "../services/marketService";





export default function MarketScreen(){


const [data,setData]=useState<any>(null);





function load(){


setData(

price("SOL")

);


}





return (

<View style={styles.container}>


<Text style={styles.title}>
Market
</Text>



<TouchableOpacity

style={styles.button}

onPress={load}

>


<Text style={styles.text}>
Check SOL Price
</Text>


</TouchableOpacity>



{

data &&

<Text style={styles.result}>

{data.symbol}

{"\n"}

${data.price}

{"\n"}

24h:

{data.change24h}%

</Text>

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


result:{
marginTop:30,
color:Colors.success,
fontSize:20
}

});
