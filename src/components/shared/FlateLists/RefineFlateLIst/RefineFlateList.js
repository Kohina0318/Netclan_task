import React, { useState } from 'react';
import {
    TouchableOpacity,
    View,
    FlatList,
    Text,
    Image,
    Dimensions,
} from 'react-native';
import { MyThemeClass } from '../../../Theme/ThemeDarkLightColor';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../assets/css/RefineCss/RefineStyle';

const { width, height } = Dimensions.get('screen');

function RefineDataList({ item, themecolor, }) {
    const navigation = useNavigation();
    
    const [touch, setTouch]=useState(item.touch);

    const handleClick=()=>{
        setTouch(!touch)
    }

    return (
        <TouchableOpacity activeOpacity={0.5} 
        onPress={()=>handleClick()}
        style={{ ...styles.flatelistcon, backgroundColor: touch?themecolor.ADDTOCARTBUTTONCOLOR:'transparent', borderColor: themecolor.ADDTOCARTBUTTONCOLOR }}>
            <Text
                allowFontScaling={false}
                style={{ ...styles.txt, color:touch?"#fff":themecolor.ADDTOCARTBUTTONCOLOR, }}
            >
                {item.name}
            </Text>
        </TouchableOpacity>
    );
}

export function RefineFlateList(props) {
    const mode = useSelector(state => state.mode);
    const themecolor = new MyThemeClass(mode).getThemeColor();

    return (
        <FlatList
            data={props.data}
            renderItem={({ item }) => (
                <RefineDataList item={item} themecolor={themecolor}/>
            )}
            numColumns={3}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}
        />
    );
}
