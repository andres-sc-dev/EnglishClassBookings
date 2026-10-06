import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import CoursesStack from './CoursesStack';
import ReservationsScreen from '../screens/ReservationsScreen';
import ProfileScreen from '../screens/ProfileScreen';


const Tab = createBottomTabNavigator();
const ICONS = {
    Home: ['home', 'home-outline'],
    Reservations: ['list', 'list-outline'],
    Profile: ['person', 'person-outline'],
};
export default function TabNavigation(){
    return(
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => (
                    <Ionicons name = {ICONS[route.name][focused ? 0 : 1]} size = {size} color = {color}/>
                ),
            })}
        >
            {/* el stack de clases ya maneja su propio header, por eso se oculta el del tab */}
            <Tab.Screen name = "Home" component = {CoursesStack} options = {{headerShown: false}}/>
            <Tab.Screen name = "Reservations" component = {ReservationsScreen}/>
            <Tab.Screen name = "Profile" component = {ProfileScreen}/>
        </Tab.Navigator>
    )
}