import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import ProfileScreen from '../screens/ProfileScreen';
import MomentsScreen from '../screens/MomentsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MessageScreen from '../screens/MessageScreen';
import CustomDrawer from '../components/CustomDrawer';
import TabNavigator from './TabNavigator';

import Ionicons from 'react-native-vector-icons/Ionicons'





export default function AppStack() {

  const Drawer = createDrawerNavigator();

  return (

    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{ headerShown: false, drawerActiveBackgroundColor: '#aa18ea', drawerActiveTintColor: '#fff', drawerInactiveTintColor:'#333', drawerLabelStyle: { marginLeft: -25, fontSize: 15 } }}>
      
      <Drawer.Screen component={TabNavigator} name="Home" options={{
        drawerIcon: ({ color }) => (
          <Ionicons name='home-outline' size={22} color={color} />
        )
      }} />
      <Drawer.Screen component={ProfileScreen} name="Profile"
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name='person-outline' size={22} color={color} />
          )
        }} />
      <Drawer.Screen component={MessageScreen} name="Message" options={{
        drawerIcon: ({ color }) => (
          <Ionicons name='chatbox-ellipses-outline' size={22} color={color} />
        )
      }} />
      <Drawer.Screen component={MomentsScreen} name="Moments"
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name='timer-outline' size={22} color={color} />
          )
        }} />
      <Drawer.Screen component={SettingsScreen} name="Settings"
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name='settings-outline' size={22} color={color} />
          )
        }} />
    </Drawer.Navigator>
  )
}