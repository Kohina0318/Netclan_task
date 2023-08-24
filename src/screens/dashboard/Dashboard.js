import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  StatusBar,
  ScrollView, Image,
  Text, TouchableOpacity, TextInput, Animated
} from 'react-native';
import { useSelector } from 'react-redux';
import { MyThemeClass } from '../../components/Theme/ThemeDarkLightColor';
import Header from '../../components/shared/header/Header';
import { styles } from '../../assets/css/DashBoardCss/DashboardStyle';
import { useToast } from 'react-native-toast-notifications';
import { useNavigation } from '@react-navigation/native';
import LoadingFullScreen from '../../components/shared/Loader/LoadingFullScreen';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { ExploreFlateList } from '../../components/shared/FlateLists/DashBoardFlateList/ExploreFlateList';
import FloatingButton from '../../components/shared/button/FloatingButton';
import NoSearchItem from '../../components/shared/NoData/NoSearchItem';
import NoDataMsg from '../../components/shared/NoData/NoDataMsg';
import Search from '../../components/shared/Model/Search';

const personalDataOld = [
  {
    id: 1,
    name: "Jaggu Don",
    address: "Mumbai",
    work: "Trader",
    distance: "1.1",
    purpose: ["Coffee", "Business", "Friendship"],
    status: "Hi community! I am open to new connections"
  },
  {
    id: 2,
    name: "somya",
    address: "Mumbai",
    work: "Trader",
    distance: "80",
    purpose: ["Coffee", "Business", "Friendship"],
    status: "Hi community! I am open to new connections"
  },
  {
    id: 3,
    name: "kohina Don",
    address: "Mumbai",
    work: "Trader",
    distance: "5",
    purpose: ["Coffee", "Business", "Friendship"],
    status: "Hi community! I am open to new connections"
  },
]


export default function Dashboard(props) {
  const toast = useToast();
  const navigation = useNavigation();
  
  const refRBSheet = useRef();
  const mode = useSelector(state => state.mode);
  const themecolor = new MyThemeClass(mode).getThemeColor();

  const [loader, setLoader] = useState(false);
  const [index, setIndex] = React.useState(0);
  const [personalData, setPersonalData] = React.useState(personalDataOld);
  const [personalFilter, setPersonalFilter] = React.useState(personalDataOld);
  const [searchValue, setSearchValue] = React.useState('');

  const [expanded, setExpanded] = useState(false);

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
    setPersonalData(personalDataOld)
  }

  const handleSingleIndexSelect = inx => {
    setIndex(inx);
  };


  return (
    <View style={{ ...styles.bg, backgroundColor: themecolor.THEMECOLOR1 }}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={mode === 'dark' ? 'light-content' : 'dark-content'}
      />

      <Header title="Home" />

      <View style={{ ...styles.tabcontainer, }} >
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

      <Search expanded={expanded}  handleSearch={handleSearch} searchValue={searchValue} handleClear={handleClear} />


      {loader ? (
        <LoadingFullScreen style={{ flex: 1 }} />
      ) : (
        <>
          {personalData.length > 0 ?
            <ScrollView showsVerticalScrollIndicator={false} style={{ opacity: expanded ? 0.3 : 1 }}>
              <View style={{ ...styles.bdContainter,}} >
                {index == 0 ?
                  <View style={{ marginBottom: 20 }}>
                    <ExploreFlateList data={personalData} />
                  </View>
                  :
                  index == 1 ?
                    <NoDataMsg/>
                    :
                    <NoDataMsg/>
                }
              </View>
            </ScrollView>
            :
            <NoSearchItem />
          }
        </>
      )}

      <FloatingButton expanded={expanded} setExpanded={setExpanded} />

    </View>
  );
}
