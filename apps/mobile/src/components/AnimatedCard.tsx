import React,{
useEffect,
useRef
} from "react";


import {

Animated,

StyleSheet

} from "react-native";


import {

Colors,

Radius

} from "../theme/theme";





export default function AnimatedCard({

children

}:any){



const opacity=

useRef(

new Animated.Value(0)

).current;



useEffect(()=>{


Animated.timing(

opacity,

{

toValue:1,

duration:600,

useNativeDriver:true

}

).start();



},[]);





return (

<Animated.View

style={[

styles.card,

{

opacity

}

]}

>

{children}

</Animated.View>

);

}





const styles=StyleSheet.create({


card:{


backgroundColor:Colors.card,


padding:20,


borderRadius:Radius.large,


marginVertical:10


}


});
