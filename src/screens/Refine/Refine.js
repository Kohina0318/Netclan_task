import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  StatusBar,
  ScrollView,
  Text, Dimensions, BackHandler, SafeAreaView, TextInput
} from 'react-native';
import { useSelector } from 'react-redux';
import { MyThemeClass } from '../../components/Theme/ThemeDarkLightColor';
import Header from '../../components/shared/header/Header';
import { styles } from '../../assets/css/RefineCss/RefineStyle';
import { useToast } from 'react-native-toast-notifications';
import { useNavigation } from '@react-navigation/native';
import LoadingFullScreen from '../../components/shared/Loader/LoadingFullScreen';
import { Picker } from '@react-native-picker/picker';
import HalfSizeButton from '../../components/shared/button/halfSizeButton';
import Slider from '@react-native-community/slider';
import { RefineFlateList } from '../../components/shared/FlateLists/RefineFlateLIst/RefineFlateList';

export default function Refine(props) {
  function handleBackButtonClick() {
    props.navigation.goBack();
    return true;
  }

  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

  const toast = useToast();
  const navigation = useNavigation();
  const pickerRef = useRef();
  const mode = useSelector(state => state.mode);
  const themecolor = new MyThemeClass(mode).getThemeColor();

  const [loader, setLoader] = useState(false);
  const [availability, setAvailablitity] = useState("");
  const [status, setStatus] = useState("Hi community! I am open to new connections");
  const [statusLength, setStatusLength] = useState(42);
  const [distance, setDistance] = useState(23);
  const [purpose, setPurpose] = useState([
    {
      id:1,
      name:"Coffee",
      touch:true
    },
    {
      id:2,
      name:"Business",
      touch:true
    },
    {
      id:3,
      name:"Hobbies",
      touch:false
    },
    {
      id:4,
      name:"Friendship",
      touch:true
    },
    {
      id:5,
      name:"Movies",
      touch:false
    },
    {
      id:6,
      name:"Dining",
      touch:false
    },
    {
      id:7,
      name:"Dating",
      touch:false
    },
    {
      id:8,
      name:"Matrimony",
      touch:false
    },
  ]
);

  const handleStatus = (txt) => {
    setStatus(txt)
    setStatusLength(txt.length)

  }

  

  return (
    <View style={{ ...styles.bg, backgroundColor: themecolor.THEMECOLOR }}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={mode === 'dark' ? 'light-content' : 'dark-content'}
      />

      <Header title="Refine" backIcon={true}
        onPressBack={() => handleBackButtonClick()} />

      {loader ? (
        <LoadingFullScreen style={{ flex: 1 }} />
      ) : (
        <>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ ...styles.Containter }} >

              <SafeAreaView>
                <Text
                  allowFontScaling={false}
                  style={{ ...styles.headtxt, color: themecolor.BACKICON, }}
                >
                  Select Your Availability
                </Text>
                <View style={styles.mgt5} />
                <View style={{ borderColor: themecolor.BACKICON, ...styles.pickercon }}>
                  <Picker mode="dropdown"
                    ref={pickerRef}
                    selectedValue={availability}
                    onValueChange={(itemValue, itemIndex) =>
                      setAvailablitity(itemValue)
                    }
                    style={{ ...styles.picker, color: themecolor.BACKICON, }}  >
                    <Picker.Item label="Available I Hey Let Us Connect" style={styles.pickeritem} value="Available I Hey Let Us Connect" />
                    <Picker.Item
                      label="Away I Stay Discrete And Watch"
                      style={styles.pickeritem}
                      value="Away I Stay Discrete And Watch"
                    />
                    <Picker.Item
                      label="Busy I Do Not Distrub I Will Caatch Up Later"
                      style={styles.pickeritem}
                      value="Busy I Do Not Distrub I Will Caatch Up Later"
                    />
                    <Picker.Item
                      label="SOS I Emergency! Need Assistance! Help"
                      style={styles.pickeritem}
                      value="SOS I Emergency! Need Assistance! Help"
                    />
                  </Picker>
                </View>
              </SafeAreaView>

              <View style={styles.mgt10} />

              <SafeAreaView>
                <Text
                  allowFontScaling={false}
                  style={{ ...styles.headtxt, color: themecolor.BACKICON, }}
                >
                  Add Your Status
                </Text>
                <View style={styles.mgt5} />
                <TextInput
                  style={{ ...styles.txtInput, color: themecolor.BACKICON, borderColor: themecolor.BACKICON }}
                  multiline
                  numberOfLines={3}
                  maxLength={250}
                  onChangeText={(txt) => handleStatus(txt)}
                  value={status}
                />
                <View style={{ alignItems: "flex-end", alignSelf: "flex-end", margin: 3, }}>
                  <Text
                    allowFontScaling={false}
                    style={{ ...styles.smalltxt, color: themecolor.BACKICON, }}
                  >
                    {statusLength}/250
                  </Text>
                </View>

              </SafeAreaView>


              <SafeAreaView>
                <Text
                  allowFontScaling={false}
                  style={{ ...styles.headtxt, color: themecolor.BACKICON, }}
                >
                  Select Hyper Local Distance
                </Text>
                <View style={styles.mgt5} />
                <View style={{ marginVertical: 25 }} />
                <View >
                  <Slider
                    style={{ width: "100%", height: 30 }}
                    minimumValue={1}
                    maximumValue={100}
                    minimumTrackTintColor={themecolor.ADDTOCARTBUTTONCOLOR}
                    value={distance}
                    step={1}
                    thumbTintColor={themecolor.ADDTOCARTBUTTONCOLOR}
                    onValueChange={(vlu) => setDistance(vlu)}
                  />
                  <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                    <Text
                      allowFontScaling={false}
                      style={{ ...styles.txt, color: themecolor.BACKICON, }}
                    >
                      1 Km
                    </Text>
                    <Text
                      allowFontScaling={false}
                      style={{ ...styles.txt, color: themecolor.BACKICON, }}
                    >
                      100 Km
                    </Text>
                  </View>
                  <View
                    style={{
                      ...styles.rangebtn,
                      left: (distance / 100) * 100 + '%',
                      backgroundColor: themecolor.ADDTOCARTBUTTONCOLOR,
                    }}
                  >
                    <Text
                      allowFontScaling={false}
                      style={{ ...styles.txt, color: "#fff", }}
                    >
                      {distance}
                    </Text>
                  </View>
                  <View
                    style={{
                      ...styles.rangeArrow, left: (distance / 100) * 100 + '%', borderBottomColor: themecolor.ADDTOCARTBUTTONCOLOR,
                    }}
                  />

                </View>
              </SafeAreaView>

              <View style={styles.mgt5} />

              <SafeAreaView>
                <Text
                  allowFontScaling={false}
                  style={{ ...styles.headtxt, color: themecolor.BACKICON, }}
                >
                  Select Purpose
                </Text>
                <View style={styles.mgt5} />
                <RefineFlateList data={purpose} />
              </SafeAreaView>

            </View>

            <View style={{ marginVertical: 2 }} />

            <View style={{ ...styles.btnsave, }}>
              <HalfSizeButton
                title="Save & Explore"
                onPress={() => navigation.navigate('Dashboard')}
                color={"#fff"}
                backgroundColor={themecolor.ADDTOCARTBUTTONCOLOR}
                borderColor={themecolor.ADDTOCARTBUTTONCOLOR}
              />
            </View>
          </ScrollView>
          

        </>
      )}
    </View>
  );
}
