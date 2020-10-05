// Package Import
import React, { Component } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { RNToasty } from 'react-native-toasty';



// Strings Import 
import Strings from '../Assets/Strings';

// Theme Import
import { Diem, Colors, FontSize } from '../../Constant/Theme';

// Redux 
import { connect } from 'react-redux';
import { Verify } from '../Redux/Reducers/Verify';

const mapToStateProps = state => ({
    RTL: state.Language.RTL,   // to Get RTL redux State
})

class DraftingContract4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            P2_Name: null,
            P2_Nationality: null,
            P2_NationalId: null,
            P2_City: null,
            P2_District: null,
            P2_NationalAddress: null,
            P2_Email: null,
            P2_Phone: null,
            Party2: [],
        }
    }

    HandlePartyTwoInfo(name, nationality, nationalid, city, district, nationalAddress, email, phone, Contract_Sub_Dur, party1) {

        const Submit = () => {
            let Data = [];
            const PartiesData = Data.concat(
                { p2_name: name },
                { p2_nationality: nationality },
                { p2_nationalid: nationalid },
                { p2_city: city },
                { p2_district: district },
                { p2_nationaladdress: nationalAddress },
                { p2_email: email },
                { p2_phone: phone });

            this.setState({
                Party2: PartiesData
            }, () => {
                this.props.navigation.navigate('DraftingContract5', { Contract_Sub_Dur: Contract_Sub_Dur, Party1: party1, Party2: this.state.Party2 })
            });

        };

        if (this.state.P2_Name === null) {
            RNToasty.Show({ title: Strings.nameRequired, fontFamily: 'Arial', position: 'bottom', tintColor: Colors.Red.Color });
        } else if (this.state.P2_Nationality === null) {
            RNToasty.Show({ title: Strings.dc4, fontFamily: 'Arial', position: 'bottom', tintColor: Colors.Red.Color });
        } else if (this.state.P2_NationalId === null) {
            RNToasty.Show({ title: Strings.dc5, fontFamily: 'Arial', position: 'bottom', tintColor: Colors.Red.Color });
        } else if (this.state.P2_City === null) {
            RNToasty.Show({ title: Strings.addressRequired, fontFamily: 'Arial', position: 'bottom', tintColor: Colors.Red.Color });
        } else if (this.state.P2_District === null) {
            RNToasty.Show({ title: Strings.addressRequired, fontFamily: 'Arial', position: 'bottom', tintColor: Colors.Red.Color });
        } else if (this.state.P2_NationalAddress === null) {
            RNToasty.Show({ title: Strings.dc6, fontFamily: 'Arial', position: 'bottom', tintColor: Colors.Red.Color });
        } else if (this.state.P2_Email === null) {
            RNToasty.Show({ title: Strings.emailRequired, fontFamily: 'Arial', position: 'bottom', tintColor: Colors.Red.Color });
        } else if (this.state.P2_Phone === null) {
            RNToasty.Show({ title: Strings.phoneRequired, fontFamily: 'Arial', position: 'bottom', tintColor: Colors.Red.Color });
        } else {
            Submit()
        }
    }

    PartyComponent = (RTL) => {
        return (
            <View style={{ width: Diem.width, height: Diem.height * 0.6 }}>

                <View style={{ width: Diem.width, height: Diem.height * 0.08, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={Styles.EntryViewCon(RTL)}>
                        <View style={{ flex: 1 }}>
                            <Icon name='user' type='font-awesome' size={FontSize.large.fontsize} color={Colors.Gray.Color} />
                        </View>
                        <View style={Styles.TxtinputCon(RTL)}>
                            <TextInput style={Styles.Txtinput(RTL)} placeholder={Strings.nameaccId} onChangeText={(text) => this.setState({ P2_Name: text })} />
                        </View>
                    </View>
                </View>

                <View style={{ width: Diem.width, height: Diem.height * 0.08, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={Styles.EntryViewCon(RTL)}>
                        <View style={{ flex: 1 }}>
                            <Icon name='flag' type='font-awesome' size={FontSize.large.fontsize} color={Colors.Gray.Color} />
                        </View>
                        <View style={Styles.TxtinputCon(RTL)}>
                            <TextInput style={Styles.Txtinput(RTL)} placeholder={Strings.nationality} onChangeText={(text) => this.setState({ P2_Nationality: text })} />
                        </View>
                    </View>
                </View>

                <View style={{ width: Diem.width, height: Diem.height * 0.08, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={Styles.EntryViewCon(RTL)}>
                        <View style={{ flex: 1 }}>
                            <Icon name='id-card' type='font-awesome' size={FontSize.large.fontsize} color={Colors.Gray.Color} />
                        </View>
                        <View style={Styles.TxtinputCon(RTL)}>
                            <TextInput style={Styles.Txtinput(RTL)} placeholder={Strings.nationalid} onChangeText={(text) => this.setState({ P2_NationalId: text })} />
                        </View>
                    </View>
                </View>

                <View style={{ width: Diem.width, height: Diem.height * 0.08, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row-reverse' }}>
                    <View style={Styles.EntryViewCon2(RTL)}>
                        <View style={{ flex: 3 }}>
                            <Icon name='home' type='font-awesome' size={FontSize.large.fontsize} color={Colors.Gray.Color} />
                        </View>
                        <View style={Styles.TxtinputCon(RTL)}>
                            <TextInput style={Styles.Txtinput(RTL)} placeholder={Strings.district} onChangeText={(text) => this.setState({ P2_District: text })} />
                        </View>
                    </View>

                    <View style={Styles.EntryViewCon2(RTL)}>
                        <View style={{ flex: 3 }}>
                            <Icon name='home' type='font-awesome' size={FontSize.large.fontsize} color={Colors.Gray.Color} />
                        </View>
                        <View style={Styles.TxtinputCon(RTL)}>
                            <TextInput style={Styles.Txtinput(RTL)} placeholder={Strings.cityname} onChangeText={(text) => this.setState({ P2_City: text })} />
                        </View>
                    </View>

                </View>

                <View style={{ width: Diem.width, height: Diem.height * 0.08, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={Styles.EntryViewCon(RTL)}>
                        <View style={{ flex: 1 }}>
                            <Icon name='map-marker' type='font-awesome' size={FontSize.large.fontsize} color={Colors.Gray.Color} />
                        </View>
                        <View style={Styles.TxtinputCon(RTL)}>
                            <TextInput style={Styles.Txtinput(RTL)} placeholder={Strings.nationaladdress} onChangeText={(text) => this.setState({ P2_NationalAddress: text })} />
                        </View>
                    </View>
                </View>


                <View style={{ width: Diem.width, height: Diem.height * 0.08, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={Styles.EntryViewCon(RTL)}>
                        <View style={{ flex: 1 }}>
                            <Icon name='mail' type='FontAwesome5' size={FontSize.large.fontsize} color={Colors.Gray.Color} />
                        </View>
                        <View style={Styles.TxtinputCon(RTL)}>
                            <TextInput keyboardType='number-pad' style={Styles.Txtinput(RTL)} placeholder={Strings.email} onChangeText={(text) => this.setState({ P2_Email: text })} />
                        </View>
                    </View>
                </View>


                <View style={{ width: Diem.width, height: Diem.height * 0.08, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={Styles.EntryViewCon(RTL)}>
                        <View style={{ flex: 1 }}>
                            <Icon name='phone' type='font-awesome' size={FontSize.large.fontsize} color={Colors.Gray.Color} />
                        </View>
                        <View style={Styles.TxtinputCon(RTL)}>
                            <TextInput style={Styles.Txtinput(RTL)} placeholder={Strings.phoneNumber} onChangeText={(text) => this.setState({ P2_Phone: text })} />
                        </View>
                    </View>
                </View>

            </View>
        )
    };

    render() {

        const Navigation = this.props.navigation;

        let RTL = this.props.RTL;

        Strings.setLanguage(RTL ? 'en' : 'ar');

        const DraftingContract3 = this.props.route.params;

        // Main Return
        return (
            <SafeAreaView style={Styles.MainView}>

                <View style={{ width: Diem.width, height: Diem.height * 0.12, flexDirection: RTL ? 'row' : 'row-reverse' }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: RTL ? 'flex-end' : 'flex-start' }}>
                        <View style={{ width: '80%', height: '50%', justifyContent: 'center', marginHorizontal: '5%' }}>
                            <LinearGradient start={{ x: 0, y: 2 }} end={{ x: 1, y: 2.2 }}
                                locations={[0, 0.5, 1]} colors={['#6b6b6c', '#bbbbbb', '#bbbbbb']}
                                style={Styles.GRDT}>
                                <Text style={Styles.GRDTBtnTxt2}>{Strings.firstparty}</Text>
                            </LinearGradient>
                        </View>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: RTL ? 'flex-start' : 'flex-end' }}>
                        <View style={{ width: '80%', height: '50%', justifyContent: 'center', marginHorizontal: '5%' }}>
                            <LinearGradient start={{ x: 0, y: 2 }} end={{ x: 1, y: 2.2 }}
                                locations={[0, 0.5, 1]} colors={[Colors.Buttons.Color3, Colors.Buttons.Color2, Colors.Buttons.Color1]}
                                style={Styles.GRDT}>
                                <Text style={Styles.GRDTBtnTxt2}>{Strings.secondparty}</Text>
                            </LinearGradient>
                        </View>
                    </View>
                </View>


                {this.PartyComponent(RTL)}

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
                            onPress={() => this.HandlePartyTwoInfo(this.state.P2_Name, this.state.P2_Nationality, this.state.P2_NationalId, this.state.P2_City, this.state.P2_District, this.state.P2_NationalAddress, this.state.P2_Email, this.state.P2_Phone, DraftingContract3.Contract_Sub_Dur, DraftingContract3.Party1)}
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
    GRDTBtn: {
        width: '50%',
        height: '65%',
    },
    GRDTBtnTxt2: {
        color: Colors.White.Color,
        fontSize: FontSize.medium.fontsize
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
        fontSize: FontSize.msavg.fontsize
    }),
});

export default connect(mapToStateProps)(DraftingContract4);