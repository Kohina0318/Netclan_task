import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Linking,
  Alert,
  Image,
  StatusBar, ImageBackground
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { MainNavigatorstyle } from '../../assets/css/MainNavigatorstyle';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { DrawerActions, useNavigation, useFocusEffect } from '@react-navigation/native';
import { Image as ImageR } from 'react-native';
import { navigate } from '../NavigationDrw/NavigationService';
import { useSelector } from 'react-redux';
import { MyThemeClass } from '../../components/Theme/ThemeDarkLightColor';
import FD from 'react-native-vector-icons/Foundation';
import II from 'react-native-vector-icons/Ionicons';
import Ep from 'react-native-vector-icons/Entypo';
import FA from 'react-native-vector-icons/FontAwesome';
import MI from 'react-native-vector-icons/MaterialIcons';
import FT from 'react-native-vector-icons/Fontisto';
import { useToast } from 'react-native-toast-notifications';

const { width } = Dimensions.get('window');

export default function DrawerContent(props) {
  const toast = useToast();
  const navigation = useNavigation();

  const mode = useSelector(state => state.mode);
  const themecolor = new MyThemeClass(mode).getThemeColor();


  return (
    <DrawerContentScrollView
      showsVerticalScrollIndicator={false}
      style={{
        ...MainNavigatorstyle.DrawerContentSView,
        backgroundColor: themecolor.THEMECOLOR1,
        borderColor: themecolor.BOXBORDERCOLOR1,
      }}>
      <StatusBar
        translucent
        backgroundColor={themecolor.HEADERTHEMECOLOR}
        barStyle={'light-content'}
      />
      <View style={MainNavigatorstyle.userinfo1}>
        
        <ImageBackground source={require("../../assets/images/bgimg.png")} resizeMode='stretch' imageStyle={{ opacity: 0.8, backgroundColor: "#192E36" }}
          style={{ ...MainNavigatorstyle.profilecontainer }}>
          <View style={{ width: "75%", }}>
            <View style={{ ...MainNavigatorstyle.imgCon, borderColor: themecolor.BOXBORDERCOLOR1 }}>
              <Image
                style={{
                  width: 80,
                  height: 80,
                }}
                source={require('../../assets/images/profile.png')}
              />
            </View>
            <Text
              allowFontScaling={false}
              style={{
                ...MainNavigatorstyle.labelstylecss1,
                color: themecolor.TXTWHITE1, left: 10
              }}>Kohina Tiwari</Text>
            <View style={{ ...MainNavigatorstyle.textSpace }} />
            <Text
              allowFontScaling={false}
              style={{
                ...MainNavigatorstyle.labelstylecssnew,
                color: themecolor.TXTWHITE1,
              }}>KKGWAL0038000</Text>
            <View style={{ ...MainNavigatorstyle.textSpace }} />
            <View style={{ ...MainNavigatorstyle.levelCon, backgroundColor: themecolor.CONTENTHEADEROPACITY, }}>
              <View style={{ ...MainNavigatorstyle.levelinnercon }}>
              </View>
            </View>
            <View style={{ ...MainNavigatorstyle.textSpace }} />
            <Text
              allowFontScaling={false}
              style={{
                ...MainNavigatorstyle.signintextnew,
                color: themecolor.TXTWHITE1, left: 10
              }}>Available</Text>
          </View>
          <TouchableOpacity style={{ ...MainNavigatorstyle.settingBtn }}>
            <II name="settings" color={themecolor.BACKICON} size={30} />
          </TouchableOpacity>

        </ImageBackground>

        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            onPress={() => navigate('Dashboard')}
            style={MainNavigatorstyle.viewstyle1}>
            <View style={{ width: 30 }}>
              <FA name="user" size={24} color={themecolor.BACKICON} />
            </View>
            <Text
              allowFontScaling={false}
              style={{
                ...MainNavigatorstyle.labelstylecss,
                color: themecolor.BACKICON,
              }}>
              Edit Profile
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('Dashboard')}
            style={MainNavigatorstyle.viewstyle1}>
            <View style={{ width: 30 }}>
              <FA name="users" size={23} color={themecolor.BACKICON} />
            </View>
            <Text
              allowFontScaling={false}
              style={{
                ...MainNavigatorstyle.labelstylecss,
                color: themecolor.BACKICON,
              }}>
              My Network
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('Dashboard')}
            style={MainNavigatorstyle.viewstyle1}>
            <View style={{ width: 30 }}>
              <MI name="business-center" size={24} color={themecolor.BACKICON} />
            </View>
            <Text
              allowFontScaling={false}
              style={{
                ...MainNavigatorstyle.labelstylecss,
                color: themecolor.BACKICON,
              }}>
              Switch to Business
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('Dashboard')}
            style={MainNavigatorstyle.viewstyle1}>
            <View style={{ width: 30 }}>
              <Ep name="shop" size={24} color={themecolor.BACKICON} />
            </View>
            <Text
              allowFontScaling={false}
              style={{
                ...MainNavigatorstyle.labelstylecss,
                color: themecolor.BACKICON,
              }}>
              Switch to Merchant
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('Dashboard')}
            style={MainNavigatorstyle.viewstyle1}>
            <View style={{ width: 30 }}>
              <II name="heart-circle-sharp" size={25} color={themecolor.BACKICON} />
            </View>
            <Text
              allowFontScaling={false}
              style={{
                ...MainNavigatorstyle.labelstylecss,
                color: themecolor.BACKICON,
              }}>
              Dating
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('Dashboard')}
            style={MainNavigatorstyle.viewstyle1}>
            <View style={{ width: 30 }}>
              <II name="infinite" size={24} color={themecolor.BACKICON} />
            </View>
            <Text
              allowFontScaling={false}
              style={{
                ...MainNavigatorstyle.labelstylecss,
                color: themecolor.BACKICON,
              }}>
              Matrimony
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('Dashboard')}
            style={MainNavigatorstyle.viewstyle1}>
            <View style={{ width: 30 }}>
              <FT name="shopping-bag-1" size={24} color={themecolor.BACKICON} />
            </View>
            <Text
              allowFontScaling={false}
              style={{
                ...MainNavigatorstyle.labelstylecss,
                color: themecolor.BACKICON,
              }}>
              Buy-Sell-Rent
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('Dashboard')}
            style={MainNavigatorstyle.viewstyle1}>
            <View style={{ width: 30 }}>
              <MI name="shopping-bag" size={24} color={themecolor.BACKICON} />
            </View>
            <Text
              allowFontScaling={false}
              style={{
                ...MainNavigatorstyle.labelstylecss,
                color: themecolor.BACKICON,
              }}>
              Jobs
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('Dashboard')}
            style={MainNavigatorstyle.viewstyle1}>
            <View style={{ width: 30 }}>
              <FA name="address-card" size={23} color={themecolor.BACKICON} />
            </View>
            <Text
              allowFontScaling={false}
              style={{
                ...MainNavigatorstyle.labelstylecss,
                color: themecolor.BACKICON,
              }}>
              Business Cards
            </Text>
          </TouchableOpacity>


          <TouchableOpacity
            onPress={() => navigate('Dashboard')}
            style={MainNavigatorstyle.viewstyle1}>
            <View style={{ width: 30 }}>
              <FA name="hashtag" size={23} color={themecolor.BACKICON} />
            </View>
            <Text
              allowFontScaling={false}
              style={{
                ...MainNavigatorstyle.labelstylecss,
                color: themecolor.BACKICON,
              }}>
              Netclan Groups
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('Dashboard')}
            style={MainNavigatorstyle.viewstyle1}>
            <View style={{ width: 30 }}>
              <FD name="clipboard-notes" size={25} color={themecolor.BACKICON} />
            </View>
            <Text
              allowFontScaling={false}
              style={{
                ...MainNavigatorstyle.labelstylecss,
                color: themecolor.BACKICON,
              }}>
              Notes
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('Dashboard')}
            style={MainNavigatorstyle.viewstyle1}>
            <View style={{ width: 30 }}>
              <II name="location-sharp" size={24} color={themecolor.BACKICON} />
            </View>
            <Text
              allowFontScaling={false}
              style={{
                ...MainNavigatorstyle.labelstylecss,
                color: themecolor.BACKICON,
              }}>
              Live Location
            </Text>
          </TouchableOpacity>


        </ScrollView>

      </View>
    </DrawerContentScrollView>
  );
}
