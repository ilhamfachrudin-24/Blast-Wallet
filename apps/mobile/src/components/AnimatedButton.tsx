import React,{
useRef
} from "react";


import {

Animated,

TouchableOpacity,

Text

} from "react-native";


import {

Colors

} from "../theme/theme";





export default function AnimatedButton({

title,

onPress

}:any){



const scale=

useRef(

new Animated.Value(1)

).current;





function press(){



Animated.sequence([

Animated.timing(

scale,

{

toValue:.95,

duration:100,

useNativeDriver:true

}

),


Animated.timing(

scale,

{

toValue:1,

duration:100,

useNativeDriver:true

}

)

]).start();



onPress();

}





return (

<Animated.View

style={{

transform:[

{

scale

}

]

}}

>

<TouchableOpacity

onPress={press}

style={{

backgroundColor:Colors.primary,

padding:18,

borderRadius:20

}}

>


<Text

style={{

color:Colors.white,

textAlign:"center"

}}

>

{title}

</Text>


</TouchableOpacity>


</Animated.View>

);

}
