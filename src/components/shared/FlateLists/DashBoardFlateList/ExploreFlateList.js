import React, { useEffect, useState } from 'react';
import {
    TouchableOpacity,
    View,
    FlatList,
    Text,
    Image,
} from 'react-native';

import { MyThemeClass } from '../../../Theme/ThemeDarkLightColor';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../assets/css/DashBoardCss/DashboardStyle';
import Slider from '@react-native-community/slider';

function ExploreDataFlateList({ item, themecolor, TopicId }) {

    const navigation = useNavigation();

    var Purposenew = ""

    item.purpose.map((element, items, index) => {
        if (items == 0) {
            Purposenew = element
        } else {
            Purposenew = Purposenew.concat(" | ", element)
        }
    })

    var widthcolor = item.distance * 1



    return (
        <View style={{ ...styles.fullwidth, }}>
            <TouchableOpacity activeOpacity={0.8}
                style={{
                    ...styles.datalistView,
                    backgroundColor: themecolor.BOXBORDERCOLOR,
                    borderColor: themecolor.BOXBORDERCOLOR1,
                }}
            >
                <View style={{ flexDirection: 'row', width: "100%" }}>
                    <View style={{ ...styles.imgViewcon }}>
                        <View style={{ ...styles.innerImg, backgroundColor: themecolor.NEWGREY, }}>
                            <Text
                                allowFontScaling={false}
                                style={{ ...styles.imgtxt, color:themecolor.ADDTOCARTBUTTONCOLOR, textAlign: 'center' }}
                            >
                                Jk
                            </Text>
                        </View>
                    </View>

                    <View style={{ width: "86%", flexDirection: "column" }}>
                        <Text
                            allowFontScaling={false}
                            style={{ ...styles.headtxts, color: themecolor.ADDTOCARTBUTTONCOLOR, textAlign: "right" }}
                        >
                            + INVITE
                        </Text>
                        <Text
                            allowFontScaling={false}
                            style={{ ...styles.headtxt, color: themecolor.ADDTOCARTBUTTONCOLOR, }}
                        >
                            {item.name}
                        </Text>
                        <Text
                            allowFontScaling={false}
                            style={{ ...styles.headtxts1, color: themecolor.ADDTOCARTBUTTONCOLOR, }}
                        >
                            {item.address} | {item.work}
                        </Text>
                        <Text
                            allowFontScaling={false}
                            style={{ ...styles.headtxt, color: themecolor.ADDTOCARTBUTTONCOLOR, }}
                        >
                            Within {item.distance} KM
                        </Text>

                        <View style={{ ...styles.levelCon, backgroundColor: themecolor.NEWGREY, }}>
                            <View style={{ ...styles.levelinnercon, width: widthcolor, backgroundColor: themecolor.ADDTOCARTBUTTONCOLOR }}>
                            </View>
                        </View>

                    </View>
                </View>

                <View style={{ width: "100%", marginTop: 10 }}>
                    <Text
                        allowFontScaling={false}
                        style={{ ...styles.headtxts, color: themecolor.ADDTOCARTBUTTONCOLOR, }}
                    >
                        {Purposenew}
                    </Text>
                    <Text
                        allowFontScaling={false}
                        style={{ ...styles.headtxts1, color: themecolor.ADDTOCARTBUTTONCOLOR, }}
                    >
                        {item.status}
                    </Text>

                </View>
            </TouchableOpacity>
        </View>
    );
}

export function ExploreFlateList(props) {
    const mode = useSelector(state => state.mode);
    const themecolor = new MyThemeClass(mode).getThemeColor();

    return (
        <FlatList
            data={props.data}
            renderItem={({ item }) => (
                <ExploreDataFlateList item={item} themecolor={themecolor} />
            )}
            showsVerticalScrollIndicator={false}
            scrollEnabled={true}
        />
    );
}
