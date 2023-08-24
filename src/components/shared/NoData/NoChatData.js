import React from 'react';
import { View, Text ,Image} from 'react-native';
import { useSelector } from 'react-redux';
import { MyThemeClass } from '../../Theme/ThemeDarkLightColor';
import { styles } from '../../../assets/css/DashBoardCss/DashboardStyle';
import HalfSizeButton from '../button/halfSizeButton';
import { useNavigation } from '@react-navigation/native';

export default function NoChatData(props) {
  const navigation = useNavigation();
  const mode = useSelector(state => state.mode);
  const themecolor = new MyThemeClass(mode).getThemeColor();
   
  return (
    <View
      style={{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        padding: 20,
      }}>
        {props.img == "call" ?
      <Image
        source={require("../../../assets/images/call.png")}
        style={{ width: 100, height: 100, marginTop:40 }}
      />
      :
      <Image
        source={require("../../../assets/images/msg.png")}
        style={{ width: 100, height: 100, marginTop:30 }}
      />
      }
      <View  style={{marginVertical:5}}/>
      <Text allowFontScaling={false} style={{ ...styles.headtxtNoresultBold, color: themecolor.BACKICON }}>
        {props.title}
      </Text>
      
    </View>
  );
}
