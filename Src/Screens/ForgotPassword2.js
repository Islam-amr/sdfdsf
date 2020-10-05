// Package Import
import React, { Component } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { RNToasty } from 'react-native-toasty';
import { AuthBaseUrl } from '../Redux/API/AuthBaseUrl';
import axios from 'axios';



// Strings Import 
import Strings from '../Assets/Strings';

// Theme Import
import { Diem, Colors, FontSize } from '../../Constant/Theme';

// Components Import
import { Loading } from '../Components/Loading';

// Redux 
import { connect } from 'react-redux';
import * as Actions from '../Redux/Actions/LoginAction';

const mapToStateProps = state => ({
    RTL: state.Language.RTL,   // to Get RTL redux State
    Login: state.Login,  // to Get Login redux State
})

class ForgetPassword2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Code: null,
            Email: null,
            Password: null,
            Confirm_Password: null,
            loading: false

        }
    }

    async send() {
        this.setState({ loading: true })
        try {
            const response = await axios.post(AuthBaseUrl + 'reset', {
                reset_code: this.state.Code,
                email: this.state.Email,
                password: this.state.Password,
                password_confirmation: this.state.Confirm_Password
            });
            this.setState({ loading: false })
            console.log(response.data);
            const result = response.data;
            if (result.value === true) {
                RNToasty.Success({
                    title: Strings.succespass,
                    fontFamily: 'Arial',
                    position: 'bottom',
                });
            } else {
                if (result.msg === "reset code مطلوب.") {
                    RNToasty.Show({ title: Strings.verifyCodeRequired, fontFamily: 'Arial', position: 'bottom', tintColor: Colors.Red.Color })
                } else if (result.msg === "البريد الالكتروني مطلوب.") {
                    RNToasty.Show({ title: Strings.emailRequired, fontFamily: 'Arial', position: 'bottom', tintColor: Colors.Red.Color })
                } else if (result.msg === "كلمة السر مطلوب.") {
                    RNToasty.Show({ title: Strings.passwordRequired, fontFamily: 'Arial', position: 'bottom', tintColor: Colors.Red.Color })
                } else if (result.msg === "حقل التأكيد غير مُطابق للحقل كلمة السر") {
                    RNToasty.Show({ title: Strings.passwordNotMatch, fontFamily: 'Arial', position: 'bottom', tintColor: Colors.Red.Color })
                } else if (result.msg === " عفواً الكود الذي ادخلته غير صحيح") {
                    RNToasty.Show({ title: Strings.verifyCodeWrong, fontFamily: 'Arial', position: 'bottom', tintColor: Colors.Red.Color })
                }

            }
        } catch (error) {
            RNToasty.Show({
                title: Strings.networkerror,
                fontFamily: 'Arial',
                position: 'bottom',
                tintColor: Colors.Red.Color
            });
            this.setState({ loading: false })
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


                    {/* Saygha Logo  */}
                    <View style={Styles.LogoCon}>
                        <Image style={{ width: '65%', resizeMode: 'contain' }} source={require('../Assets/VectorSmartObject.png')} />
                    </View>

                    {/* Verification Code Entry */}
                    <View style={{ width: Diem.width, height: Diem.height * 0.08, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={Styles.EntryViewCon(RTL)}>
                            <View style={{ flex: 1 }}>
                                <Icon name='check' type='font-awesome' size={FontSize.xlarge.fontsize} color={Colors.Gray.Color} />
                            </View>
                            <View style={Styles.TxtinputCon(RTL)}>
                                <TextInput
                                    style={Styles.Txtinput(RTL)}
                                    placeholder={Strings.verificationCode}
                                    onChangeText={(text) => this.setState({ Code: text })}
                                />
                            </View>
                        </View>
                    </View>

                    {/* Phone Number Entry */}
                    <View style={{ width: Diem.width, height: Diem.height * 0.08, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={Styles.EntryViewCon(RTL)}>
                            <View style={{ flex: 1 }}>
                                <Icon name='mail' type='FontAwesome5' size={FontSize.xlarge.fontsize} color={Colors.Gray.Color} />
                            </View>
                            <View style={Styles.TxtinputCon(RTL)}>
                                <TextInput
                                    style={Styles.Txtinput(RTL)}
                                    placeholder={Strings.email}
                                    onChangeText={(text) => this.setState({ Email: text })}
                                />
                            </View>
                        </View>
                    </View>

                    {/* Password Entry */}
                    <View style={{ width: Diem.width, height: Diem.height * 0.08, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={Styles.EntryViewCon(RTL)}>
                            <View style={{ flex: 1 }}>
                                <Icon name='lock' type='SimpleLineIcons' size={FontSize.xlarge.fontsize} color={Colors.Gray.Color} />
                            </View>
                            <View style={Styles.TxtinputCon(RTL)}>
                                <TextInput secureTextEntry={true} style={Styles.Txtinput(RTL)} placeholder={Strings.password} onChangeText={(text) => this.setState({ Password: text })} />
                            </View>
                        </View>
                    </View>

                    {/* Confrim Password Entry */}
                    <View style={{ width: Diem.width, height: Diem.height * 0.08, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={Styles.EntryViewCon(RTL)}>
                            <View style={{ flex: 1 }}>
                                <Icon name='lock' type='SimpleLineIcons' size={FontSize.xlarge.fontsize} color={Colors.Gray.Color} />
                            </View>
                            <View style={Styles.TxtinputCon(RTL)}>
                                <TextInput secureTextEntry={true} style={Styles.Txtinput(RTL)} placeholder={Strings.confirmpassword} onChangeText={(text) => this.setState({ Confirm_Password: text })} />
                            </View>
                        </View>
                    </View>

                    <View style={{ marginTop: Diem.height * 0.05 }}>

                        {/* Login Button */}
                        <View style={Styles.GRDTCon}>
                            <TouchableOpacity
                                disabled={this.state.loading ? true : false}
                                activeOpacity={0.4}
                                style={[Styles.GRDTBtn, { opacity: this.state.loading ? 0.6 : 1 }]}
                                onPress={() => this.send()}
                            >
                                <LinearGradient start={{ x: 0, y: 2 }} end={{ x: 1, y: 2.2 }}
                                    locations={[0, 0.5, 1]} colors={[Colors.Buttons.Color3, Colors.Buttons.Color2, Colors.Buttons.Color1]} style={Styles.GRDT}>
                                    {this.state.loading ? <Loading Color={'white'} /> : <Text style={Styles.GRDTBtnTxt}>{Strings.send}</Text>}
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


export default connect(mapToStateProps, Actions)(ForgetPassword2);