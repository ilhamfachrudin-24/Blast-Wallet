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

settings,

saveSettings

} from "../services/settingsService";





export default function SettingsScreen(){



const [data,setData]=

useState<any>(null);





useEffect(()=>{


setData(

settings()

);


},[]);





function toggleTheme(){



const result=

saveSettings({

theme:

data.theme==="dark"

?

"light"

:

"dark"

});



setData(result);


}





return (

<View style={styles.container}>


<Text style={styles.title}>
Settings
</Text>



<Text style={styles.item}>
Theme: {data?.theme}
</Text>



<Text style={styles.item}>
Currency: {data?.currency}
</Text>



<Text style={styles.item}>
Language: {data?.language}
</Text>




<TouchableOpacity

style={styles.button}

onPress={toggleTheme}

>


<Text style={styles.text}>
Change Theme
</Text>


</TouchableOpacity>



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
}

});
