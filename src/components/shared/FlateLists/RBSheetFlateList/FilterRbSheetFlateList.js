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

function FilterRbSheetFlateDataList({ item, themecolor,gender,setGender }) {
    const navigation = useNavigation();
    
    // const [touch, setTouch]=useState("false");

    const handleClick=(itm)=>{
        // setTouch(!touch)
        setGender(itm)
    }

    return (
        <TouchableOpacity activeOpacity={0.5} 
        onPress={()=>handleClick(item.gender)}
        style={{ ...styles.flatelistcon, backgroundColor: gender==item.gender?themecolor.ADDTOCARTBUTTONCOLOR:'transparent', borderColor: themecolor.ADDTOCARTBUTTONCOLOR }}>
            <Text
                allowFontScaling={false}
                style={{ ...styles.txt, color:gender==item.gender?"#fff":themecolor.ADDTOCARTBUTTONCOLOR, }}
            >
                {item.gender}
            </Text>
        </TouchableOpacity>
    );
}

export function FilterRbSheetFlateList(props) {
    const mode = useSelector(state => state.mode);
    const themecolor = new MyThemeClass(mode).getThemeColor();

    const data=[
        {id:1,
        gender:'Male'},
        {
            id:2,
            gender:"Female"
        },
        {
            id:3,
            gender:"Transgender"
        }

    ]

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <FilterRbSheetFlateDataList item={item} themecolor={themecolor} gender={props.gender} setGender={props.setGender}/>
            )}
            numColumns={3}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}
        />
    );
}
