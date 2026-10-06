import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CoursesStack from './CoursesStack';
import ReservationsScreen from '../screens/ReservationsScreen';
import ProfileScreen from '../screens/ProfileScreen';


const Tab = createBottomTabNavigator();
export default function TabNavigation(){
    return(
        <Tab.Navigator>
            <Tab.Screen name = "Home" component = {CoursesStack}/>
            <Tab.Screen name = "Reservations" component = {ReservationsScreen}/>
            <Tab.Screen name = "Profile" component = {ProfileScreen}/>
        </Tab.Navigator>
    )
}