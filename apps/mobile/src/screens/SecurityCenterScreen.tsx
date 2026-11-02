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

getSecurityScore

} from "../services/securityService";





export default function SecurityCenterScreen(){


const [security,setSecurity]=

useState<any>(null);



useEffect(()=>{


setSecurity(

getSecurityScore()

);


},[]);





return (

<View style={styles.container}>


<Text style={styles.title}>
Security Center
</Text>



<Text style={styles.score}>

{security?.score ?? 0}%

</Text>



<Text style={styles.level}>

{security?.level}

</Text>



{

security?.checks.map(

(item:string,index:number)=>(

<Text

key={index}

style={styles.item}

>

✓ {item}

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


score:{
color:Colors.success,
fontSize:50,
fontWeight:"900",
marginTop:30
},


level:{
color:Colors.white,
fontSize:20
},


item:{
color:Colors.gray,
marginTop:15
}

});
