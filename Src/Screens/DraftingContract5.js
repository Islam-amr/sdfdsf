// Package Import
import React, { Component } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { RNToasty } from 'react-native-toasty';



// Strings Import 
import Strings from '../Assets/Strings';

// Theme Import
import { Diem, Colors, FontSize } from '../../Constant/Theme';

// Redux 
import { connect } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';

const mapToStateProps = state => ({
    RTL: state.Language.RTL,   // to Get RTL redux State
})

class DraftingContract5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            try: ['', ''],
            MainCom: [],
        }
    }

    Handleetlzamat(index, text) {
        let newArray = [...this.state.try];
        newArray[index] = text;
        var newArray2 = newArray.filter(value => Object.keys(value).length !== 0);
        console.log(newArray2);
        this.setState({ try: newArray });
        this.setState({ MainCom: newArray2 });
    }

    HandlePartyOneCom(draftingContract4) {

        const Submit = () => {
            this.props.navigation.navigate('DraftingContract6', { Contract_Sub_Dur: draftingContract4.Contract_Sub_Dur, Party1: draftingContract4.Party1, Party2: draftingContract4.Party2, Commitments: this.state.MainCom })
        };

        if (this.state.MainCom.length <= 1) {
            RNToasty.Show({ title: Strings.dc7, fontFamily: 'Arial', position: 'bottom', tintColor: Colors.Red.Color });
        } else {
            Submit()
        }
    }


    render() {

        const Navigation = this.props.navigation;

        let RTL = this.props.RTL;

        Strings.setLanguage(RTL ? 'en' : 'ar');

        const DraftingContract4 = this.props.route.params;

        console.log(DraftingContract4);

        // Main Return
        return (
            <SafeAreaView style={Styles.MainView}>

                <View style={{ width: Diem.width, height: Diem.height * 0.12, flexDirection: RTL ? 'row' : 'row-reverse' }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: RTL ? 'flex-end' : 'flex-start' }}>
                        <View style={{ width: '80%', height: '50%', justifyContent: 'center', marginHorizontal: '5%' }}>
                            <LinearGradient start={{ x: 0, y: 2 }} end={{ x: 1, y: 2.2 }}
                                locations={[0, 0.5, 1]} colors={[Colors.Buttons.Color3, Colors.Buttons.Color2, Colors.Buttons.Color1]}
                                style={Styles.GRDT}>
                                <Text style={Styles.GRDTBtnTxt2}>{Strings.firstparty}</Text>
                            </LinearGradient>
                        </View>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: RTL ? 'flex-start' : 'flex-end' }}>
                        <View style={{ width: '80%', height: '50%', justifyContent: 'center', marginHorizontal: '5%' }}>
                            <LinearGradient start={{ x: 0, y: 2 }} end={{ x: 1, y: 2.2 }}
                                locations={[0, 0.5, 1]} colors={['#6b6b6c', '#bbbbbb', '#bbbbbb']}
                                style={Styles.GRDT}>
                                <Text style={Styles.GRDTBtnTxt2}>{Strings.secondparty}</Text>
                            </LinearGradient>
                        </View>
                    </View>
                </View>

                <View style={{ width: Diem.width, height: Diem.height * 0.65 }}>
                    <ScrollView>

                        {this.state.try.map((item, index) => {
                            return (
                                <View key={index} style={{ width: Diem.width, height: Diem.height * 0.08, justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={Styles.EntryViewCon(RTL)}>
                                        <View style={Styles.TxtinputCon(RTL)}>
                                            <TextInput style={Styles.Txtinput(RTL)} placeholder={Strings.Obli}
                                                onChangeText={(text) => this.Handleetlzamat(index, text)} />
                                        </View>
                                    </View>
                                </View>
                            )
                        })}

                        <View style={Styles.ObliCon(RTL)}>
                            <TouchableOpacity style={{ flexDirection: RTL ? 'row-reverse' : 'row', justifyContent: 'center', alignItems: 'center' }} onPress={() => this.setState({ try: this.state.try.concat('') })}>
                                <Text style={{ fontSize: FontSize.mini.fontsize }}>{Strings.addObli} </Text>
                                <Icon name='plus-circle' type='font-awesome' size={FontSize.small.fontsize} containerStyle={{ marginHorizontal: '5%' }} />
                            </TouchableOpacity>
                        </View>

                    </ScrollView>
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
                            onPress={() => this.HandlePartyOneCom(DraftingContract4)}
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
    GRDTBtnTxt2: {
        color: Colors.White.Color,
        fontSize: FontSize.medium.fontsize,
    },
    EntryViewCon: RTL => ({
        width: '90%',
        height: '80%',
        borderRadius: 15,
        borderColor: Colors.Gray.Color,
        borderWidth: 1,
        flexDirection: RTL ? 'row' : 'row-reverse',
        alignItems: 'center'
    }),
    EntryViewCon2: RTL => ({
        width: '40%',
        height: '80%',
        borderRadius: 15,
        borderColor: Colors.Gray.Color,
        borderWidth: 1,
        flexDirection: RTL ? 'row' : 'row-reverse',
        alignItems: 'center'
    }),
    TxtinputCon: RTL => ({
        flex: 5,
        alignItems: RTL ? 'flex-start' : 'flex-end',
    }),
    Txtinput: RTL => ({
        height: '80%',
        width: '80%',
        textAlign: RTL ? 'left' : 'right',
        fontSize: FontSize.msavg.fontsize,
        margin: '5%'
    }),
    ObliCon: RTL => ({
        width: Diem.width * 0.9,
        height: Diem.height * 0.03,
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: RTL ? 'row-reverse' : 'row'
    }),
});

export default connect(mapToStateProps)(DraftingContract5);