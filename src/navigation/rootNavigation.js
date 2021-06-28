import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { DetailScreen, HomeScreen } from '../screens';
import RootTab from './rootTab';

const Stack = createStackNavigator();
// dung dau ? de kiem tra co undefine ko thay the61 cho if
// su dung navigation mac du ko chuyen props cho navigation cho gameItem
export const navigationWithoutProps = (name,params) => {
    if (navigationRef.current){
        navigationRef.current.navigate(name,params)
    }
}

const navigationRef = React.createRef()
const RootNavigation = ()=> {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="RootTab" component={RootTab}/>
                <Stack.Screen name="DetailScreen" component={DetailScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default RootNavigation;