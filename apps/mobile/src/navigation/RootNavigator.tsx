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
import WalletDashboardScreen from "../screens/WalletDashboardScreen";
import AssetDetailScreen from "../screens/AssetDetailScreen";
import SendTransactionScreen from "../screens/SendTransactionScreen";
import ReceiveWalletScreen from "../screens/ReceiveWalletScreen";
import AISecurityScreen from "../screens/AISecurityScreen";
import AIAssistantScreen from "../screens/AIAssistantScreen";
import DAppConnectScreen from "../screens/DAppConnectScreen";
import DeFiScreen from "../screens/DeFiScreen";
import SettingsScreen from "../screens/SettingsScreen";


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


<Stack.Screen
name="ReceiveWallet"
component={ReceiveWalletScreen}
/>


<Stack.Screen
name="AISecurity"
component={AISecurityScreen}
/>


<Stack.Screen
name="AIAssistant"
component={AIAssistantScreen}
/>


<Stack.Screen
name="DAppConnect"
component={DAppConnectScreen}
/>


<Stack.Screen
name="DeFi"
component={DeFiScreen}
/>


<Stack.Screen
name="Settings"
component={SettingsScreen}
/>


</Stack.Navigator>

);

}
