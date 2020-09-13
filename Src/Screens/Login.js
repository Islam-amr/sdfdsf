// Package Import
import React, { Component } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native';
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
import * as Actions from '../Redux/Actions/LoginAction';

// Redux State
const mapToStateProps = state => ({
    RTL: state.Language.RTL,   // to Get RTL redux State
    Login: state.Login,  // to Get Login redux State
});

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: null,   // to Handle User Email Entry
            Password: null  // to Handle User Password Entry
        };
    };


    // to Handle Login
    loginClicked() {
        if (this.state.Email === null) {
            Alert.alert(Strings.loginEmailErr);
        } else if (this.state.Password === null) {
            Alert.alert(Strings.loginPassErr);
        } else {
            try {
                this.props.postLogin(this.state.Email, this.state.Password)
                    .then(() => {
                        if (this.props.Login.isAuthenticated) {
                            console.log(this.props.Login.UserData.data.is_verified);
                            if (this.props.Login.UserData.data.is_verified === '1') {
                                this.props.navigation.reset({
                                    index: 0,
                                    routes: [{ name: 'Home' }],
                                });
                            } else {
                                this.props.navigation.navigate('VerifyAccount');
                            }
                        } else {
                            if (this.props.Login.errMsg != null) {
                                Alert.alert('Unable to connect')
                            } else {
                                Alert.alert(Strings.loginWrongEntry)
                            }
                        }
                    })
            }
            catch (error) {
                error = this.props.Login.errMsg;
                console.log(error)
            }
        }
    };

    render() {
        const Navigation = this.props.navigation;  // To Navigate Between Screens

        let RTL = this.props.RTL;  // To Get Current Application View

        Strings.setLanguage(RTL ? 'en' : 'ar');  // To Set Langugae Accroding to RTL State

        // Main Return
        return (
            <ImageBackground style={{ width: '100%', height: '100%', resizeMode: 'cover' }} source={require('../Assets/Layer991.png')} >

                <SafeAreaView style={Styles.MainView}>

                    {/* Saygha Logo  */}
                    <View style={Styles.LogoCon}>
                        <Image style={{ width: '65%', resizeMode: 'contain' }} source={require('../Assets/VectorSmartObject.png')} />
                    </View>

                    {/* Phone Number Entry */}
                    <View style={{ width: Diem.width, height: Diem.height * 0.1, justifyContent: 'center', alignItems: 'center' }}>
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
                    <View style={{ width: Diem.width, height: Diem.height * 0.1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={Styles.EntryViewCon(RTL)}>
                            <View style={{ flex: 1 }}>
                                <Icon name='lock' type='SimpleLineIcons' size={FontSize.xlarge.fontsize} color={Colors.Gray.Color} />
                            </View>
                            <View style={Styles.TxtinputCon(RTL)}>
                                <TextInput secureTextEntry={true}
                                    style={Styles.Txtinput(RTL)}
                                    placeholder={Strings.password}
                                    onChangeText={(text) => this.setState({ Password: text })}
                                />
                            </View>
                        </View>
                    </View>

                    {/* Forget Password */}
                    <View style={Styles.FrgtPassCon(RTL)}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: FontSize.tiny.fontsize, color: Colors.Gray.Color }}>{Strings.forgotYourPassword} </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: Diem.height * 0.05 }}>

                        {/* Login Button */}
                        <View style={Styles.GRDTCon}>
                            <TouchableOpacity
                                disabled={this.props.Login.isLoggingin ? true : false}
                                activeOpacity={0.4}
                                style={[Styles.GRDTBtn, { opacity: this.props.Login.isLoggingin ? 0.6 : 1 }]}
                                onPress={() => this.loginClicked()}
                            >
                                <LinearGradient start={{ x: 0, y: 2 }} end={{ x: 1, y: 2.2 }}
                                    locations={[0, 0.5, 1]} colors={[Colors.Buttons.Color3, Colors.Buttons.Color2, Colors.Buttons.Color1]} style={Styles.GRDT}>
                                    {this.props.Login.isLoggingin ? <Loading Color={'white'} /> : <Text style={Styles.GRDTBtnTxt}>{Strings.login2}</Text>}
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>

                        {/* Register Button */}
                        <View style={Styles.GRDTCon}>
                            <TouchableOpacity activeOpacity={0.4} style={Styles.GRDTBtn} onPress={() => Navigation.navigate('Register')}>
                                <LinearGradient start={{ x: 0, y: 2 }} end={{ x: 1, y: 2.2 }}
                                    locations={[0, 0.5, 1]} colors={[Colors.Buttons.Color3, Colors.Buttons.Color2, Colors.Buttons.Color1]} style={Styles.GRDT}>
                                    <Text style={Styles.GRDTBtnTxt}>{Strings.register}</Text>
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



export default connect(mapToStateProps, Actions)(Login);  // Redux Connect 