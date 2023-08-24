import React, { useState, useEffect } from 'react';
import {
  View,
  StatusBar,
  ScrollView,
  Text,
} from 'react-native';
import { useSelector } from 'react-redux';
import { MyThemeClass } from '../../components/Theme/ThemeDarkLightColor';
import Header from '../../components/shared/header/Header';
import { styles } from '../../assets/css/DashBoardCss/NetworkStyle';
import { useToast } from 'react-native-toast-notifications';
import { useNavigation } from '@react-navigation/native';
import LoadingFullScreen from '../../components/shared/Loader/LoadingFullScreen';
import Search from '../../components/shared/Model/Search';
import NoNetwokData from '../../components/shared/NoData/NoNetwokData';

export default function Networks(props) {
  const toast = useToast();
  const navigation = useNavigation();
  const mode = useSelector(state => state.mode);
  const themecolor = new MyThemeClass(mode).getThemeColor();

  const [loader, setLoader] = useState(false);
  const [personalData, setPersonalData] = React.useState([]);
  const [personalFilter, setPersonalFilter] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');


  const handleSearch = (text) => {
    setSearchValue(text)
    HandleSearchValue(text)
  }

  const HandleSearchValue = async (text) => {
    var temp = personalFilter.filter(item => {
      return (
        item.name.toLowerCase().includes(text.toLowerCase())
      );
    });
    setPersonalData(temp)
  };

  const handleClear = () => {
    setSearchValue('')
    setPersonalData([])
  }


  return (
    <View style={{ ...styles.bg, backgroundColor: themecolor.THEMECOLOR }}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={mode === 'dark' ? 'light-content' : 'dark-content'}
      />

      <Header title="Home" />

      <View style={{ ...styles.tabcontainer, }} >
        <Text
          allowFontScaling={false}
          style={{ ...styles.headtxtbig, color: "#fff", }}
        >
          New Invitations
        </Text>
        <Text
          allowFontScaling={false}
          style={{ ...styles.headtxtbig, color: "#fff",}}
        >
         All Invitations
        </Text>
      </View>


      <Search handleSearch={handleSearch} searchValue={searchValue} handleClear={handleClear} noFilter={true} />


      {loader ? (
        <LoadingFullScreen style={{ flex: 1 }} />
      ) : (
        <>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ ...styles.bdContainter }} >
             <NoNetwokData />
            </View>
            <View style={{ marginVertical: 5 }} />
          </ScrollView>
        </>
      )}
    </View>
  );
}
