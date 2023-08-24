import React from 'react';
import { View, Text ,Image} from 'react-native';
import { useSelector } from 'react-redux';
import { MyThemeClass } from '../../Theme/ThemeDarkLightColor';
import { styles } from '../../../assets/css/DashBoardCss/DashboardStyle';
import HalfSizeButton from '../button/halfSizeButton';
import { useNavigation } from '@react-navigation/native';

export default function NoDataMsg(props) {
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
        source={require("../../../assets/images/nodata.png")}
        style={{ width: 200, height: 200,  }}
      />
      <Text allowFontScaling={false} style={{ ...styles.headtxtNoresultBold, color: themecolor.BACKICON }}>
        You explore list{" "}
        <Text allowFontScaling={false} style={{ ...styles.headtxtNoresultBold, color: "#f1c40f" }}>Empty</Text>.
      </Text>
      <Text allowFontScaling={false} style={{ ...styles.headtxtNoresultnew, color: themecolor.TXTGREYS }}>
        Sorry, we could not find any user near you.
      </Text>
      <Text allowFontScaling={false} style={{ ...styles.headtxtNoresultnew, color: themecolor.TXTGREYS }}>
        Try increasing your search radius.
      </Text>

      <View style={{ marginVertical: 17 }} />

      <View style={{ ...styles.btnsave, }}>
        <HalfSizeButton
          title="INCREASE RADIUS"
          onPress={() => navigation.navigate('Refine')}
          color={"#fff"}
          backgroundColor={themecolor.ADDTOCARTBUTTONCOLOR}
          borderColor={themecolor.ADDTOCARTBUTTONCOLOR}
        />
      </View>
    </View>
  );
}
