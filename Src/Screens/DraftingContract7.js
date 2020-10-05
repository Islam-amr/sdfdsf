// Package Import
import React, { Component } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
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

class DraftingContract7 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SpecialCon: '-',
            PartialCon: '-',
        }
    }

    HandleSpecialPartial(draftingContract6) {
        this.props.navigation.navigate('DraftingContract8', { Contract_Sub_Dur: draftingContract6.Contract_Sub_Dur, Party1: draftingContract6.Party1, Party2: draftingContract6.Party2, Commitments: draftingContract6.Commitments, Special_Terms: this.state.SpecialCon, Partial_Terms: this.state.PartialCon })
    }

    render() {

        const Navigation = this.props.navigation;

        let RTL = this.props.RTL;

        Strings.setLanguage(RTL ? 'en' : 'ar');

        const DraftingContract6 = this.props.route.params;

        console.log(DraftingContract6);

        // Main Return
        return (
            <SafeAreaView style={Styles.MainView}>

                <View style={Styles.GRDTCon}>
                    <View style={Styles.GRDTBtn}>
                        <LinearGradient start={{ x: 0, y: 2 }} end={{ x: 1, y: 2.2 }}
                            locations={[0, 0.5, 1]} colors={[Colors.Buttons.Color3, Colors.Buttons.Color2, Colors.Buttons.Color1]} style={Styles.GRDT}>
                            <Text style={Styles.GRDTBtnTxt(RTL)}>{Strings.penalAndSpec}</Text>
                        </LinearGradient>
                    </View>
                </View>

                <View style={{ width: Diem.width, height: Diem.height * 0.32, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '75%', height: '15%', alignItems: RTL ? 'flex-start' : 'flex-end' }}>
                        <Text style={{ fontWeight: '600' }}>{Strings.specialCon}</Text>
                    </View>
                    <View style={Styles.EntryViewCon(RTL)}>
                        <View style={Styles.TxtinputCon(RTL)}>
                            <TextInput
                                multiline={true}
                                style={Styles.Txtinput(RTL)}
                                placeholder={Strings.addCon}
                                placeholderTextColor={Colors.Gray.Color}
                                onChangeText={(text) => this.setState({ SpecialCon: text })}
                            />
                        </View>
                    </View>
                </View>

                <View style={{ width: Diem.width, height: Diem.height * 0.32, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '75%', height: '15%', alignItems: RTL ? 'flex-start' : 'flex-end' }}>
                        <Text style={{ fontWeight: '600' }}>{Strings.penalCon}</Text>
                    </View>
                    <View style={Styles.EntryViewCon(RTL)}>
                        <View style={Styles.TxtinputCon(RTL)}>
                            <TextInput
                                multiline={true}
                                style={Styles.Txtinput(RTL)}
                                placeholder={Strings.addCon}
                                placeholderTextColor={Colors.Gray.Color}
                                onChangeText={(text) => this.setState({ PartialCon: text })}
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
                            onPress={() => this.HandleSpecialPartial(DraftingContract6)}
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

export default connect(mapToStateProps)(DraftingContract7);