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
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/Ionicons';
import { FilterRbSheet } from '../RBSheet/FilterRbSheet'


export default function Search(props) {
    const refRBSheet = useRef();
    const mode = useSelector(state => state.mode);
    const themecolor = new MyThemeClass(mode).getThemeColor();


    return (
        <View style={{ ...styles.searchcontain, opacity: props.expanded ? 0.3 : 1 }}>

            {props.noFilter ?
                <View style={{ ...styles.boxSearchButton, backgroundColor: themecolor.ADDTOCARTBUTTONCOLOR }}>
                    <Icon name="search" color={themecolor.ADDTOCARTBUTTONCOLOR} size={23} style={{ padding: 5, color: "#fff" }} />
                </View>
                : <></>}

            <View style={{ ...styles.searchbtn, borderColor: themecolor.ADDTOCARTBUTTONCOLOR }}>
                <Icon name="search" color={themecolor.ADDTOCARTBUTTONCOLOR} size={22} style={{ width: "20%", left: 10 }} />
                <TextInput
                    style={{ padding: 0, width: "70%", color: themecolor.TXTGREYS }}
                    onChangeText={(txt) => props.handleSearch(txt)}
                    value={props.searchValue}
                    placeholder='Search'
                />
                {props.searchValue == '' ?
                    <></>
                    :
                    <View style={styles.Close}>
                        <TouchableOpacity onPress={() => props.handleClear()}>
                            <Icon1 name='close' size={16} color={themecolor.TXTWHITE} />
                        </TouchableOpacity>
                    </View>
                }
            </View>

            {props.noFilter ?
                <></>
                :
                <TouchableOpacity activeOpacity={0.5}
                    onPress={() => refRBSheet.current.open()}
                    style={{ ...styles.searchFilter }}>
                    <Image
                        style={{
                            width: 30,
                            height: 30
                        }}
                        source={require('../../../assets/images/filter.png')}
                    />
                </TouchableOpacity>
            }

            <FilterRbSheet refRBSheet={refRBSheet} />
        </View>

    )
}
