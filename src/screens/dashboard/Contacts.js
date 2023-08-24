import React, { useState, useEffect } from 'react';
import {
  View,
  StatusBar,
  ScrollView,
  Text, TouchableOpacity
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
import SegmentedControlTab from 'react-native-segmented-control-tab';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import NoChatData from '../../components/shared/NoData/NoChatData';
import NoGroupData from '../../components/shared/NoData/NoGroupData';

export default function Contacts(props) {
  const toast = useToast();
  const navigation = useNavigation();
  const mode = useSelector(state => state.mode);
  const themecolor = new MyThemeClass(mode).getThemeColor();

  const [loader, setLoader] = useState(false);
  const [index, setIndex] = React.useState(0);
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

  const handleSingleIndexSelect = inx => {
    setIndex(inx);
  };



  return (
    <View style={{ ...styles.bg, backgroundColor: themecolor.THEMECOLOR }}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={mode === 'dark' ? 'light-content' : 'dark-content'}
      />

      <Header title="Home" />

      <View style={{ ...styles.tabcontainernew, }} >
        <SegmentedControlTab
          selectedIndex={index}
          tabsContainerStyle={styles.tabsContainerStyle}
          tabStyle={styles.tabStyle}
          tabTextStyle={{ ...styles.tabTextStyle, color: themecolor.TXTGREY }}
          activeTabStyle={styles.activeTabStyle}
          activeTabTextStyle={styles.activeTabTextStyle}
          allowFontScaling={false}
          values={["Personal", "Business", "Merchant"]}
          onTabPress={index => handleSingleIndexSelect(index)}
        />
      </View>


      <Search handleSearch={handleSearch} searchValue={searchValue} handleClear={handleClear} />


      {loader ? (
        <LoadingFullScreen style={{ flex: 1 }} />
      ) : (
        <>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ ...styles.bdContainter }} >
              <NoGroupData  title="Your contact list is" img="contact"/>
            </View>

            <View style={{ marginVertical: 5 }} />
          </ScrollView>
        </>

      )}
    </View>
  );
}
