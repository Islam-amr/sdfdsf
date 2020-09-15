// Package Import
import React, { Component } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-crop-picker';
import { Icon } from 'react-native-elements';

// Strings Import 
import Strings from '../../Assets/Strings';

// Theme Import
import { Diem, Colors, FontSize } from '../../../Constant/Theme';

// Components Import
import { Loading } from '../../Components/Loading';

// Redux 
import { connect } from 'react-redux';
import * as Actions from '../../Redux/Actions/UpdateAction';

const mapToStateProps = state => ({
    RTL: state.Language.RTL,   // to Get RTL redux State
    Login: state.Login,
    Update: state.Update
})

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            NewImage: this.props.Login.UserData.data.image,
            NewName: this.props.Login.UserData.data.name,
            NewEmail: this.props.Login.UserData.data.email,
            NewPhone: this.props.Login.UserData.data.phone,
        }
    }

    UploadImages = () => {
        ImagePicker.openPicker({
            mediaType: 'photo',
            multiple: false,
            waitAnimationEnd: false,
            forceJpg: true,
        })
            .then(response => {
                const ImageUrl = Platform.OS === 'android' ? response.sourceURL : response.sourceURL.replace('file://', '');
                this.setState({ NewImage: ImageUrl });
            })
            .catch(error => {
                console.log(error)
            })
    };

    EditPress() {
        if (this.state.NewImage === this.props.Login.UserData.data.image
            && this.state.NewName === this.props.Login.UserData.data.name
            && this.state.NewEmail === this.props.Login.UserData.data.email
            && this.state.NewPhone === this.props.Login.UserData.data.phone) {
            Alert.alert('There is no Change')
        } else {
            var formdata = new FormData();
            formdata.append("name", this.state.NewName);
            formdata.append("email", this.state.NewEmail);
            formdata.append("phone", this.state.NewPhone);
            formdata.append("image", {
                uri: this.state.NewImage,
                type: 'multipart/form-data',
                name: 'image'
            })

            console.log(formdata);
            try {
                this.props.postUpdate(this.props.Login.Token, formdata)
                    .then(() => {
                        if (this.props.Update.UserData) {
                            this.setState({
                                NewImage: this.props.Update.UserData.image,
                                NewName: this.props.Update.UserData.name,
                                NewEmail: this.props.Update.UserData.email,
                                NewPhone: this.props.Update.UserData.phone,
                                EditMode: false
                            })
                        } else if (this.props.Update.errMsg) {
                            Alert.alert(this.props.Update.errMsg);
                            this.setState({
                                NewImage: this.props.Login.UserData.data.image,
                                NewName: this.props.Login.UserData.data.name,
                                NewEmail: this.props.Login.UserData.data.email,
                                NewPhone: this.props.Login.UserData.data.phone,
                                EditMode: false
                            });
                        } else {
                            Alert.alert('Network error');
                        }
                    })
            }
            catch (error) {
                error = 'Something Wrong';
                console.log(error)
            }
        }
    }

    render() {

        const Navigation = this.props.navigation;  // To Handle Moving Between Screens

        let RTL = this.props.RTL;  // Declare RTL Redux State

        Strings.setLanguage(RTL ? 'en' : 'ar');  // To Change Language According to RTL Redux State

        console.log(this.props.Login.UserData);

        // Main Return
        return (
            <ImageBackground style={{ width: '100%', height: '100%', resizeMode: 'cover' }} source={require('../../Assets/Layer991.png')} >

                <SafeAreaView style={Styles.MainView}>

                    <View style={{ width: Diem.width, height: Diem.height * 0.22, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: '45%', height: '90%', borderRadius: 2000 }} source={{ uri: this.state.NewImage }} />
                        <View style={{ width: '15%', height: '30%', bottom: 0, left: '55%', position: 'absolute', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon name='pencil' type='font-awesome' reverse color={Colors.Primary.Color} onPress={() => this.UploadImages()} />
                        </View>
                    </View>

                    <View style={{ width: Diem.width, height: Diem.height * 0.3, justifyContent: 'center', alignItems: 'center' }}>
                        {/* User Name Entry */}
                        <View style={{ width: Diem.width, height: Diem.height * 0.08, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={Styles.EntryViewCon(RTL)}>
                                <View style={{ flex: 1 }}>
                                    <Icon name='user' type='font-awesome' size={FontSize.large.fontsize} color={Colors.Gray.Color} />
                                </View>
                                <View style={Styles.TxtinputCon(RTL)}>
                                    <TextInput style={Styles.Txtinput(RTL)} placeholder='Name' value={this.state.NewName} onChangeText={(text) => this.setState({ NewName: text })} />
                                </View>
                            </View>
                        </View>


                        <View style={{ width: Diem.width, height: Diem.height * 0.08, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={Styles.EntryViewCon(RTL)}>
                                <View style={{ flex: 1 }}>
                                    <Icon name='mail' type='FontAwesome5' size={FontSize.large.fontsize} color={Colors.Gray.Color} />
                                </View>
                                <View style={Styles.TxtinputCon(RTL)}>
                                    <TextInput style={Styles.Txtinput(RTL)} placeholder='Name' value={this.state.NewEmail} onChangeText={(text) => this.setState({ NewEmail: text })} />
                                </View>
                            </View>
                        </View>


                        <View style={{ width: Diem.width, height: Diem.height * 0.08, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={Styles.EntryViewCon(RTL)}>
                                <View style={{ flex: 1 }}>
                                    <Icon name='phone' type='font-awesome' size={FontSize.large.fontsize} color={Colors.Gray.Color} />
                                </View>
                                <View style={Styles.TxtinputCon(RTL)}>
                                    <TextInput style={Styles.Txtinput(RTL)} placeholder='Name' value={this.state.NewPhone} onChangeText={(text) => this.setState({ NewPhone: text })} />
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Apply Button */}
                    <View style={{ width: Diem.width, height: Diem.height * 0.12, flexDirection: RTL ? 'row' : 'row-reverse', position: 'absolute', bottom: '5%' }}>
                        <View style={Styles.GRDTCon}>
                            <TouchableOpacity activeOpacity={0.4} style={Styles.GRDTBtn} onPress={() => this.EditPress()}>
                                <LinearGradient start={{ x: 0, y: 2 }} end={{ x: 1, y: 2.2 }}
                                    locations={[0, 0.5, 1]} colors={[Colors.Buttons.Color3, Colors.Buttons.Color2, Colors.Buttons.Color1]} style={Styles.GRDT}>
                                    {this.props.Update.isLoading ?
                                        <Loading Color={'white'} />
                                        :
                                        <Text style={Styles.GRDTBtnTxt}>{Strings.edit}</Text>
                                    }
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
    ProfileTxt: {
        fontSize: FontSize.small.fontsize,
    },
    InputTxt: {
        fontSize: FontSize.small.fontsize,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        width: '90%'
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
    },
    EntryViewCon: RTL => ({
        width: '80%',
        height: '80%',
        borderRadius: 15,
        borderColor: Colors.Gray.Color,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }),
    TxtinputCon: RTL => ({
        flex: 5,
        alignItems: 'flex-start'
    }),
    Txtinput: RTL => ({
        height: '80%',
        width: '100%',
        textAlign: 'left',
        fontSize: FontSize.small.fontsize
    }),
});

export default connect(mapToStateProps, Actions)(Profile);