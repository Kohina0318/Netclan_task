import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  StatusBar,
  ScrollView, Image,
  Text, TouchableOpacity, TextInput, Animated
} from 'react-native';
import { useSelector } from 'react-redux';
import { MyThemeClass } from '../../Theme/ThemeDarkLightColor';
import { styles } from '../../../assets/css/DashBoardCss/DashboardStyle';

export default function NoSearchItem() {
    const mode = useSelector(state => state.mode);
    const themecolor = new MyThemeClass(mode).getThemeColor();

  return (
    <View
      style={{
        alignItems: 'center',
        alignSelf:'center',
        flex: 1,padding:40,
      }}>
        <Image 
        source={require("../../../assets/images/search.png")}
        style={{width:130,height:130, marginTop:30}}
        />
      <Text allowFontScaling={false} style={{...styles.headtxtNoresultBold, color: themecolor.TXTGREYS }}>No Results Found</Text>
      <Text allowFontScaling={false} style={{...styles.headtxtNoresult, color: themecolor.TXTGREYS }}>
        Try adjusting your search or filter to find what you are looking for.
        </Text>
    </View>
  )
}
