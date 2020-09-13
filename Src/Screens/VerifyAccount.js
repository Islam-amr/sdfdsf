// Package Import
import React, { Component } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

// Strings Import 
import Strings from '../Assets/Strings';

// Theme Import
import { Diem, Colors, FontSize } from '../../Constant/Theme';

// Components Import
import { Loading } from '../Components/Loading';

// Redux 
import { connect } from 'react-redux';
import * as Actions from '../Redux/Actions/VerifyAction';
import { ResendCode } from '../Redux/Reducers/Verify';

const mapToStateProps = state => ({
    RTL: state.Language.RTL,   // to Get RTL redux State
    Register: state.Register, // to Get Register redux State
    Verify: state.Verify,
    ResendCode: state.ResendCode,
    Login: state.Login
})

class VerifyAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Verification_Code: null,
            Email: null
        }
    }

    componentDidMount() {
        if (this.props.Login.UserData != null) {
            this.setState({ Email: this.props.Login.UserData.data.email })
        } else {
            this.setState({ Email: this.props.Register.RegisterData.data.email })
        }
        console.log(this.state)
        console.log(this.props.Resend)
    }

    ReSendCode() {
        try {
            this.props.postResendCode(this.state.Email).then(() => {
                if (this.props.ResendCode.Sent) {
                    Alert.alert('Sent Succeffuly')
                } else (
                    Alert.alert('Unable to connect')
                )
            })

        } catch (error) {
            console.log('error')
        }
    };

    VerifyClicked() {
        console.log(this.state);
        if (this.state.Verification_Code != null) {
            try {
                this.props.postVerify(this.state.Email, this.state.Verification_Code)
                    .then(() => {
                        if (this.props.Verify.isVerifed) {
                            console.log(this.props.Verify.isVerifed);
                            this.props.navigation.reset({
                                index: 0,
                                routes: [{ name: 'Login' }],
                            });
                        } else {
                            Alert.alert(Strings.verifyCodeWrong)
                        }
                    })
            } catch (error) {
                console.log('error')
            }
        }
        else {
            Alert.alert(Strings.verifyCodeRequired)
        }
    };

    render() {

        const Navigation = this.props.navigation;  // To Handle Moving Between Screens

        let RTL = this.props.RTL;  // Declare RTL Redux State

        Strings.setLanguage(RTL ? 'en' : 'ar');  // To Change Language According to RTL Redux State


        // Main Return
        return (
            <ImageBackground style={{ width: '100%', height: '100%', resizeMode: 'cover' }} source={require('../Assets/Layer991.png')} >

                <SafeAreaView style={Styles.MainView}>

                    {/* Saygha Logo  */}
                    <View style={Styles.LogoCon}>
                        <Image style={{ width: '65%', resizeMode: 'contain' }} source={require('../Assets/VectorSmartObject.png')} />
                    </View>

                    {/* Verification Code Entry */}
                    <View style={{ width: Diem.width, height: Diem.height * 0.1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={Styles.EntryViewCon(RTL)}>
                            <View style={{ flex: 1 }}>
                                <Icon name='check' type='font-awesome' size={FontSize.xlarge.fontsize} color={Colors.Gray.Color} />
                            </View>
                            <View style={Styles.TxtinputCon(RTL)}>
                                <TextInput
                                    style={Styles.Txtinput(RTL)}
                                    placeholder={Strings.verificationCode}
                                    onChangeText={(text) => this.setState({ Verification_Code: text })}
                                />
                            </View>
                        </View>
                    </View>

                    {/* Resend Code */}
                    <View style={Styles.FrgtPassCon(RTL)}>
                        <TouchableOpacity onPress={() => this.ReSendCode()}>
                            <Text style={{ fontSize: FontSize.tiny.fontsize, color: Colors.Gray.Color }}>{Strings.resendCode} </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Verify Button */}
                    <View style={{ marginTop: Diem.height * 0.05 }}>
                        <View style={Styles.GRDTCon}>
                            <TouchableOpacity
                                activeOpacity={0.4}
                                style={Styles.GRDTBtn}
                                onPress={() => this.VerifyClicked()}
                            >
                                <LinearGradient start={{ x: 0, y: 2 }} end={{ x: 1, y: 2.2 }}
                                    locations={[0, 0.5, 1]} colors={[Colors.Buttons.Color3, Colors.Buttons.Color2, Colors.Buttons.Color1]} style={Styles.GRDT}>
                                    {this.props.Verify.isLoading ? <Loading Color={'white'} /> : <Text style={Styles.GRDTBtnTxt}>{Strings.verify}</Text>}
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
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center'
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
        height: '60%',
        width: '80%',
        textAlign: RTL ? 'left' : 'right',
        fontSize: FontSize.small.fontsize
    }),
    FrgtPassCon: RTL => ({
        width: Diem.width * 0.75,
        height: Diem.height * 0.03,
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: RTL ? 'row' : 'row-reverse'
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

export default connect(mapToStateProps, Actions)(VerifyAccount);