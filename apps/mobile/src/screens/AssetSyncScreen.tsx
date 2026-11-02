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

syncPortfolio

} from "../services/portfolioSyncService";





export default function AssetSyncScreen(){



const [assets,setAssets]=useState<any[]>([]);





async function sync(){


const result=

await syncPortfolio(

"wallet-address"

);



setAssets(

result.assets

);


}





return (

<View style={styles.container}>


<Text style={styles.title}>
Portfolio Sync
</Text>



<TouchableOpacity

style={styles.button}

onPress={sync}

>


<Text style={styles.text}>
Sync Assets
</Text>


</TouchableOpacity>



{

assets.map(

(item,index)=>(

<Text

key={index}

style={styles.asset}

>

{item.symbol}

-

{item.balance}

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


asset:{
color:Colors.success,
marginTop:20
}

});
