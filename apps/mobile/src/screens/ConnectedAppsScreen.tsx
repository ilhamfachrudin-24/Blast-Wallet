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

sessions

} from "../services/walletConnectService";





export default function ConnectedAppsScreen(){



const [apps,setApps]=

useState<any[]>([]);





useEffect(()=>{


setApps(

sessions()

);


},[]);





return (

<View style={styles.container}>


<Text style={styles.title}>
Connected Apps
</Text>



{

apps.map(

(app,index)=>(

<Text

key={index}

style={styles.item}

>

🔗 {app.appName}

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


item:{
color:Colors.white,
marginTop:20
}

});
