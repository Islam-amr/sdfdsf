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
import * as Actions from '../Redux/Actions/RegisterAction';


const mapToStateProps = state => ({
    RTL: state.Language.RTL,   // to Get RTL redux State
    Register: state.Register
})

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: null, // to Handle User Name Entry
            Email: null,   // to Handle User Email Entry
            Phone: null,  // to Handle User Phone Entry
            Address: null,  // to Handle User Address Entry
            Password: null,  // to Handle User Password Entry
            Confirm_Password: null  // to Handle User Password Entry
        };
    };

    RegisterClicked() {
        if (this.state.Password != this.state.Confirm_Password) {
            Alert.alert(Strings.passwordNotMatch);
        } else {
            try {
                this.props.postRegister(this.state.Name, this.state.Email, this.state.Address, this.state.Phone, this.state.Password)
                    .then(() => {
                        if (this.props.Register.isRegisterd) {
                            this.props.navigation.navigate('VerifyAccount');
                        } else {
                            if (this.props.Register.errMsg != null) {
                                Alert.alert('Network Error')
                            } else {
                                switch (this.props.Register.RegisterData.msg != null) {
                                    case this.props.Register.RegisterData.msg === 'الاسم مطلوب.':
                                        return Alert.alert(Strings.nameRequired);
                                    case this.props.Register.RegisterData.msg === 'عنوان السكن مطلوب.':
                                        return Alert.alert(Strings.addressRequired);
                                    case this.props.Register.RegisterData.msg === 'البريد الالكتروني مطلوب.':
                                        return Alert.alert(Strings.emailRequired);
                                    case this.props.Register.RegisterData.msg === 'يجب أن يكون البريد الالكتروني عنوان بريد إلكتروني صحيح البُنية':
                                        return Alert.alert('Email ghalat');
                                    case this.props.Register.RegisterData.msg === 'قيمة البريد الالكتروني مُستخدمة من قبل':
                                        return Alert.alert(Strings.emailAlreadyUsed);
                                    case this.props.Register.RegisterData.msg === 'الهاتف مطلوب.':
                                        return Alert.alert(Strings.phoneRequired);
                                    case this.props.Register.RegisterData.msg === 'قيمة الهاتف مُستخدمة من قبل':
                                        return Alert.alert(Strings.phoneAlreadyUsed);
                                    case this.props.Register.RegisterData.msg === 'كلمة السر مطلوب.':
                                        return Alert.alert(Strings.passwordRequired);
                                    case this.props.Register.RegisterData.msg === 'يجب أن يكون طول النص كلمة السر على الأقل 6 حروفٍ/حرفًا':
                                        return Alert.alert(Strings.passwordLength);
                                    default:
                                        return null;
                                }
                            }
                        }
                    })
            } catch (error) {
                error = 'Something Wrong'
                console.log(error);
            }
        }
    };

    render() {
        const Navigation = this.props.navigation;

        let RTL = this.props.RTL;

        Strings.setLanguage(RTL ? 'en' : 'ar');


        // Main Return
        return (
            <ImageBackground style={{ width: '100%', height: '100%', resizeMode: 'cover' }} source={require('../Assets/Layer991.png')} >
                <SafeAreaView style={Styles.MainView}>

                    {/* Saygha Logo  */}
                    <View style={Styles.LogoCon}>
                        <Image style={{ width: '40%', resizeMode: 'contain' }} source={require('../Assets/VectorSmartObject.png')} />
                    </View>

                    {/* User Name Entry */}
                    <View style={{ width: Diem.width, height: Diem.height * 0.08, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={Styles.EntryViewCon(RTL)}>
                            <View style={{ flex: 1 }}>
                                <Icon name='user' type='font-awesome' size={FontSize.large.fontsize} color={Colors.Gray.Color} />
                            </View>
                            <View style={Styles.TxtinputCon(RTL)}>
                                <TextInput style={Styles.Txtinput(RTL)} placeholder={Strings.username} onChangeText={(text) => this.setState({ Name: text })} />
                            </View>
                        </View>
                    </View>

                    {/* Address Entry */}
                    <View style={{ width: Diem.width, height: Diem.height * 0.08, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={Styles.EntryViewCon(RTL)}>
                            <View style={{ flex: 1 }}>
                                <Icon name='map-marker' type='font-awesome' size={FontSize.large.fontsize} color={Colors.Gray.Color} />
                            </View>
                            <View style={Styles.TxtinputCon(RTL)}>
                                <TextInput style={Styles.Txtinput(RTL)} placeholder={Strings.address} onChangeText={(text) => this.setState({ Address: text })} />
                            </View>
                        </View>
                    </View>

                    {/* Email Address Entry */}
                    <View style={{ width: Diem.width, height: Diem.height * 0.08, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={Styles.EntryViewCon(RTL)}>
                            <View style={{ flex: 1 }}>
                                <Icon name='mail' type='FontAwesome5' size={FontSize.large.fontsize} color={Colors.Gray.Color} />
                            </View>
                            <View style={Styles.TxtinputCon(RTL)}>
                                <TextInput style={Styles.Txtinput(RTL)} placeholder={Strings.email} onChangeText={(text) => this.setState({ Email: text })} />
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
                                <TextInput keyboardType='number-pad' style={Styles.Txtinput(RTL)} placeholder={Strings.phoneNumber} onChangeText={(text) => this.setState({ Phone: text })} />
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

                        {/* Register Button */}
                        <View style={Styles.GRDTCon}>
                            <TouchableOpacity activeOpacity={0.4} style={Styles.GRDTBtn} onPress={() => this.RegisterClicked()}>
                                <LinearGradient start={{ x: 0, y: 2 }} end={{ x: 1, y: 2.2 }}
                                    locations={[0, 0.5, 1]} colors={[Colors.Buttons.Color3, Colors.Buttons.Color2, Colors.Buttons.Color1]} style={Styles.GRDT}>
                                    {this.props.Register.isLoading ? <Loading Color={'white'} /> : <Text style={Styles.GRDTBtnTxt}>{Strings.register}</Text>}
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>

                    </View>

                </SafeAreaView>
            </ImageBackground>
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
        height: '20%',
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
        height: '80%',
        width: '80%',
        textAlign: RTL ? 'left' : 'right',
        fontSize: FontSize.small.fontsize
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

export default connect(mapToStateProps, Actions)(Register);