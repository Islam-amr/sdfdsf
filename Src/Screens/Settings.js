// Package Import
import React, { Component } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity, Alert, NativeModules } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';




// Strings Import 
import Strings from '../Assets/Strings';

// Theme Import
import { Diem, Colors, FontSize } from '../../Constant/Theme';

// Redux 
import { connect } from 'react-redux';
import * as Actions from '../Redux//Actions/LanguageAction';

const mapToStateProps = state => ({
    RTL: state.Language.RTL,   // to Get RTL redux State
})

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Language: true,
        }
    }

    componentDidMount() {
        if (this.props.RTL) {
            this.setState({
                Language: true
            })
        } else {
            this.setState({
                Language: false
            })
        }
    }

    onSelect(index, value) {
        this.setState({
            Language: value
        })
        console.log(this.state.Language)
    };

    ChangeLang() {
        if (this.props.RTL === this.state.Language) {

        } else {
            if (this.state.Language === true) {
                this.props.changeLanguageEN()
                setTimeout(() => {
                    NativeModules.DevSettings.reload();
                }, 10)
            } else {
                this.props.changeLanguageAR()
                setTimeout(() => {
                    NativeModules.DevSettings.reload();
                }, 10)
            }
        }
    }

    render() {

        const Navigation = this.props.navigation;  // To Handle Moving Between Screens

        let RTL = this.props.RTL;  // Declare RTL Redux State

        Strings.setLanguage(RTL ? 'en' : 'ar');  // To Change Language According to RTL Redux State

        // Main Return
        return (
            <ImageBackground style={{ width: '100%', height: '100%', resizeMode: 'cover' }} source={require('../Assets/Layer991.png')} >

                <SafeAreaView style={Styles.MainView}>

                    <View style={{ width: Diem.width, height: Diem.height * 0.15, alignItems: 'center', justifyContent: 'space-evenly' }}>
                        <View style={{ width: '80%', flexDirection: RTL ? 'row' : 'row-reverse', }}>
                            <Text style={{ fontSize: FontSize.medium.fontsize, fontWeight: '600' }}>{Strings.language}</Text>
                        </View>
                        <View style={{ width: '80%' }}>
                            <RadioGroup
                                onSelect={(index, value) => this.onSelect(index, value)}
                                style={{ flexDirection: 'row', justifyContent: 'space-around' }}
                                selectedIndex={RTL ? 0 : 1}
                                color={Colors.Gray.Color}
                                activeColor={Colors.SuccessGreen.Color}
                                thickness={2}
                            >
                                <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: RTL ? 'row' : 'row-reverse' }} value={true} >
                                    <Text style={{ fontSize: FontSize.small.fontsize, paddingHorizontal: '2%' }}>{Strings.english}</Text>
                                </View>
                                <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: RTL ? 'row' : 'row-reverse' }} value={false} >
                                    <Text style={{ fontSize: FontSize.small.fontsize, paddingHorizontal: '2%' }}>{Strings.arabic}</Text>
                                </View>
                            </RadioGroup>
                        </View>
                    </View>

                    {/* Apply Button */}
                    <View style={Styles.GRDTCon}>
                        <TouchableOpacity activeOpacity={0.4} style={Styles.GRDTBtn} onPress={() => this.ChangeLang()}>
                            <LinearGradient start={{ x: 0, y: 2 }} end={{ x: 1, y: 2.2 }}
                                locations={[0, 0.5, 1]} colors={[Colors.Buttons.Color3, Colors.Buttons.Color2, Colors.Buttons.Color1]} style={Styles.GRDT}>
                                <Text style={Styles.GRDTBtnTxt}>Apply</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>

                </SafeAreaView>
            </ImageBackground >
        );
    };
};

// Styles
const Styles = StyleSheet.create({
    MainView: {
        width: Diem.width,
        height: Diem.height * 0.89,
    },
    GRDTCon: {
        width: Diem.width,
        height: Diem.height * 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: '5%'
    },
    GRDT: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: Colors.Gray.Color
    },
    GRDTBtn: {
        width: '50%',
        height: '65%',
    },
    GRDTBtnTxt: {
        color: Colors.White.Color,
        fontSize: FontSize.large.fontsize
    }
});

export default connect(mapToStateProps, Actions)(Settings);