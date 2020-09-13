// Package Import
import React, { Component } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
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

class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            UserName: '',
            UserEmail: '',
            UserPhone: null,
            UserEnquiry: '',
        }
    }

    render() {

        const Navigation = this.props.navigation;

        let RTL = this.props.RTL;

        Strings.setLanguage(RTL ? 'en' : 'ar');
        // CopmanyLogo

        // Main Return
        return (
            <ImageBackground style={{ width: '100%', height: '100%', resizeMode: 'cover' }} source={require('../Assets/Layer991.png')} >

                <SafeAreaView style={Styles.MainView}>

                    {/* Saygha Logo  */}
                    <View style={Styles.LogoCon}>
                        <Image style={{ width: '50%', resizeMode: 'contain' }} source={require('../Assets/VectorSmartObject.png')} />
                    </View>

                    {/* User Name Entry */}
                    <View style={{ width: Diem.width, height: Diem.height * 0.08, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={Styles.EntryViewCon(RTL)}>
                            <View style={{ flex: 1 }}>
                                <Icon name='user' type='font-awesome' size={FontSize.large.fontsize} color={Colors.Gray.Color} />
                            </View>
                            <View style={Styles.TxtinputCon(RTL)}>
                                <TextInput style={Styles.Txtinput(RTL)} placeholder={Strings.username} onChangeText={(text) => this.setState({ UserName: text })} />
                            </View>
                        </View>
                    </View>

                    {/* User Email Entry */}
                    <View style={{ width: Diem.width, height: Diem.height * 0.08, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={Styles.EntryViewCon(RTL)}>
                            <View style={{ flex: 1 }}>
                                <Icon name='mail' type='FontAwesome5' size={FontSize.large.fontsize} color={Colors.Gray.Color} />
                            </View>
                            <View style={Styles.TxtinputCon(RTL)}>
                                <TextInput style={Styles.Txtinput(RTL)} placeholder={Strings.email} onChangeText={(text) => this.setState({ UserEmail: text })} />
                            </View>
                        </View>
                    </View>

                    {/* Phone Number Entry */}
                    <View style={{ width: Diem.width, height: Diem.height * 0.08, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={Styles.EntryViewCon(RTL)}>
                            <View style={{ flex: 1 }}>
                                <Icon name='phone' type='font-awesome' size={FontSize.large.fontsize} color={Colors.Gray.Color} />
                            </View>
                            <View style={Styles.TxtinputCon(RTL)}>
                                <TextInput keyboardType='number-pad' style={Styles.Txtinput(RTL)} placeholder={Strings.phoneNumber} onChangeText={(text) => this.setState({ UserPhone: text })} />
                            </View>
                        </View>
                    </View>

                    {/* User Enquiry Entry */}
                    <View style={{ width: Diem.width, height: Diem.height * 0.15, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={Styles.EntryViewCon(RTL)}>
                            <View style={Styles.TxtinputCon(RTL)}>
                                <TextInput style={Styles.TxtinputEnquiry(RTL)} placeholder={Strings.enquiry} onChangeText={(text) => this.setState({ UserEnquiry: text })} />
                            </View>
                        </View>
                    </View>

                    {/* Send Button */}
                    <View style={{ width: Diem.width, height: '13%', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={Styles.GRDTCon}>
                            <TouchableOpacity activeOpacity={0.4} style={Styles.GRDTBtn} onPress={() => { console.log(this.state); Navigation.navigate('Home'); }}>
                                <LinearGradient start={{ x: 0, y: 2 }} end={{ x: 1, y: 2.2 }}
                                    locations={[0, 0.5, 1]} colors={[Colors.Buttons.Color3, Colors.Buttons.Color2, Colors.Buttons.Color1]} style={Styles.GRDT}>
                                    <Text style={Styles.GRDTBtnTxt}>{Strings.send}</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* CopyRight */}
                    <View style={{ width: Diem.width, height: '17%', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <Image style={{ width: '100%', height: '40%', resizeMode: 'contain' }} source={require('../Assets/CopmanyLogo.png')} />
                        <View style={{ width: '80%', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ textAlign: 'center' }}>{Strings.copyright}</Text>
                        </View>
                        <Text>{Strings._2020}</Text>
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
    EntryViewCon: RTL => ({
        width: '80%',
        height: '80%',
        borderRadius: 15,
        borderColor: Colors.Gray.Color,
        borderWidth: 1,
        flexDirection: RTL ? 'row' : 'row-reverse',
        alignItems: 'center'
    }),
    TxtinputCon: RTL => ({
        flex: 5,
        alignItems: RTL ? 'flex-start' : 'flex-end'
    }),
    Txtinput: RTL => ({
        height: '80%',
        width: '80%',
        textAlign: RTL ? 'left' : 'right',
        fontSize: FontSize.msavg.fontsize
    }),
    TxtinputEnquiry: RTL => ({
        height: '80%',
        width: '80%',
        textAlign: RTL ? 'left' : 'right',
        fontSize: FontSize.msavg.fontsize,
        margin: '5%',
        marginBottom: '20%',
    }),
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

export default connect(mapToStateProps)(ContactUs);