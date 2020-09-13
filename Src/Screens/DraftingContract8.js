// Package Import
import React, { Component } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native';
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

class DraftingContract8 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Financial: null,
            Termination: null
        }
    }

    HandleFinAcc(draftingContract7) {
        const Submit = () => {
            this.props.navigation.navigate('DraftingContract9', { Contract_Sub_Dur: draftingContract7.Contract_Sub_Dur, Party1: draftingContract7.Party1, Party2: draftingContract7.Party2, Commitments: draftingContract7.Commitments, Special_Terms: draftingContract7.Special_Terms, Partial_Terms: draftingContract7.Partial_Terms, Termination: this.state.Termination })
        }

        if (this.state.Financial === null) {
            Alert.alert('Please Fill Finical')
        } else if (this.state.Termination === null) {
            Alert.alert('Please Fill Termantion')
        } else {
            Submit()
        }
    }

    render() {

        const Navigation = this.props.navigation;

        let RTL = this.props.RTL;

        Strings.setLanguage(RTL ? 'en' : 'ar');

        const DraftingContract7 = this.props.route.params;

        console.log(DraftingContract7);

        // Main Return
        return (
            <SafeAreaView style={Styles.MainView}>


                <View style={{ width: Diem.width, height: Diem.height * 0.3, marginVertical: Diem.height * 0.03, justifyContent: 'center', alignItems: 'center' }}>

                    <View style={Styles.GRDTCon}>
                        <View style={Styles.GRDTBtn}>
                            <LinearGradient start={{ x: 0, y: 2 }} end={{ x: 1, y: 2.2 }}
                                locations={[0, 0.5, 1]} colors={[Colors.Buttons.Color3, Colors.Buttons.Color2, Colors.Buttons.Color1]} style={Styles.GRDT}>
                                <Text style={Styles.GRDTBtnTxt(RTL)}>{Strings.finAcc}</Text>
                            </LinearGradient>
                        </View>
                    </View>

                    <View style={Styles.EntryViewCon(RTL)}>
                        <View style={Styles.TxtinputCon(RTL)}>
                            <TextInput
                                multiline={true}
                                style={Styles.Txtinput(RTL)}
                                placeholder={Strings.deeamount}
                                placeholderTextColor={Colors.Gray.Color}
                                onChangeText={(text) => this.setState({ Financial: text })}
                            />
                        </View>
                    </View>

                </View>

                <View style={{ width: Diem.width, height: Diem.height * 0.3, marginVertical: Diem.height * 0.03, justifyContent: 'center', alignItems: 'center' }}>

                    <View style={Styles.GRDTCon}>
                        <View style={Styles.GRDTBtn2}>
                            <LinearGradient start={{ x: 0, y: 2 }} end={{ x: 1, y: 2.2 }}
                                locations={[0, 0.5, 1]} colors={[Colors.Buttons.Color3, Colors.Buttons.Color2, Colors.Buttons.Color1]} style={Styles.GRDT}>
                                <Text style={Styles.GRDTBtnTxt(RTL)}>{Strings.ContractTermintion}</Text>
                            </LinearGradient>
                        </View>
                    </View>

                    <View style={Styles.EntryViewCon(RTL)}>
                        <View style={Styles.TxtinputCon(RTL)}>
                            <TextInput
                                multiline={true}
                                style={Styles.Txtinput(RTL)}
                                placeholder={Strings.addContractTermintion}
                                placeholderTextColor={Colors.Gray.Color}
                                onChangeText={(text) => this.setState({ Termination: text })}
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
                            onPress={() => this.HandleFinAcc(DraftingContract7)}
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
        width: '70%',
        height: '65%',
    },
    GRDTBtn2: {
        width: '50%',
        height: '65%',
    },
    GRDTBtnTxt: RTL => ({
        color: Colors.White.Color,
        fontSize: RTL ? FontSize.mini.fontsize : FontSize.large.fontsize,
        textAlign: 'center'
    }),
    GRDTBtnTxt2: {
        color: Colors.White.Color,
        fontSize: FontSize.small.fontsize
    },
    EntryViewCon: RTL => ({
        width: '80%',
        height: Diem.height * 0.18,
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

export default connect(mapToStateProps)(DraftingContract8);