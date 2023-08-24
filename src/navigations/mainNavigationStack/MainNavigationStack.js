import * as React from 'react';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from '../../navigations/NavigationDrw/NavigationService';
import { isDarkMode } from '../../components/Theme/ThemeDarkLightColor';
import Header from '../../components/shared/header/Header';
import Splash from '../../screens/intro/Splash';
import DrawerNavigation from '../drawer/DrawerNavigation';
import Network from '../../screens/dashboard/Networks';
import Chat from '../../screens/dashboard/Chat';
import Contacts from '../../screens/dashboard/Contacts';
import Groups from '../../screens/dashboard/Groups';
import Networks from '../../screens/dashboard/Networks';
import Refine from '../../screens/Refine/Refine';


function MainNavigationStack(props) {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer
      theme={isDarkMode ? DarkTheme : DefaultTheme}
      ref={navigationRef}>
      <Stack.Navigator headerShown={false}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Header"
          component={Header}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={DrawerNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Network"
          component={Network}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Contacts"
          component={Contacts}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Networks"
          component={Networks}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Groups"
          component={Groups}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Refine"
          component={Refine}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigationStack;
