import * as React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  TransitionSpecs,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { Colors } from '../../assets/config/Colors';
import { FontFamily } from '../../assets/fonts/FontFamily';
import { MyThemeClass } from '../../components/Theme/ThemeDarkLightColor';
import { MainNavigatorstyle } from '../../assets/css/MainNavigatorstyle';
import Dashboard from '../../screens/dashboard/Dashboard';
import FA from 'react-native-vector-icons/FontAwesome';
import AD from 'react-native-vector-icons/AntDesign';
import Ii from 'react-native-vector-icons/Ionicons';
import En from 'react-native-vector-icons/Entypo';
import Chat from '../../screens/dashboard/Chat';
import Contacts from '../../screens/dashboard/Contacts';
import Groups from '../../screens/dashboard/Groups';
import Networks from '../../screens/dashboard/Networks';

const Tab = createBottomTabNavigator();
const MyTransition = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
};

export default function BottomNavigationStack(props) {
  const mode = useSelector(state => state.mode);
  const themecolor = new MyThemeClass(mode).getThemeColor();


  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 55,
          backgroundColor: themecolor.LOGINTHEMECOLOR1,
          borderColor: themecolor.BOXBORDERCOLOR,
          keyboardHidesTabBar: true,
          labelStyle: MainNavigatorstyle.tab1,
          style: MainNavigatorstyle.tab2,
          animationEnabled: true,
          inactiveTintColor: Colors.gray,
          activeTintColor: themecolor.HEADERTHEMECOLOR,
          showLabel: false,
          fontFamily: FontFamily.PopinsMedium,
          headerShown: false,

        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          MyTransition,
          tabBarLabel: '',
          tabBarLabelStyle: { top: -4, },
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <>
                <Ii name="eye" color={themecolor.BACKICON} size={26} />
                <Text
                  allowFontScaling={false}
                  style={{
                    ...MainNavigatorstyle.abelstylecss2,
                    color: themecolor.BACKICON,
                  }}>
                  Explore
                </Text>
              </>
            ) : (
              <>
                <Ii name="eye-outline" size={26} color={themecolor.TXTGREY} />
                <Text
                  allowFontScaling={false}
                  style={{
                    ...MainNavigatorstyle.abelstylecss2,
                    color: themecolor.TXTGREY,
                  }}>
                  Explore
                </Text>
              </>
            ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Networks"
        component={Networks}
        options={{
          MyTransition,
          tabBarLabel: ' ',
          tabBarLabelStyle: { bottom: -5 },
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <>
                <En name="network" color={themecolor.BACKICON} size={26} />
                <Text
                  allowFontScaling={false}
                  style={{
                    ...MainNavigatorstyle.abelstylecss2,
                    color: themecolor.BACKICON,
                  }}>
                  Network
                </Text>
              </>
            ) : (
              <>
                <En name="network" size={26} color={themecolor.TXTGREY} />
                <Text
                  allowFontScaling={false}
                  style={{
                    ...MainNavigatorstyle.abelstylecss2,
                    color: themecolor.TXTGREY,
                  }}>
                  Network
                </Text>
              </>
            ),
          headerShown: false,
        }}
      />


      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          MyTransition,
          tabBarLabel: ' ',
          tabBarLabelStyle: { bottom: -5 },
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <>
                <Ii name="chatbubble-ellipses" color={themecolor.BACKICON} size={26} />
                <Text
                  allowFontScaling={false}
                  style={{
                    ...MainNavigatorstyle.abelstylecss2,
                    color: themecolor.BACKICON,
                  }}>
                  Chat
                </Text>
              </>
            ) : (
              <>
                <Ii name="chatbubble-ellipses-outline" size={26} color={themecolor.TXTGREY} />
                <Text
                  allowFontScaling={false}
                  style={{
                    ...MainNavigatorstyle.abelstylecss2,
                    color: themecolor.TXTGREY,
                  }}>
                  Chat
                </Text>
              </>
            ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={{
          MyTransition,
          tabBarLabel: ' ',
          tabBarLabelStyle: { bottom: -5 },
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <>
                <AD name="contacts" color={themecolor.BACKICON} size={26} />
                <Text
                  allowFontScaling={false}
                  style={{
                    ...MainNavigatorstyle.abelstylecss2,
                    color: themecolor.BACKICON,
                  }}>
                  Contacts
                </Text>
              </>
            ) : (
              <>
                <AD name="contacts" size={26} color={themecolor.TXTGREY} />
                <Text
                  allowFontScaling={false}
                  style={{
                    ...MainNavigatorstyle.abelstylecss2,
                    color: themecolor.TXTGREY,
                  }}>
                  Contacts
                </Text>
              </>
            ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Groups"
        component={Groups}
        options={{
          MyTransition,
          tabBarLabel: ' ',
          tabBarLabelStyle: { bottom: -5 },
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <>
                <FA name="hashtag" color={themecolor.BACKICON} size={26} />
                <Text
                  allowFontScaling={false}
                  style={{
                    ...MainNavigatorstyle.abelstylecss2,
                    color: themecolor.BACKICON,
                  }}>
                  Groups
                </Text>
              </>
            ) : (
              <>
                <FA name="hashtag" size={26} color={themecolor.TXTGREY} />
                <Text
                  allowFontScaling={false}
                  style={{
                    ...MainNavigatorstyle.abelstylecss2,
                    color: themecolor.TXTGREY,
                  }}>
                  Groups
                </Text>
              </>
            ),
          headerShown: false,
        }}
      />


    </Tab.Navigator>
  );
}
