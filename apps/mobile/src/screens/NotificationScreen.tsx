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

loadNotifications

} from "../services/notificationService";





export default function NotificationScreen(){



const [items,setItems]=useState<any[]>([]);





useEffect(()=>{


setItems(

loadNotifications()

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
No notifications
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
{item.type}
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
color:Colors.primary
},


message:{
color:Colors.white,
marginTop:10
}

});
