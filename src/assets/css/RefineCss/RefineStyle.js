import { StyleSheet, Dimensions } from 'react-native';
import { FontSize } from '../../fonts/Fonts';
import { Colors } from '../../config/Colors';
import { FontFamily } from '../../fonts/FontFamily';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    bg: { flex: 1, },
    Containter: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: width * 0.9,
        padding: 15,
        margin: 10,
    },
    headtxt: {
        fontSize: FontSize.labelText5,
        fontFamily: FontFamily.PopinsRegular,
        color: Colors.black,
        fontWeight: 700
    },
    txt: {
        fontSize: FontSize.labelText2,
        fontFamily: FontFamily.PopinsRegular,
        color: Colors.black,
    },
    smalltxt: {
        fontSize: FontSize.labelText,
        fontFamily: FontFamily.PopinsRegular,
        color: Colors.black,
    },
    txtInput: {
        borderWidth: 0.6, borderRadius: 10, padding: 10,
        fontSize: FontSize.labelText3,
        fontFamily: FontFamily.PopinsRegular,
        textAlignVertical: 'top'
    },
    mgt5: {
        marginTop: 8
    },
    mgt10: {
        marginTop: 15
    },
    pickercon: {
        borderRadius: 10, borderWidth: 0.6, padding: 2
    },
    picker:
    {
        fontSize: FontSize.labelText3,
        fontFamily: FontFamily.PopinsRegular,
        padding: 0,
        margin: 0,
        borderRadius: 10,
    },
    pickeritem:
    {
        fontSize: FontSize.labelText3,
        fontFamily: FontFamily.PopinsRegular,
    },
    btnsave:{
        width:width*0.6,
        justifyContent:"center",
        alignSelf:"center"
    },
    rangebtn:{
        justifyContent: 'center',
        alignItems: 'center', position: 'absolute',
        top: -40, padding:8, fontSize: FontSize.labelText4,paddingLeft:11,paddingRight:11,
        fontFamily: FontFamily.PopinsRegular,
    },
    rangeArrow:{
        top: -57,
        width: 0,
        height: 0,
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 10,
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'black',
        transform: [{ rotate: '180deg' }],
        marginLeft:5,
        marginRight:5,
        textAlign:"center"
    },
    flatelistcon:{
        borderRadius: 20, borderWidth: 0.6, padding: 7,
        width:width*0.25, margin:3, alignSelf:"center", alignItems:"center"
    }



});

export { styles };
