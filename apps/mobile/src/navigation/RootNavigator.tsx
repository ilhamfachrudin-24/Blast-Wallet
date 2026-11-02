import React from "react";

import {
createNativeStackNavigator
} from "@react-navigation/native-stack";


import SplashScreen from "../screens/SplashScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import CreateWalletScreen from "../screens/CreateWalletScreen";
import RecoveryPhraseScreen from "../screens/RecoveryPhraseScreen";
import ImportWalletScreen from "../screens/ImportWalletScreen";
import WalletDashboardScreen from "../screens/WalletDashboardScreen";
import AssetDetailScreen from "../screens/AssetDetailScreen";
import SendTransactionScreen from "../screens/SendTransactionScreen";


const Stack=createNativeStackNavigator();



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
name="Dashboard"
component={WalletDashboardScreen}
/>


<Stack.Screen
name="AssetDetail"
component={AssetDetailScreen}
/>


<Stack.Screen
name="SendTransaction"
component={SendTransactionScreen}
/>


</Stack.Navigator>

)

}
