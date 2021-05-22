import React from 'react';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { DrawerItems , createDrawerNavigator } from 'react-navigation-drawer';

import customSideBarMenu from './components/customSideBarMenu'
import { BottomNavigator } from './components/BottomNavigator';
import  settingScreen  from './components/settingScreen';

import WelcomeScreen from './screens/WelcomeScreen'

export default function App() {
  return (
      <AppContainer/>
  );
}

 const AppDrawerNavigator = createDrawerNavigator(
 {
   home:{screen:BottomNavigator},
   settings:{screen:settingScreen}
 },
 {
        contentComponent: customSideBarMenu
    },
    {
        initialRouteName : "Home"
    },
 )

 const SwitchNavigator = createSwitchNavigator({
    WelcomeScreen:WelcomeScreen,
     AppDrawerNavigator:AppDrawerNavigator,
 })

 const AppContainer = createAppContainer(SwitchNavigator);
