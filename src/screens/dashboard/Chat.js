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
import SegmentedControlTab from 'react-native-segmented-control-tab';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NoChatData from '../../components/shared/NoData/NoChatData';

export default function Chat(props) {
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
          values={["Personal", "Business", "Chat Group", "Call"]}
          onTabPress={index => handleSingleIndexSelect(index)}
        />
      </View>


      <Search handleSearch={handleSearch} searchValue={searchValue} handleClear={handleClear} noFilter={true} />


      {loader ? (
        <LoadingFullScreen style={{ flex: 1 }} />
      ) : (
        <>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ ...styles.bdContainter }} >
              {index == 0 ?
                <NoChatData title="You haven't started any conversation!" img="msg" />
                :
                index == 3 ?
                  <NoChatData title="You haven't called anybody yet" img="call" />
                  :
                  <NoChatData title="You haven't started any conversation!" img="msg" />
              }
            </View>

            <View style={{ marginVertical: 5 }} />
          </ScrollView>
        </>

      )}

      <View styles={styles.containernew}>
        <View style={[styles.fabContainer,]}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={()=>""}
            style={[styles.bottomAddButton, { backgroundColor: themecolor.ADDTOCARTBUTTONCOLOR }]}
          >
            <View >
              <Icon name='add-call' color="#fff" size={28} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
