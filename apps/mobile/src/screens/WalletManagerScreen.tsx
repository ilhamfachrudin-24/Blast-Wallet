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

wallets,

changeWallet

} from "../services/walletManagerService";





export default function WalletManagerScreen(){


const [list,setList]=

useState<any[]>([]);





useEffect(()=>{


setList(

wallets()

);


},[]);





return (

<View style={styles.container}>


<Text style={styles.title}>
My Wallets
</Text>



{

list.map(

(wallet,index)=>(

<TouchableOpacity

key={index}

style={styles.card}

onPress={()=>changeWallet(wallet.id)}

>


<Text style={styles.name}>
{wallet.name}
</Text>


<Text style={styles.address}>
{wallet.address}
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
marginTop:20,
borderRadius:20
},


name:{
color:Colors.white,
fontSize:20
},


address:{
color:Colors.gray,
marginTop:8
}

});
