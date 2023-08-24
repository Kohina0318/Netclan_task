import React, { useEffect, useState } from 'react';
import {
  Image,
  StatusBar,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { MyThemeClass } from '../../Theme/ThemeDarkLightColor';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import CIcon from 'react-native-vector-icons/Octicons';
import { styles } from '../../../assets/css/HeaderCss/HeaderStyle'
import An from 'react-native-vector-icons/AntDesign';
import MI from 'react-native-vector-icons/MaterialIcons';
import Ep from 'react-native-vector-icons/Entypo';
const { width } = Dimensions.get('screen');

export default function Header(props) {
  const navigation = useNavigation();
  const mode = useSelector(state => state.mode);
  const themecolor = new MyThemeClass(mode).getThemeColor();

  return (
    <View
      style={{
        ...styles.mainView,
        backgroundColor:props.backIcon ? themecolor.ADDTOCARTBUTTONCOLOR:themecolor.HEADERTHEMECOLOR ,
        borderBottomColor:props.backIcon ? themecolor.ADDTOCARTBUTTONCOLOR:themecolor.HEADERTHEMECOLOR
      }}>

      <StatusBar
        translucent
        backgroundColor={themecolor.HEADERTHEMECOLOR}
        barStyle={'light-content'}
      />

      <View style={{ ...styles.mainViewContainer }}>
        <View
          style={{ ...styles.headerInnerView }}>

          {props.backIcon ? (
            <>
              <View style={{ ...styles.iconViewCont, }}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={styles.toggle}
                  onPress={props.onPressBack}
                >
                  <CIcon
                    name="chevron-left"
                    size={27}
                    color={"#fff"}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ ...styles.iconTitle2, }}>
                <Text
                  allowFontScaling={false}
                  style={{ ...styles.toolbarTitleHead, color: "#fff", }}
                  numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </>
          ) : (
            <>
              <View style={{ ...styles.iconViewCont, }}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                >
                  <MI name="notes" size={35} color={"#fff"} />
                </TouchableOpacity>

              </View>


              <View style={{ ...styles.iconTitle1, }}>
                <Text
                  allowFontScaling={false}
                  style={{ ...styles.toolbarTitleCenter, color: "#fff", }}
                  numberOfLines={1}>
                  Howdy Kohina Tiwari !!
                </Text>
                <View style={{ flexDirection: "row", }}>
                  <Ep name="location-pin" size={14} color="#fff" />
                  <Text
                    allowFontScaling={false}
                    style={{ ...styles.toolbarTitleCenter1, color: "#fff", }}
                    numberOfLines={1}>
                    Jiwaji Ganj, Morena
                  </Text>
                </View>
              </View>

              <TouchableOpacity activeOpacity={0.5}
                onPress={() => navigation.navigate('Refine')} style={{ ...styles.iconViewCont, }}>
                <An name="menu-unfold" size={21} color="#fff" />
                <Text
                  allowFontScaling={false}
                  style={{ ...styles.toolbarTitle, color: "#fff", }}
                  numberOfLines={1}>
                  Refine
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>

      </View>
    </View>
  );
}
