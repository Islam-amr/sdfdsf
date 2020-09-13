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

class ShowTasks extends Component {

    render() {

        const Navigation = this.props.navigation;  // To Handle Moving Between Screens

        let RTL = this.props.RTL;  // Declare RTL Redux State

        Strings.setLanguage(RTL ? 'en' : 'ar');  // To Change Language According to RTL Redux State

        // Main Return
        return (
            <SafeAreaView style={Styles.MainView}>

                {/* Main Image */}
                <View style={Styles.ImageCon}>
                    <Image style={{ width: '100%', height: '100%', resizeMode: 'cover' }} source={require('../Assets/Layer9523.png')} />
                </View>

                <ImageBackground style={{ width: '100%', height: Diem.height * 0.64 }} source={require('../Assets/Layer8570.png')}>

                    <View style={{ marginTop: Diem.height * 0.05 }}>

                        {/* Drafting Contract */}
                        <View style={{ height: Diem.height * 0.12, width: Diem.width, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity activeOpacity={0.8} style={Styles.GRDTBtn} onPress={() => Navigation.navigate('DraftingContract')}>
                                <LinearGradient start={{ useAngle: true, angle: 180, angleCenter: { x: 0, y: 0 } }} end={{ x: 0, y: 0.95 }}
                                    locations={[0.15, 0.5]} colors={[Colors.GrayButton.Color2, Colors.GrayButton.Color1]} style={Styles.GRDT}>
                                    <Text style={Styles.GRDTBtnTxt}>{Strings.draftingContract}</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>

                        {/* Review And Consult */}
                        <View style={{ height: Diem.height * 0.12, width: Diem.width, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity activeOpacity={0.8} style={Styles.GRDTBtn} onPress={() => Navigation.navigate('ReviewConsult')}>
                                <LinearGradient start={{ useAngle: true, angle: 180, angleCenter: { x: 0, y: 0 } }} end={{ x: 0, y: 0.95 }}
                                    locations={[0.15, 0.5]} colors={[Colors.GrayButton.Color2, Colors.GrayButton.Color1]} style={Styles.GRDT}>
                                    <Text style={Styles.GRDTBtnTxt}>{Strings.reviewAndConsult}</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>

                        {/* Special Requests */}
                        <View style={{ height: Diem.height * 0.12, width: Diem.width, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity activeOpacity={0.8} style={Styles.GRDTBtn} onPress={() => Navigation.navigate('SpecialRequests')}>
                                <LinearGradient start={{ useAngle: true, angle: 180, angleCenter: { x: 0, y: 0 } }} end={{ x: 0, y: 0.95 }}
                                    locations={[0.15, 0.5]} colors={[Colors.GrayButton.Color2, Colors.GrayButton.Color1]} style={Styles.GRDT}>
                                    <Text style={Styles.GRDTBtnTxt}>{Strings.specialRequests}</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>

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
    }
});

export default connect(mapToStateProps)(ShowTasks);