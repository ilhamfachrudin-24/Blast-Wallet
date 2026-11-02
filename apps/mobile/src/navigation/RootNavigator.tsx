import React from "react";


import {

createNativeStackNavigator

} from "@react-navigation/native-stack";



import LockScreen from "../screens/LockScreen";

import SplashScreen from "../screens/SplashScreen";

import WelcomeScreen from "../screens/WelcomeScreen";

import CreateWalletScreen from "../screens/CreateWalletScreen";

import RecoveryPhraseScreen from "../screens/RecoveryPhraseScreen";

import ImportWalletScreen from "../screens/ImportWalletScreen";

import MainTabNavigator from "./MainTabNavigator";





const Stack =

createNativeStackNavigator();





export default function RootNavigator(){



return (

<Stack.Navigator

screenOptions={{

headerShown:false

}}

>


<Stack.Screen

name="Lock"

component={LockScreen}

/>


<Stack.Screen

name="Splash"

component={SplashScreen}

/>


<Stack.Screen

name="Welcome"

component={WelcomeScreen}

/>


<Stack.Screen

name="CreateWallet"

component={CreateWalletScreen}

/>


<Stack.Screen

name="RecoveryPhrase"

component={RecoveryPhraseScreen}

/>


<Stack.Screen

name="ImportWallet"

component={ImportWalletScreen}

/>


<Stack.Screen

name="Main"

component={MainTabNavigator}

/>


</Stack.Navigator>

);

}
