import React from "react";


import {

createBottomTabNavigator

} from "@react-navigation/bottom-tabs";



import WalletDashboardScreen from "../screens/WalletDashboardScreen";

import SwapScreen from "../screens/SwapScreen";

import DAppConnectScreen from "../screens/DAppConnectScreen";

import AIAssistantScreen from "../screens/AIAssistantScreen";

import SettingsScreen from "../screens/SettingsScreen";





const Tab =

createBottomTabNavigator();





export default function MainTabNavigator(){



return (

<Tab.Navigator>


<Tab.Screen

name="Wallet"

component={WalletDashboardScreen}

/>


<Tab.Screen

name="Swap"

component={SwapScreen}

/>


<Tab.Screen

name="dApp"

component={DAppConnectScreen}

/>


<Tab.Screen

name="AI"

component={AIAssistantScreen}

/>


<Tab.Screen

name="Settings"

component={SettingsScreen}

/>


</Tab.Navigator>

);

}
