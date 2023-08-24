import React, { useState } from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import { View, Text, TouchableOpacity, Dimensions, SafeAreaView, TextInput, Switch } from 'react-native';
import { useSelector } from 'react-redux';
import { MyThemeClass } from '../../Theme/ThemeDarkLightColor';
import { styles } from '../../../assets/css/RBSheetCSS/FilterRbSheetStyle';
import Icon1 from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';
import HalfSizeButton from '../button/halfSizeButton';
import { useNavigation } from '@react-navigation/native';
import { RefineFlateList } from '../FlateLists/RefineFlateLIst/RefineFlateList';
import { FilterRbSheetFlateList } from '../FlateLists/RBSheetFlateList/FilterRbSheetFlateList';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const { width, height } = Dimensions.get('window');

const datapur = [
    {
        id: 1,
        name: "Coffee",
        touch: false
    },
    {
        id: 2,
        name: "Business",
        touch: false
    },
    {
        id: 3,
        name: "Hobbies",
        touch: false
    },
    {
        id: 4,
        name: "Friendship",
        touch: false
    },
    {
        id: 5,
        name: "Movies",
        touch: false
    },
    {
        id: 7,
        name: "Dating",
        touch: false
    },

]

export const FilterRbSheet = props => {
    const navigation = useNavigation();

    const mode = useSelector(state => state.mode);
    const themecolor = new MyThemeClass(mode).getThemeColor();

    const [profession, setProfession] = useState("")
    const [universityName, setUniversityName] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [hometown, setHomeTown] = useState("")
    const [lives, setLives] = useState("")
    const [gender, setGender] = useState("")
    const [hobbies, setHobbies] = useState("")
    const [movies, setMovies] = useState("")
    const [food, setFood] = useState("")
    const [sport, setSport] = useState("")
    const [purpose, setPurpose] = useState(datapur);
    const [range, setRange] = useState([0,100]);


    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [isEnabled1, setIsEnabled1] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

    const handleMin = () => {
        props.refRBSheet.current.close()
    }

    const handleClear = () => {
        setProfession("")
        setUniversityName("")
        setCompanyName("")
        setHomeTown("")
        setLives("")
        setGender("")
        setHobbies("")
        setMovies("")
        setFood("")
        setSport("")
        setIsEnabled(false)
        setIsEnabled1(false)
        setPurpose(datapur)
        setRange([0,100])
    }

    const multiSliderValuesChange = (value) => {
        setRange(value)
    }

    return (
        <>
            <RBSheet
                ref={props.refRBSheet}
                animationType={'slide'}
                closeOnDragDown={false}
                closeOnPressMask={false}
                closeOnPressBack={false}
                height={height}
                customStyles={{
                    container: {
                        backgroundColor: themecolor.RB2,
                    },
                    draggableIcon: {
                        display: 'none',
                    },
                }}>

                <View style={{ ...styles.closeContainer, backgroundColor: themecolor.ADDTOCARTBUTTONCOLOR }}>
                    <TouchableOpacity activeOpacity={0.5} style={{ width: "10%" }} onPress={() => handleMin()}>
                        <Icon1 name='close' size={22} color={"#fff"} />
                    </TouchableOpacity>
                    <View style={{ width: "75%", }}>
                        <Text
                            allowFontScaling={false}
                            style={{ ...styles.headtxtBig, color: themecolor.TXTWHITE1, }}
                        >
                            Filter
                        </Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.5} style={{ width: "13%" }} onPress={() => handleClear()} >
                        <Text
                            allowFontScaling={false}
                            style={{ ...styles.txt, color: themecolor.TXTWHITE1, }}
                        >
                            Clear
                        </Text>
                    </TouchableOpacity>
                </View>

                <ScrollView showsVerticalScrollIndicator={false} >

                    <View style={{ ...styles.container, borderColor: themecolor.BOXBORDERCOLOR1 }}>
                        <View style={{ ...styles.innerWidth }}>
                            <Text
                                allowFontScaling={false}
                                style={{ ...styles.headtxtBig, color: themecolor.BACKICON, }}
                            >
                                Profession|University|Company
                            </Text>

                            <View style={styles.mrt10} />

                            <SafeAreaView>
                                <Text
                                    allowFontScaling={false}
                                    style={{ ...styles.headtxt, color: themecolor.BACKICON, }}
                                >
                                    Profession
                                </Text>
                                <View style={styles.mrt5} />
                                <TextInput
                                    style={{ ...styles.txtInput, color: themecolor.BACKICON, borderColor: themecolor.BACKICON }}
                                    onChangeText={(txt) => setProfession(txt)}
                                    value={profession}
                                    placeholder="Enter profession to filter"
                                />
                            </SafeAreaView>

                            <View style={styles.mrt10} />

                            <SafeAreaView>
                                <Text
                                    allowFontScaling={false}
                                    style={{ ...styles.headtxt, color: themecolor.BACKICON, }}
                                >
                                    University Name
                                </Text>
                                <View style={styles.mrt5} />
                                <TextInput
                                    style={{ ...styles.txtInput, color: themecolor.BACKICON, borderColor: themecolor.BACKICON }}
                                    onChangeText={(txt) => setUniversityName(txt)}
                                    value={universityName}
                                    placeholder="Enter university name to filter"
                                />
                            </SafeAreaView>

                            <View style={styles.mrt10} />

                            <SafeAreaView>
                                <Text
                                    allowFontScaling={false}
                                    style={{ ...styles.headtxt, color: themecolor.BACKICON, }}
                                >
                                    Company Name
                                </Text>
                                <View style={styles.mrt5} />
                                <TextInput
                                    style={{ ...styles.txtInput, color: themecolor.BACKICON, borderColor: themecolor.BACKICON }}
                                    onChangeText={(txt) => setCompanyName(txt)}
                                    value={companyName}
                                    placeholder="Enter company name to filter"
                                />
                            </SafeAreaView>

                        </View>
                    </View>

                    <View style={{ ...styles.container, borderColor: themecolor.BOXBORDERCOLOR1 }}>
                        <View style={{ ...styles.innerWidth }}>
                            <Text
                                allowFontScaling={false}
                                style={{ ...styles.headtxtBig, color: themecolor.BACKICON, }}
                            >
                                Location
                            </Text>

                            <View style={styles.mrt10} />

                            <SafeAreaView>
                                <Text
                                    allowFontScaling={false}
                                    style={{ ...styles.headtxt, color: themecolor.BACKICON, }}
                                >
                                    Hometown
                                </Text>
                                <View style={styles.mrt5} />
                                <TextInput
                                    style={{ ...styles.txtInput, color: themecolor.BACKICON, borderColor: themecolor.BACKICON }}
                                    onChangeText={(txt) => setHomeTown(txt)}
                                    value={hometown}
                                    placeholder="Enter city to filter"
                                />
                            </SafeAreaView>

                            <View style={styles.mrt10} />

                            <SafeAreaView>
                                <Text
                                    allowFontScaling={false}
                                    style={{ ...styles.headtxt, color: themecolor.BACKICON, }}
                                >
                                    Lives In
                                </Text>
                                <View style={styles.mrt5} />
                                <TextInput
                                    style={{ ...styles.txtInput, color: themecolor.BACKICON, borderColor: themecolor.BACKICON }}
                                    onChangeText={(txt) => setLives(txt)}
                                    value={lives}
                                    placeholder="Enter city to filter"
                                />
                            </SafeAreaView>

                        </View>
                    </View>

                    <View style={{ ...styles.container, borderColor: themecolor.BOXBORDERCOLOR1 }}>
                        <View style={{ ...styles.innerWidth }}>
                            <Text
                                allowFontScaling={false}
                                style={{ ...styles.headtxtBig, color: themecolor.BACKICON, }}
                            >
                                Preference
                            </Text>

                            <View style={styles.mrt10} />

                            <SafeAreaView>
                                <Text
                                    allowFontScaling={false}
                                    style={{ ...styles.headtxt, color: themecolor.BACKICON, }}
                                >
                                    Gender
                                </Text>

                                <View style={styles.mrt5} />

                                <FilterRbSheetFlateList gender={gender} setGender={setGender} />

                            </SafeAreaView>

                            <View style={styles.mrt10} />

                            <SafeAreaView>
                                <Text
                                    allowFontScaling={false}
                                    style={{ ...styles.headtxt, color: themecolor.BACKICON, }}
                                >
                                    Hobbies
                                </Text>
                                <View style={styles.mrt5} />
                                <TextInput
                                    style={{ ...styles.txtInput, color: themecolor.BACKICON, borderColor: themecolor.BACKICON }}
                                    onChangeText={(txt) => setHobbies(txt)}
                                    value={hobbies}
                                    placeholder="Enter hobbies to filter"
                                />
                            </SafeAreaView>

                            <View style={styles.mrt10} />

                            <SafeAreaView>
                                <Text
                                    allowFontScaling={false}
                                    style={{ ...styles.headtxt, color: themecolor.BACKICON, }}
                                >
                                    Movies
                                </Text>
                                <View style={styles.mrt5} />
                                <TextInput
                                    style={{ ...styles.txtInput, color: themecolor.BACKICON, borderColor: themecolor.BACKICON }}
                                    onChangeText={(txt) => setMovies(txt)}
                                    value={movies}
                                    placeholder="Enter movies to filter"
                                />
                            </SafeAreaView>

                            <View style={styles.mrt10} />

                            <SafeAreaView>
                                <Text
                                    allowFontScaling={false}
                                    style={{ ...styles.headtxt, color: themecolor.BACKICON, }}
                                >
                                    Food
                                </Text>
                                <View style={styles.mrt5} />
                                <TextInput
                                    style={{ ...styles.txtInput, color: themecolor.BACKICON, borderColor: themecolor.BACKICON }}
                                    onChangeText={(txt) => setFood(txt)}
                                    value={food}
                                    placeholder="Enter cuision to filter"
                                />
                            </SafeAreaView>

                            <View style={styles.mrt10} />

                            <SafeAreaView>
                                <Text
                                    allowFontScaling={false}
                                    style={{ ...styles.headtxt, color: themecolor.BACKICON, }}
                                >
                                    Sports
                                </Text>
                                <View style={styles.mrt5} />
                                <TextInput
                                    style={{ ...styles.txtInput, color: themecolor.BACKICON, borderColor: themecolor.BACKICON }}
                                    onChangeText={(txt) => setSport(txt)}
                                    value={sport}
                                    placeholder="Enter sports to filter"
                                />
                            </SafeAreaView>

                            <View style={styles.mrt10} />
                            <View style={styles.mrt5} />

                            <SafeAreaView>
                                <Text
                                    allowFontScaling={false}
                                    style={{ ...styles.headtxt, color: themecolor.BACKICON, }}
                                >
                                    Others
                                </Text>
                                <View style={styles.mrt5} />
                                <View style={{ ...styles.switchcon }}>
                                    <Text
                                        allowFontScaling={false}
                                        style={{ ...styles.headtxtbold, color: themecolor.TXTWHITE, }}
                                    >
                                        Smokes
                                    </Text>
                                    <Switch
                                        trackColor={{ false: themecolor.TXTGREY, true: '#B2E2E2' }}
                                        thumbColor={isEnabled ? themecolor.BACKICON : '#f4f3f4'}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={toggleSwitch}
                                        value={isEnabled}
                                    />
                                </View>
                                <View style={styles.mrt5} />
                                <View style={{ ...styles.switchcon }}>
                                    <Text
                                        allowFontScaling={false}
                                        style={{ ...styles.headtxtbold, color: themecolor.TXTWHITE, }}
                                    >
                                        Drinks
                                    </Text>
                                    <Switch
                                        trackColor={{ false: themecolor.TXTGREY, true: '#B2E2E2' }}
                                        thumbColor={isEnabled1 ? themecolor.BACKICON : '#f4f3f4'}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={toggleSwitch1}
                                        value={isEnabled1}
                                    />
                                </View>


                            </SafeAreaView>

                        </View>
                    </View>

                    <View style={{ ...styles.container, borderColor: themecolor.BOXBORDERCOLOR1 }}>
                        <View style={{ ...styles.innerWidth }}>

                            <View style={{ ...styles.scorcecon }}>
                                <Text
                                    allowFontScaling={false}
                                    style={{ ...styles.headtxtBig, color: themecolor.BACKICON, }}
                                >
                                    Profile Completion Score
                                </Text>
                                <Text
                                    allowFontScaling={false}
                                    style={{ ...styles.headtxtbold, color: themecolor.BACKICON, }}
                                >
                                    {range[0]}-{range[1]}
                                </Text>
                            </View>

                            <View style={styles.mrt10} />
                            <View style={{width:"100%",}}>
                                <MultiSlider
                                    values={[range[0], range[1]]}
                                    sliderLength={width*0.8} 
                                    onValuesChange={(values) => multiSliderValuesChange(values)}
                                    min={0}
                                    max={100}
                                    step={1}
                                    selectedStyle={{ backgroundColor: themecolor.ADDTOCARTBUTTONCOLOR}}
                                    markerStyle={{ backgroundColor: themecolor.ADDTOCARTBUTTONCOLOR, height: 25,width:25}}
                                    trackStyle={{ height: 4,}}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{ ...styles.container, borderColor: themecolor.BOXBORDERCOLOR1 }}>
                        <View style={{ ...styles.innerWidth }}>
                            <Text
                                allowFontScaling={false}
                                style={{ ...styles.headtxtBig, color: themecolor.BACKICON, }}
                            >
                                Purpose
                            </Text>

                            <View style={styles.mrt10} />

                            <SafeAreaView>
                                <RefineFlateList data={purpose} />
                            </SafeAreaView>

                        </View>
                    </View>


                    <View style={{ marginVertical: 50 }} />

                </ScrollView>


                <View style={{ ...styles.btnsave, }}>
                    <HalfSizeButton
                        title="Apply"
                        onPress={() => handleMin()}
                        color={"#fff"}
                        backgroundColor={themecolor.ADDTOCARTBUTTONCOLOR}
                        borderColor={themecolor.ADDTOCARTBUTTONCOLOR}
                    />
                </View>

            </RBSheet>
        </>
    );
};
