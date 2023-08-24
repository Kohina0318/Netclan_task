import React from 'react';
import { View, Text ,Image} from 'react-native';
import { useSelector } from 'react-redux';
import { MyThemeClass } from '../../Theme/ThemeDarkLightColor';
import { styles } from '../../../assets/css/DashBoardCss/DashboardStyle';
import HalfSizeButton from '../button/halfSizeButton';
import { useNavigation } from '@react-navigation/native';

export default function NoNetwokData(props) {
  const navigation = useNavigation();
  const mode = useSelector(state => state.mode);
  const themecolor = new MyThemeClass(mode).getThemeColor();

  return (
    <View
      style={{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        padding: 20
      }}>
      <Image
        source={require("../../../assets/images/empty.png")}
        style={{ width: 100, height: 100, }}
      />
      
      <View  style={{marginVertical:5}}/>
      
      <Text allowFontScaling={false} style={{ ...styles.headtxtNoresultBold, color: themecolor.BACKICON }}>
        Your connection list is{" "}
        <Text allowFontScaling={false} style={{ ...styles.headtxtNoresultBold, color: "#f1c40f" }}>Empty</Text>.
      </Text>
      
      <View style={{ marginVertical: 17 }} />

      <View style={{ ...styles.btnsave, }}>
        <HalfSizeButton
          title="Explore More"
          onPress={() => navigation.navigate('Dashboard')}
          color={"#fff"}
          backgroundColor={themecolor.ADDTOCARTBUTTONCOLOR}
          borderColor={themecolor.ADDTOCARTBUTTONCOLOR}
        />
      </View>
    </View>
  );
}
