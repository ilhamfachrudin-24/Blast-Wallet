import {

Animated

} from "react-native";





export function fadeIn(

value:Animated.Value

){



Animated.timing(

value,

{

toValue:1,

duration:500,

useNativeDriver:true

}

).start();


}





export function slideUp(

value:Animated.Value

){



Animated.timing(

value,

{

toValue:0,

duration:500,

useNativeDriver:true

}

).start();


}
