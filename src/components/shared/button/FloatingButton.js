
import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    StatusBar,
    ScrollView, Image,
    Text, TouchableOpacity, TextInput, Animated,Modal
} from 'react-native';
import { useSelector } from 'react-redux';
import { MyThemeClass } from '../../Theme/ThemeDarkLightColor';
import { styles } from '../../../assets/css/DashBoardCss/DashboardStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FD from 'react-native-vector-icons/Foundation';
import II from 'react-native-vector-icons/Ionicons';
import FA from 'react-native-vector-icons/FontAwesome';
import MI from 'react-native-vector-icons/MaterialIcons';
import FT from 'react-native-vector-icons/Fontisto';

export default function FloatingButton(props) {
    const mode = useSelector(state => state.mode);
    const themecolor = new MyThemeClass(mode).getThemeColor();

    const translateY = useRef(new Animated.Value(0)).current;
   

    const toggleAnimation = () => {
        const toValue = props.expanded ? 0 : 1;
        Animated.spring(translateY, {
            toValue,
            friction: 9,
            useNativeDriver: true,
        }).start();
        props.setExpanded(!props.expanded);
    };
    const rotate = translateY.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '45deg'],
    });

    const backgroundOpacity = props.expanded ? 0.5 : 0; 

    const style1 = {
        transform: [
            { scale: translateY },
            {
                translateY: translateY.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -80],
                })
            }
        ]
    }

    const style2 = {
        transform: [
            { scale: translateY },
            {
                translateY: translateY.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -140],
                })
            }
        ]
    }

    const style3 = {
        transform: [
            { scale: translateY },
            {
                translateY: translateY.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -200],
                })
            }
        ]
    }

    const style4 = {
        transform: [
            { scale: translateY },
            {
                translateY: translateY.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -260],
                })
            }
        ]
    }

    const style5 = {
        transform: [
            { scale: translateY },
            {
                translateY: translateY.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -320],
                })
            }
        ]
    }

    const style6 = {
        transform: [
            { scale: translateY },
            {
                translateY: translateY.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -380],
                })
            }
        ]
    }

    const style7 = {
        transform: [
            { scale: translateY },
            {
                translateY: translateY.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -440],
                })
            }
        ]
    }


    return (
        <View styles={styles.containernew}>
             
              <View style={[styles.overlay,]} >
                <Animated.View style={[styles.fabContainer, style7,]}>
                    <View style={{ ...styles.aninneritem }}>
                        <Text
                            allowFontScaling={false}
                            style={{ ...styles.headtxtbig, color: themecolor.ADDTOCARTBUTTONCOLOR, }}
                        >
                            Dating
                        </Text>
                        <View style={{ marginHorizontal: 15 }} />
                        <View style={{ ...styles.iconanimated }}>
                            <II name="heart-circle-sharp" size={25} color={themecolor.BACKICON} />
                        </View>
                    </View>
                </Animated.View>

                <Animated.View style={[styles.fabContainer, style6]}>
                    <View style={{ ...styles.aninneritem }}>
                        <Text
                            allowFontScaling={false}
                            style={{ ...styles.headtxtbig, color: themecolor.ADDTOCARTBUTTONCOLOR, }}
                        >
                            Matrimony
                        </Text>
                        <View style={{ marginHorizontal: 15 }} />
                        <View style={{ ...styles.iconanimated }}>
                            <II name="infinite" size={24} color={themecolor.BACKICON} />
                        </View>
                    </View>
                </Animated.View>

                <Animated.View style={[styles.fabContainer, style5]}>
                    <View style={{ ...styles.aninneritem }}>
                        <Text
                            allowFontScaling={false}
                            style={{ ...styles.headtxtbig, color: themecolor.ADDTOCARTBUTTONCOLOR, }}
                        >
                            Buy-Sell-Rent
                        </Text>
                        <View style={{ marginHorizontal: 15 }} />
                        <View style={{ ...styles.iconanimated }}>
                            <FT name="shopping-bag-1" size={24} color={themecolor.BACKICON} />
                        </View>
                    </View>
                </Animated.View>

                <Animated.View style={[styles.fabContainer, style4]}>
                    <View style={{ ...styles.aninneritem }}>
                        <Text
                            allowFontScaling={false}
                            style={{ ...styles.headtxtbig, color: themecolor.ADDTOCARTBUTTONCOLOR, }}
                        >
                            Business Cards
                        </Text>
                        <View style={{ marginHorizontal: 15 }} />
                        <View style={{ ...styles.iconanimated }}>
                            <FA name="address-card" size={23} color={themecolor.BACKICON} />
                        </View>
                    </View>
                </Animated.View>

                <Animated.View style={[styles.fabContainer, style3]}>
                    <View style={{ ...styles.aninneritem }}>
                        <Text
                            allowFontScaling={false}
                            style={{ ...styles.headtxtbig, color: themecolor.ADDTOCARTBUTTONCOLOR, }}
                        >
                            Netclan Groups
                        </Text>
                        <View style={{ marginHorizontal: 15 }} />
                        <View style={{ ...styles.iconanimated }}>
                            <FA name="hashtag" size={23} color={themecolor.BACKICON} />
                        </View>
                    </View>
                </Animated.View>

                <Animated.View style={[styles.fabContainer, style2]}>
                    <View style={{ ...styles.aninneritem }}>
                        <Text
                            allowFontScaling={false}
                            style={{ ...styles.headtxtbig, color: themecolor.ADDTOCARTBUTTONCOLOR, }}
                        >
                            Job
                        </Text>
                        <View style={{ marginHorizontal: 15 }} />
                        <View style={{ ...styles.iconanimated }}>
                            <MI name="shopping-bag" size={24} color={themecolor.BACKICON} />
                        </View>
                    </View>
                </Animated.View>

                <Animated.View style={[styles.fabContainer, style1]}>
                    <View style={{ ...styles.aninneritem }}>
                        <Text
                            allowFontScaling={false}
                            style={{ ...styles.headtxtbig, color: themecolor.ADDTOCARTBUTTONCOLOR, }}
                        >
                            Notes
                        </Text>
                        <View style={{ marginHorizontal: 15 }} />
                        <View style={{ ...styles.iconanimated }}>
                            <FD name="clipboard-notes" size={27} color={themecolor.BACKICON} />
                        </View>
                    </View>
                </Animated.View>

                <Animated.View style={[styles.fabContainer, { transform: [{ translateY }] }]}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={toggleAnimation}
                        style={[styles.bottomAddButton, { backgroundColor: themecolor.ADDTOCARTBUTTONCOLOR }]}
                    >
                        <Animated.View style={{ transform: [{ rotate }] }}>
                            <Icon name='add' color="#fff" size={28} />
                        </Animated.View>
                    </TouchableOpacity>
                </Animated.View>
                </View>
        </View>
    )
}
