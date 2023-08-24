import { StyleSheet, Dimensions } from 'react-native';
import { FontSize } from '../../fonts/Fonts';
import { Colors } from '../../config/Colors';
import { FontFamily } from '../../fonts/FontFamily';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
   closeContainer:{
    backgroundColor:"red",
    padding:15,
    flexDirection:'row',
    alignItems:"center",
    width:width,
    justifyContent:"space-between"
   },
   headtxt: {
      fontSize: FontSize.labelText4,
      fontFamily: FontFamily.PopinsRegular,
      color: Colors.black,
  },
   headtxtbold: {
      fontSize: FontSize.labelText4,
      fontFamily: FontFamily.PopinsRegular,
      color: Colors.black,
      fontWeight: 700
  },
  headtxtBig: {
   fontSize: FontSize.labelTextbigger,
   fontFamily: FontFamily.PopinsRegular,
   color: Colors.black,
   fontWeight: 700
},
  txt: {
      fontSize: FontSize.labelText3,
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
      textAlignVertical: 'top',
      justifyContent:"center",
      alignItems:'center',
      height:40
  },

  container:{
   width:width,
   padding:20,
   justifyContent: 'center',
   alignSelf: 'center',
   alignItems:"center",
   borderWidth:0.5,
   elevation:1,marginTop:15
  },
  innerWidth:{
   width:width*0.8,
  },
  mrt10:{
   marginTop:12
  },
  mrt5:{
   marginTop:7
  },
  switchcon:{
   flexDirection:'row', justifyContent:'space-between',alignItems:"center", width:"100%",
  },
  btnsave:{
   width:width*0.95,
   justifyContent:"center",
   alignSelf:"center",
   position: "absolute", bottom: 38
},
scorcecon:{
   flexDirection:"row",justifyContent:"space-between", width:width*0.78, alignItems:'center'
}
  
});

export { styles };
