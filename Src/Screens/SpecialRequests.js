// Package Import
import React, { Component } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Strings Import 
import Strings from '../Assets/Strings';

// Theme Import
import { Diem, Colors, FontSize } from '../../Constant/Theme';

// Redux 
import { connect } from 'react-redux';

const mapToStateProps = state => ({
    RTL: state.Language.RTL,   // to Get RTL redux State
})

class SpeacialRequests extends Component {

    render() {

        const Navigation = this.props.navigation;  // To Handle Moving Between Screens

        let RTL = this.props.RTL;  // Declare RTL Redux State

        Strings.setLanguage(RTL ? 'en' : 'ar');  // To Change Language According to RTL Redux State

        // Main Return
        return (
            <SafeAreaView style={Styles.MainView}>

                {/* Main Image */}
                <View style={Styles.ImageCon}>
                    <Image style={{ width: '100%', height: '100%', resizeMode: 'cover' }} source={require('../Assets/Layer9568.png')} />
                </View>

                <ImageBackground style={{ width: '100%', height: Diem.height * 0.64 }} source={require('../Assets/Layer8570.png')}>

                    {/* Drafting Contract */}
                    <View style={{ height: Diem.height * 0.12, width: Diem.width, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={Styles.GRDTBtn} onPress={() => Navigation.navigate('DraftingContract')}>
                            <LinearGradient start={{ useAngle: true, angle: 180, angleCenter: { x: 0, y: 0 } }} end={{ x: 0, y: 0.95 }}
                                locations={[0.15, 0.5]} colors={[Colors.GrayButton.Color2, Colors.GrayButton.Color1]} style={Styles.GRDT}>
                                <Text style={Styles.GRDTBtnTxt}>{Strings.specialRequests}</Text>
                            </LinearGradient>
                        </View>
                    </View>

                    <View style={{ height: Diem.height * 0.14, width: Diem.width, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ width: '80%', fontSize: FontSize.medium.fontsize, textAlign: 'center', lineHeight: 40 }}>{Strings.speacialrequestpara1}</Text>
                    </View>

                    <View style={{ height: Diem.height * 0.12, width: Diem.width, marginTop: Diem.height * 0.08, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ width: '80%', fontSize: FontSize.medium.fontsize, textAlign: 'center', lineHeight: 40 }}>{Strings.speacialrequestpara2}</Text>
                    </View>

                    <View style={Styles.GRDTCon}>
                        <TouchableOpacity activeOpacity={0.4} style={Styles.GRDTBtn2} onPress={() => Navigation.navigate('SpecialRequests2')}>
                            <LinearGradient start={{ x: 0, y: 2 }} end={{ x: 1, y: 2.2 }}
                                locations={[0, 0.5, 1]} colors={[Colors.Buttons.Color3, Colors.Buttons.Color2, Colors.Buttons.Color1]} style={Styles.GRDT2}>
                                <Text style={Styles.GRDTBtnTxt2}>{Strings.selectService}</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>

                </ImageBackground>
            </SafeAreaView>
        );
    };
};

// Styles
const Styles = StyleSheet.create({
    MainView: {
        width: Diem.width,
        height: Diem.height * 0.89,
    },
    ImageCon: {
        width: Diem.width,
        height: Diem.height * 0.25,
    },
    GRDT: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: Colors.Gray.Color,
        opacity: 0.95
    },
    GRDTBtn: {
        width: '80%',
        height: '60%',
    },
    GRDTBtnTxt: {
        color: Colors.White.Color,
        fontSize: FontSize.xmedium.fontsize
    },
    GRDTCon: {
        width: Diem.width,
        height: Diem.height * 0.1,
        marginTop: Diem.height * 0.02,
        justifyContent: 'center',
        alignItems: 'center',
    },
    GRDT2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: Colors.Gray.Color
    },
    GRDTBtn2: {
        width: '50%',
        height: '65%',
    },
    GRDTBtnTxt2: {
        color: Colors.White.Color,
        fontSize: FontSize.large.fontsize
    }
});
export default connect(mapToStateProps)(SpeacialRequests);

