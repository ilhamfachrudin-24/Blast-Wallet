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

notifications

} from "../services/notificationService";





export default function NotificationCenterScreen(){



const [items,setItems]=

useState<any[]>([]);





useEffect(()=>{


setItems(

notifications()

);


},[]);





return (

<View style={styles.container}>


<Text style={styles.title}>
Notifications
</Text>



{

items.length===0 &&

<Text style={styles.empty}>
No Notifications
</Text>

}



{

items.map(

(item,index)=>(

<View

key={index}

style={styles.card}

>


<Text style={styles.type}>
{item.title}
</Text>


<Text style={styles.message}>
{item.message}
</Text>



</View>

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


empty:{
color:Colors.gray,
marginTop:30
},


card:{
backgroundColor:Colors.card,
padding:20,
borderRadius:20,
marginTop:20
},


type:{
color:Colors.primary,
fontWeight:"900"
},


message:{
color:Colors.white,
marginTop:10
}

});
