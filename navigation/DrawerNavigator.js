import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../components/HomeScreen'; 
import ProfileScreen from '../components/ProfileScreen'; 
import SettingsScreen from '../components/SettingsScreen';
import demsobuocchanScreen from '../components/demsobuocchan';
import demnguocthoigian from '../components/demnguocthoigian';
import tinhnhietdophong from '../components/tinhnhietdophong';
import tinhtoansobinhphuong from '../components/tinhtoansobinhbuong';
import tinhTong from '../components/tinhtong';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="kkk" component={demsobuocchanScreen}/>
      <Drawer.Screen name="timing" component={demnguocthoigian}/>
      <Drawer.Screen name="nhietdo" component={tinhnhietdophong}/>
      <Drawer.Screen name="sobinhphuong" component={tinhtoansobinhphuong}/>
      <Drawer.Screen name="tinhtong" component={tinhTong}/>
    </Drawer.Navigator>
  );
}
