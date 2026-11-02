import React from "react";

import { 
  createNativeStackNavigator 
} from "@react-navigation/native-stack";


import SplashScreen from "../screens/SplashScreen";
import WelcomeScreen from "../screens/WelcomeScreen";


const Stack = createNativeStackNavigator();


export default function RootNavigator(){

  return (

    <Stack.Navigator
      screenOptions={{
        headerShown:false
      }}
    >

      <Stack.Screen
        name="Splash"
        component={SplashScreen}
      />


      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
      />

    </Stack.Navigator>

  );

}
