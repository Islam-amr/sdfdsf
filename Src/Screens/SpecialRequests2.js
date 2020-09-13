// Package Import
import React, { Component } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native';
// import ImagePicker from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import { Icon, Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import DateTimePickerModal from "react-native-modal-datetime-picker";

// Strings Import 
import Strings from '../Assets/Strings';

// Theme Import
import { Diem, Colors, FontSize } from '../../Constant/Theme';

// Redux 
import { connect } from 'react-redux';

const mapToStateProps = state => ({
    RTL: state.Language.RTL,   // to Get RTL redux State
})

class SpeacialRequests2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Ordertype: 'special',
            Details: '',
            HasFiles: 0,
            ImageSourceviewarray: [],
            DatePickerVisble: false,
        }
    };

    UploadImages = () => {
        ImagePicker.openPicker({
            mediaType: 'photo',
            multiple: true,
            waitAnimationEnd: false,
            forceJpg: true,
        })
            .then(response => {
                const data = new FormData();
                response.forEach((image, index) => {
                    data.append(`file[${index}]`, {
                        uri: Platform.OS === 'ios' ? `file://${image.path}` : image.path,
                        type: 'image/jpeg',
                        name: `image.jpg`
                    });
                    this.setState({ ImageSourceviewarray: this.state.ImageSourceviewarray.concat(Object.values(data._parts[index][1])[0]) }, function () {
                        this.setState({ HasFiles: 1 })
                    })
                });
            })
            .catch(error => {
                console.log(error)
            })
    };


    SendButton = () => {
        if (this.state.Details === '') {
            Alert.alert(Strings.detailsRequired)
        } else if (this.state.Date === null) {
            Alert.alert(Strings.executionDateRequired)
        } else {
            this.props.navigation.navigate('SelectService', { Ordertype: this.state.Ordertype, Details: this.state.Details, Images: this.state.ImageSourceviewarray, HasFiles: this.state.HasFiles })
        }
    }

    render() {

        const Navigation = this.props.navigation;  // To Handle Moving Between Screens

        let RTL = this.props.RTL;  // Declare RTL Redux State

        Strings.setLanguage(RTL ? 'en' : 'ar');  // To Change Language According to RTL Redux State

        // Main Return
        return (
            <SafeAreaView style={Styles.MainView}>

                {/* Main Image */}
                <View style={Styles.ImageCon}>
                    <Image style={{ width: '100%', height: '100%', resizeMode: 'cover' }} source={require('../Assets/Layer809.png')} />
                </View>

                <ImageBackground style={{ width: '100%', height: Diem.height * 0.64 }} source={require('../Assets/Layer8570.png')}>

                    {/* Review And Consult  */}
                    <View style={{ height: Diem.height * 0.1, width: Diem.width, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={Styles.GRDTBtn}>
                            <LinearGradient start={{ useAngle: true, angle: 180, angleCenter: { x: 0, y: 0 } }} end={{ x: 0, y: 0.95 }}
                                locations={[0.15, 0.5]} colors={[Colors.GrayButton.Color2, Colors.GrayButton.Color1]} style={Styles.GRDT}>
                                <Text style={Styles.GRDTBtnTxt}>{Strings.specialRequests}</Text>
                            </LinearGradient>
                        </View>
                    </View>

                    {/* Add Here Text Input */}
                    <View style={{ width: Diem.width, height: Diem.height * 0.3, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={Styles.EntryViewCon(RTL)}>
                            <View style={Styles.TxtinputCon(RTL)}>
                                <TextInput
                                    multiline={true}
                                    style={Styles.Txtinput(RTL)}
                                    placeholder={Strings.addHere}
                                    placeholderTextColor={Colors.Gray.Color}
                                    onChangeText={(text) => this.setState({ Details: text })}
                                />
                            </View>
                        </View>
                    </View>

                    {/* <View style={{ width: Diem.width, height: Diem.height * 0.1, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={Styles.EntryViewCon2(RTL)} onPress={() => this.ToggleDatePicker()}>
                            <View style={{ flex: 1 }}>
                                <Icon name='calendar' type='font-awesome' size={FontSize.xlarge.fontsize} color={Colors.Gray.Color} />
                            </View>
                            <View style={{ flex: 5 }}>
                                {this.state.Date != null ? <Text style={Styles.DateTxt(RTL)}>{this.state.Date}</Text> : <Text style={Styles.ExtTxt(RTL)}>{Strings.executionTime}</Text>}
                            </View>
                        </TouchableOpacity>
                        <DateTimePickerModal
                            isVisible={this.state.DatePickerVisble}
                            mode="date"
                            onConfirm={(date) => this.handleConfirm(date)}
                            onCancel={() => this.ToggleDatePicker()}
                        />
                    </View> */}

                    {/* Upload Image Button */}
                    <View style={Styles.GRDTCon}>
                        <TouchableOpacity activeOpacity={0.4} style={Styles.GRDTBtn2} onPress={() => this.UploadImages()}>
                            <LinearGradient start={{ x: 0, y: 2 }} end={{ x: 1, y: 2.2 }}
                                locations={[0, 0.5, 1]} colors={[Colors.Buttons.Color3, Colors.Buttons.Color2, Colors.Buttons.Color1]} style={Styles.GRDT2}>
                                <Image style={{ tintColor: this.state.ImageSourceviewarray.length == 0 ? Colors.White.Color : Colors.SuccessGreen.Color, flex: 1, resizeMode: 'contain' }} source={require('../Assets/Shape1.png')} />
                                <Text style={Styles.GRDTBtnTxt2}>Upload</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>

                    {/* Send Button */}
                    <View style={{ marginTop: Diem.height * 0.01 }}>
                        <View style={Styles.GRDTCon}>
                            <TouchableOpacity activeOpacity={0.4} style={Styles.GRDTBtn2} onPress={() => this.SendButton()}>
                                <LinearGradient start={{ x: 0, y: 2 }} end={{ x: 1, y: 2.2 }}
                                    locations={[0, 0.5, 1]} colors={[Colors.Buttons.Color3, Colors.Buttons.Color2, Colors.Buttons.Color1]} style={Styles.GRDT2}>
                                    <Text style={Styles.GRDTBtnTxt3}>{Strings.send}</Text>
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
        height: '70%',
    },
    GRDTBtnTxt: {
        color: Colors.White.Color,
        fontSize: FontSize.xmedium.fontsize
    },
    EntryViewCon: RTL => ({
        width: '80%',
        height: '80%',
        borderRadius: 15,
        borderColor: Colors.Gray.Color,
        borderWidth: 1,
        flexDirection: RTL ? 'row' : 'row-reverse',
        alignItems: 'center',
    }),
    EntryViewCon2: RTL => ({
        width: '80%',
        height: '80%',
        borderRadius: 15,
        borderColor: Colors.Gray.Color,
        borderWidth: 1,
        flexDirection: RTL ? 'row' : 'row-reverse',
        alignItems: 'center',
    }),
    TxtinputCon: RTL => ({
        flex: 1,
        alignItems: RTL ? 'flex-start' : 'flex-end',
    }),
    Txtinput: RTL => ({
        height: '90%',
        width: '100%',
        padding: 10,
        textAlign: RTL ? 'left' : 'right',
        fontSize: FontSize.small.fontsize
    }),
    GRDTCon: {
        width: Diem.width,
        height: Diem.height * 0.08,
        justifyContent: 'center',
        alignItems: 'center',
    },
    GRDT2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: Colors.Gray.Color,
        flexDirection: 'row'
    },
    GRDTBtn2: {
        width: '50%',
        height: '80%',
    },
    GRDTBtnTxt2: {
        color: Colors.White.Color,
        fontSize: FontSize.large.fontsize,
        flex: 1.5
    },
    GRDTBtnTxt3: {
        color: Colors.White.Color,
        fontSize: FontSize.large.fontsize,
    },
    ExtTxt: RTL => ({
        fontSize: FontSize.small.fontsize,
        color: Colors.Gray.Color,
        textAlign: RTL ? 'left' : 'right',
    }),
    DateTxt: RTL => ({
        fontSize: FontSize.small.fontsize,
        textAlign: RTL ? 'left' : 'right',
    })
});
export default connect(mapToStateProps)(SpeacialRequests2);

