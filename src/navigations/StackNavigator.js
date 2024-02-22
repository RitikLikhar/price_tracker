import React from 'react'
import Splash from '../screens/Splash'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="splash" component={Splash} />
        </Stack.Navigator>
    )
}

export default StackNavigator