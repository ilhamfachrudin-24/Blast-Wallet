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

loadNFTs

} from "../services/nftService";





export default function NFTGalleryScreen(){



const [items,setItems]=

useState<any[]>([]);





useEffect(()=>{


setItems(

loadNFTs()

);


},[]);





return (

<View style={styles.container}>


<Text style={styles.title}>
NFT Gallery
</Text>



{

items.length===0 &&

<Text style={styles.empty}>
No NFT Found
</Text>

}



{

items.map(

(nft,index)=>(

<View

key={index}

style={styles.card}

>


<Text style={styles.name}>
{nft.name}
</Text>


<Text style={styles.collection}>
{nft.collection}
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


name:{
color:Colors.white
},


collection:{
color:Colors.gray
}

});
