import React,{
useEffect,
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

discoverDApps

} from "../services/dappService";





export default function DAppBrowserScreen(){


const [apps,setApps]=

useState<any[]>([]);





useEffect(()=>{


setApps(

discoverDApps()

);


},[]);





return (

<View style={styles.container}>


<Text style={styles.title}>
Web3 Browser
</Text>



{

apps.map(

(app,index)=>(

<TouchableOpacity

key={index}

style={styles.card}

>


<Text style={styles.name}>
{app.name}
</Text>


<Text style={styles.category}>
{app.category}
</Text>



</TouchableOpacity>

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


card:{
backgroundColor:Colors.card,
padding:20,
borderRadius:20,
marginTop:20
},


name:{
color:Colors.white,
fontSize:20
},


category:{
color:Colors.gray,
marginTop:8
}

});
