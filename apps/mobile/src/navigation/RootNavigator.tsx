import React from "react";

import {
  NavigationContainer
} from "@react-navigation/native";

import {
  createNativeStackNavigator
} from "@react-navigation/native-stack";


import HomeDashboardScreen from "../screens/HomeDashboardScreen";
import WalletManagerScreen from "../screens/WalletManagerScreen";
import SwapScreen from "../screens/SwapScreen";
import BridgeScreen from "../screens/BridgeScreen";
import DeFiDashboardScreen from "../screens/DeFiDashboardScreen";
import AITradingScreen from "../screens/AITradingScreen";
import RiskScannerScreen from "../screens/RiskScannerScreen";
import NFTGalleryScreen from "../screens/NFTGalleryScreen";
import DAppBrowserScreen from "../screens/DAppBrowserScreen";
import NotificationScreen from "../screens/NotificationScreen";
import SettingsHubScreen from "../screens/SettingsHubScreen";
import SecurityCenterScreen from "../screens/SecurityCenterScreen";
import BackupWalletScreen from "../screens/BackupWalletScreen";
import NetworkScreen from "../screens/NetworkScreen";
import GasTrackerScreen from "../screens/GasTrackerScreen";
import RecoveryScreen from "../screens/RecoveryScreen";
import AppLockScreen from "../screens/AppLockScreen";



const Stack = createNativeStackNavigator();



export default function RootNavigator(){


return (

<NavigationContainer>

<Stack.Navigator

initialRouteName="HomeDashboard"

screenOptions={{

headerShown:false,

animation:"slide_from_right"

}}

>


<Stack.Screen

name="HomeDashboard"

component={HomeDashboardScreen}

/>


<Stack.Screen

name="WalletManager"

component={WalletManagerScreen}

/>


<Stack.Screen

name="Swap"

component={SwapScreen}

/>


<Stack.Screen

name="Bridge"

component={BridgeScreen}

/>


<Stack.Screen

name="DeFi"

component={DeFiDashboardScreen}

/>


<Stack.Screen

name="AITrading"

component={AITradingScreen}

/>


<Stack.Screen

name="RiskScanner"

component={RiskScannerScreen}

/>


<Stack.Screen

name="NFTGallery"

component={NFTGalleryScreen}

/>


<Stack.Screen

name="DAppBrowser"

component={DAppBrowserScreen}

/>


<Stack.Screen

name="Notifications"

component={NotificationScreen}

/>


<Stack.Screen

name="Settings"

component={SettingsHubScreen}

/>


<Stack.Screen

name="Security"

component={SecurityCenterScreen}

/>


<Stack.Screen

name="Backup"

component={BackupWalletScreen}

/>


<Stack.Screen

name="Network"

component={NetworkScreen}

/>


<Stack.Screen

name="GasTracker"

component={GasTrackerScreen}

/>


<Stack.Screen

name="Recovery"

component={RecoveryScreen}

/>


<Stack.Screen

name="AppLock"

component={AppLockScreen}

/>



</Stack.Navigator>


</NavigationContainer>

);


}
