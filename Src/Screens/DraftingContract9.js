// Package Import
import React, { Component } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import ImagePicker from 'react-native-image-crop-picker';
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

class DraftingContract9 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Ordertype: 'contract',
            HasAttache: true,
            HasFiles: 0,
            ImageSourceviewarray: [],
            Court: null,
            Other_Terms: null,
        }
    }

    onSelect(index, value) {
        this.setState({
            HasAttache: value
        })
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

    HandleFinalSubmit(draftingContract8) {
        const Submit = () => {
            this.props.navigation.navigate('SelectService', { Ordertype: this.state.Ordertype, Contract_Sub_Dur: draftingContract8.Contract_Sub_Dur, Party1: draftingContract8.Party1, Party2: draftingContract8.Party2, Commitments: draftingContract8.Commitments, Special_Terms: draftingContract8.Special_Terms, Partial_Terms: draftingContract8.Partial_Terms, Termination: draftingContract8.Termination, Court: this.state.Court, OtherTerms: this.state.Other_Terms, Images: this.state.ImageSourceviewarray, HasFiles: this.state.HasFiles })
        }
        if (this.state.Court === null) {
            Alert.alert('Please Fill Finical')
        } else if (this.state.Other_Terms === null) {
            Alert.alert('Please Fill Termantion')
        } else {
            Submit()
        }
    }


    render() {

        const Navigation = this.props.navigation;

        let RTL = this.props.RTL;

        Strings.setLanguage(RTL ? 'en' : 'ar');

        const DraftingContract8 = this.props.route.params;

        console.log(DraftingContract8);

        // Main Return
        return (
            <SafeAreaView style={Styles.MainView}>

                <View style={{ width: Diem.width, height: Diem.height * 0.24, justifyContent: 'center', alignItems: 'center' }}>

                    <View style={Styles.GRDTCon}>
                        <View style={Styles.GRDTBtn2}>
                            <LinearGradient start={{ x: 0, y: 2 }} end={{ x: 1, y: 2.2 }}
                                locations={[0, 0.5, 1]} colors={[Colors.Buttons.Color3, Colors.Buttons.Color2, Colors.Buttons.Color1]} style={Styles.GRDT}>
                                <Text style={Styles.GRDTBtnTxt(RTL)}>{Strings.jurisdiction}</Text>
                            </LinearGradient>
                        </View>
                    </View>

                    <View style={Styles.EntryViewCon(RTL)}>
                        <View style={Styles.TxtinputCon(RTL)}>
                            <TextInput
                                multiline={true}
                                style={Styles.Txtinput(RTL)}
                                placeholder={Strings.court}
                                placeholderTextColor={Colors.Gray.Color}
                                onChangeText={(text) => this.setState({ Court: text })}
                            />
                        </View>
                    </View>

                </View>

                <View style={{ width: Diem.width, height: Diem.height * 0.08, justifyContent: 'center', alignItems: 'center' }}>

                    <View style={{ width: '80%', height: '100%', alignItems: 'center', flexDirection: RTL ? 'row' : 'row-reverse' }}>
                        <View style={{ flex: 1.5 }}>
                            <Text style={{ fontSize: FontSize.tiny.fontsize }}>{Strings.istheretechnical}</Text>
                        </View>
                        <RadioGroup
                            onSelect={(index, value) => this.onSelect(index, value)}
                            style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}
                            selectedIndex={0}
                            color={Colors.Gray.Color}
                            activeColor={Colors.SuccessGreen.Color}
                            thickness={2}
                        >
                            <View style={{ alignItems: 'center', justifyContent: 'center' }} value={true} >
                                <Text>{Strings.yes}</Text>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }} value={false} >
                                <Text>{Strings.no}</Text>
                            </View>
                        </RadioGroup>
                    </View>

                </View>

                <View style={{ width: Diem.width, height: Diem.height * 0.2, alignItems: 'center', justifyContent: 'center' }}>

                    <Text style={{ width: '55%', textAlign: 'center' }}>{Strings.uploadif}</Text>

                    <View style={Styles.GRDTConUp}>
                        <TouchableOpacity
                            activeOpacity={0.4}
                            disabled={this.state.HasAttache ? false : true}
                            style={[Styles.GRDTBtnUp, { opacity: this.state.HasAttache ? 1 : 0.6 }]}
                            onPress={() => this.UploadImages()}>
                            <LinearGradient start={{ x: 0, y: 2 }} end={{ x: 1, y: 2.2 }}
                                locations={[0, 0.5, 1]} colors={[Colors.Buttons.Color3, Colors.Buttons.Color2, Colors.Buttons.Color1]} style={Styles.GRDTUp}>
                                <Image style={{ tintColor: this.state.ImageSourceviewarray.length == 0 ? Colors.White.Color : Colors.SuccessGreen.Color, flex: 1, resizeMode: 'contain' }} source={require('../Assets/Shape1.png')} />
                                <Text style={Styles.GRDTBtnTxtUp}>Upload</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ width: Diem.width, height: Diem.height * 0.22, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '75%', height: '15%', alignItems: RTL ? 'flex-start' : 'flex-end' }}>
                        <Text style={{ fontWeight: '600' }}>{Strings.otherTerms}</Text>
                    </View>
                    <View style={Styles.EntryViewCon(RTL)}>
                        <View style={Styles.TxtinputCon(RTL)}>
                            <TextInput
                                multiline={true}
                                style={Styles.Txtinput(RTL)}
                                placeholder={Strings.addTerms}
                                placeholderTextColor={Colors.Gray.Color}
                                onChangeText={(text) => this.setState({ Other_Terms: text })}
                            />
                        </View>
                    </View>
                </View>

                <View style={{ width: Diem.width, height: Diem.height * 0.1, flexDirection: RTL ? 'row' : 'row-reverse' }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: RTL ? 'flex-end' : 'flex-start' }}>
                        <TouchableOpacity
                            onPress={() => Navigation.pop()}
                            style={{ width: '60%', height: '40%', justifyContent: 'center', marginHorizontal: '2.5%' }}
                        >
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0.5, y: 2 }}
                                locations={[0, 1, 0.5]}
                                colors={['#bbbbbb', '#bbbbbb', '#6b6b6c']}
                                style={Styles.GRDTmini}>
                                <Text style={Styles.GRDTBtnTxt2}>{Strings.prev}</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: RTL ? 'flex-start' : 'flex-end' }}>
                        <TouchableOpacity
                            onPress={() => this.HandleFinalSubmit(DraftingContract8)}
                            style={{ width: '60%', height: '40%', justifyContent: 'center', marginHorizontal: '2.5%' }}
                        >
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0.5, y: 2 }}
                                locations={[0, 1, 0.5]}
                                colors={['#8796da', '#8796da', '#5b68a3']}
                                style={Styles.GRDTmini}>
                                <Text style={Styles.GRDTBtnTxt2}>{Strings.next}</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>

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
    GRDTCon: {
        width: Diem.width,
        height: Diem.height * 0.1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    GRDTConUp: {
        width: Diem.width,
        height: Diem.height * 0.08,
        justifyContent: 'center',
        alignItems: 'center',
    },
    GRDTUp: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: Colors.Gray.Color,
        flexDirection: 'row'
    },
    GRDTBtnUp: {
        width: '50%',
        height: '80%',
    },
    GRDTBtnTxtUp: {
        color: Colors.White.Color,
        fontSize: FontSize.large.fontsize,
        flex: 1.5
    },
    GRDT: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: Colors.Gray.Color
    },
    GRDTmini: {
        width: '100%',
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        borderWidth: 0.5,
        borderColor: Colors.Gray.Color
    },
    GRDTBtn: {
        width: '50%',
        height: '65%',
    },
    GRDTBtn2: {
        width: '50%',
        height: '65%',
    },
    GRDTBtnTxt: RTL => ({
        color: Colors.White.Color,
        fontSize: FontSize.large.fontsize,
        textAlign: 'center'
    }),
    GRDTBtnTxt2: {
        color: Colors.White.Color,
        fontSize: FontSize.small.fontsize
    },
    EntryViewCon: RTL => ({
        width: '80%',
        height: Diem.height * 0.12,
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
        fontSize: FontSize.mini.fontsize
    }),

});

export default connect(mapToStateProps)(DraftingContract9);