// Package Import
import React, { Component } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { RNToasty } from 'react-native-toasty';


// Strings Import 
import Strings from '../Assets/Strings';

// Theme Import
import { Diem, Colors, FontSize } from '../../Constant/Theme';

// Redux 
import { connect } from 'react-redux';

const mapToStateProps = state => ({
    RTL: state.Language.RTL,   // to Get RTL redux State
})

class DraftingContract2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Contract_Subject: null,
            Contract_Duration: null,
        }
    }

    Next() {
        if (this.state.Contract_Subject != null) {
            if (this.state.Contract_Duration != null) {
                this.props.navigation.navigate('DraftingContract3', { Contract_Subject: this.state.Contract_Subject, Contract_Duration: this.state.Contract_Duration })
            } else {
                RNToasty.Show({
                    title: Strings.dc3,
                    fontFamily: 'Arial',
                    position: 'bottom',
                    tintColor: Colors.Red.Color
                });
            }
        } else {
            RNToasty.Show({
                title: Strings.dc2,
                fontFamily: 'Arial',
                position: 'bottom',
                tintColor: Colors.Red.Color
            });
        }
    }

    render() {

        const Navigation = this.props.navigation;

        let RTL = this.props.RTL;

        Strings.setLanguage(RTL ? 'en' : 'ar');

        // Main Return
        return (
            <SafeAreaView style={Styles.MainView}>

                {/* Contract's Subject */}
                <View style={{ width: Diem.width, height: Diem.height * 0.38, justifyContent: 'center', alignItems: 'center' }}>

                    <View style={Styles.GRDTCon}>
                        <View style={Styles.GRDTBtn}>
                            <LinearGradient start={{ x: 0, y: 2 }} end={{ x: 1, y: 2.2 }}
                                locations={[0, 0.5, 1]} colors={[Colors.Buttons.Color3, Colors.Buttons.Color2, Colors.Buttons.Color1]} style={Styles.GRDT}>
                                <Text style={Styles.GRDTBtnTxt(RTL)}>{Strings.draftingContractSubject}</Text>
                            </LinearGradient>
                        </View>
                    </View>

                    {/* Add Here Text Input */}
                    <View style={{ width: Diem.width, height: Diem.height * 0.26, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={Styles.EntryViewCon(RTL)}>
                            <View style={Styles.TxtinputCon(RTL)}>
                                <TextInput
                                    multiline={true}
                                    style={Styles.Txtinput(RTL)}
                                    placeholder={Strings.draftingContractShortsub}
                                    placeholderTextColor={Colors.Gray.Color}
                                    onChangeText={(text) => this.setState({ Contract_Subject: text })}
                                />
                            </View>
                        </View>
                    </View>

                </View>

                {/* Contract's Subject */}
                <View style={{ width: Diem.width, height: Diem.height * 0.40, justifyContent: 'center', alignItems: 'center' }}>

                    <View style={Styles.GRDTCon}>
                        <View style={Styles.GRDTBtn}>
                            <LinearGradient start={{ x: 0, y: 2 }} end={{ x: 1, y: 2.2 }}
                                locations={[0, 0.5, 1]} colors={[Colors.Buttons.Color3, Colors.Buttons.Color2, Colors.Buttons.Color1]} style={Styles.GRDT}>
                                <Text style={Styles.GRDTBtnTxt(RTL)}>{Strings.draftingContractDuration}</Text>
                            </LinearGradient>
                        </View>
                    </View>


                    {/* Add Here Text Input */}
                    <View style={{ width: Diem.width, height: Diem.height * 0.26, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: '75%', height: '15%', alignItems: RTL ? 'flex-start' : 'flex-end' }}>
                            <Text style={{ fontWeight: '600' }}>{Strings.shortbreif}</Text>
                        </View>
                        <View style={Styles.EntryViewCon(RTL)}>
                            <View style={Styles.TxtinputCon(RTL)}>
                                <TextInput
                                    multiline={true}
                                    style={Styles.Txtinput(RTL)}
                                    placeholder={Strings.draftingContractShortdur}
                                    placeholderTextColor={Colors.Gray.Color}
                                    onChangeText={(text) => this.setState({ Contract_Duration: text })}
                                />
                            </View>
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
                            onPress={() => this.Next()}
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
    GRDTBtnTxt: RTL => ({
        color: Colors.White.Color,
        fontSize: RTL ? FontSize.medium.fontsize : FontSize.large.fontsize
    }),
    GRDTBtnTxt2: {
        color: Colors.White.Color,
        fontSize: FontSize.small.fontsize
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

export default connect(mapToStateProps)(DraftingContract2);