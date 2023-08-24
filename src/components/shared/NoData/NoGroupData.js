import React from 'react';
import { View, Text ,Image} from 'react-native';
import { useSelector } from 'react-redux';
import { MyThemeClass } from '../../Theme/ThemeDarkLightColor';
import { styles } from '../../../assets/css/DashBoardCss/DashboardStyle';
import HalfSizeButton from '../button/halfSizeButton';
import { useNavigation } from '@react-navigation/native';

export default function NoGroupData(props) {
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
        alignSelf:"center"
      }}>
        {props.img=="nodata" ?
      <Image
        source={require("../../../assets/images/nodata.png")}
        style={{ width: 200, height: 200, marginBottom:10 , marginTop:30 }}
      />
      :
      <Image
        source={require("../../../assets/images/contact.png")}
        style={{ width: 200, height: 200, marginBottom:10 , marginTop:30 }}
      />
    }
      <Text allowFontScaling={false} style={{ ...styles.headtxtNoresultBold, color: themecolor.BACKICON }}>
        {props.title} {" "}
        <Text allowFontScaling={false} style={{ ...styles.headtxtNoresultBold, color: "#f1c40f" }}>Empty</Text>.
      </Text>
     
      
    </View>
  );
}
