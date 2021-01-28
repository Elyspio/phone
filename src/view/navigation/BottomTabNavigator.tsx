import "react-native-gesture-handler"
import {Ionicons} from '@expo/vector-icons';
import {createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import StoreScreen from "../screens/StoreScreen";

const BottomTab = createMaterialTopTabNavigator ();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();
    return (
        <BottomTab.Navigator
            initialRouteName="Data"
            tabBarPosition={"bottom"}

            tabBarOptions={{activeTintColor: Colors[colorScheme].tint, inactiveTintColor: Colors[colorScheme].tabIconDefault}}
            >
            <BottomTab.Screen
                name="TabOne"
                component={TabOneScreen}
                options={{
                    tabBarIcon: ({color}) => <TabBarIcon name="ios-code" color={color}/>,
                }}
            />
            <BottomTab.Screen
                name="TabTwo"
                component={TabTwoScreen}
                options={{
                    tabBarIcon: ({color}) => <TabBarIcon name="ios-code" color={color}/>,
                }}
            />
            <BottomTab.Screen
                name="Data"
                component={StoreScreen}
                options={{
                    tabBarIcon: ({color}) => <TabBarIcon name="ios-code" color={color}/>,
                }}
            />
        </BottomTab.Navigator>
    );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
    return <Ionicons size={25} {...props} />;
}
