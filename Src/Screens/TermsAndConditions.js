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

class TermsAndConditions extends Component {

    render() {

        const Navigation = this.props.navigation;   // To Handle Moving Between Screens

        let RTL = this.props.RTL;  // Declare RTL Redux State

        Strings.setLanguage(RTL ? 'en' : 'ar');  // To Change Language According to RTL Redux State

        // Main Return
        return (
            <ImageBackground style={{ width: '100%', height: '100%', resizeMode: 'cover' }} source={require('../Assets/Layer991.png')} >

                <SafeAreaView style={Styles.MainView}>

                    {/* Saygha Logo  */}
                    <View style={Styles.LogoCon}>
                        <Image style={{ width: '50%', resizeMode: 'contain' }} source={require('../Assets/VectorSmartObject.png')} />
                    </View>

                    {/* Terms And Conditions */}
                    <View style={{ width: Diem.width, height: '60%', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={Styles.TermsAndConditionsCon}>
                            <Text style={Styles.TermsAndConditionsTxt}>{Strings.termsAndconditions}</Text>
                        </View>
                    </View>

                    {/* Accept Button */}
                    <View style={{ width: Diem.width, height: '15%', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={Styles.GRDTCon}>
                            <TouchableOpacity activeOpacity={0.4} style={Styles.GRDTBtn} onPress={() => Navigation.navigate('Home')}>
                                <LinearGradient start={{ x: 0, y: 2 }} end={{ x: 1, y: 2.2 }}
                                    locations={[0, 0.5, 1]} colors={[Colors.Buttons.Color3, Colors.Buttons.Color2, Colors.Buttons.Color1]} style={Styles.GRDT}>
                                    <Text style={Styles.GRDTBtnTxt}>{Strings.accept}</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
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
    LogoCon: {
        width: Diem.width,
        height: '25%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    TermsAndConditionsCon: {
        width: '80%',
        height: '90%',
        borderRadius: 10,
        borderColor: Colors.Gray.Color,
        borderWidth: 1,
        backgroundColor: Colors.White.Color
    },
    TermsAndConditionsTxt: {
        textAlign: 'center',
        padding: '10%',
        fontSize: FontSize.medium.fontsize,
        lineHeight: 40
    },
    GRDTCon: {
        width: Diem.width,
        height: Diem.height * 0.1,
        justifyContent: 'center',
        alignItems: 'center'
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

export default connect(mapToStateProps)(TermsAndConditions);