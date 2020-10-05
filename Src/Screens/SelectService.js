// Package Import
import React, { Component } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RNToasty } from 'react-native-toasty';

// Strings Import 
import Strings from '../Assets/Strings';

// Theme Import
import { Diem, Colors, FontSize } from '../../Constant/Theme';

// Components Import
import { Loading } from '../Components/Loading';

// Redux 
import { connect } from 'react-redux';
import * as Actions from '../Redux/Actions/OrdersAction';

const mapToStateProps = state => ({
    RTL: state.Language.RTL,   // to Get RTL redux State
    Login: state.Login, // To Get Token 
    OrderConsult: state.OrderConsult,
    OrderSpecial: state.OrderSpecial,
    OrderContract: state.OrderContract,
    FetchConsultOrder: state.FetchConsultOrder,
    FetchSpecialOrder: state.FetchSpecialOrder,
    FetchContractOrder: state.FetchContractOrder,
})

class SelectService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SelectServiceValue: ['300 SAR', '5 days'],
            TermsCheckBox: true,
            ModalVisble: false,

        }
    }



    onSelect(index, value) {
        this.setState({
            SelectServiceValue: value
        })
    };

    ToggleModal() {
        this.setState({ ModalVisble: !this.state.ModalVisble })
    }

    SendOrder(orderdetails) {
        if (orderdetails.Ordertype === 'consultation') {
            // Consultation Order Request
            if (this.props.OrderConsult.Count <= 15) {

                var formdata = new FormData();
                formdata.append("order_type", orderdetails.Ordertype);
                formdata.append("has_files", orderdetails.HasFiles);
                formdata.append("execution_time", this.state.SelectServiceValue[1]);
                formdata.append("amount", this.state.SelectServiceValue[0]);
                formdata.append("details", orderdetails.Details);
                orderdetails.Images.forEach((image) => {
                    formdata.append('images[]', {
                        uri: image,
                        type: 'multipart/form-data',
                        name: 'image'
                    })
                });
                console.log(formdata);
                try {
                    this.props.postConsultOrder(this.props.Login.Token, formdata)
                        .then(() => {
                            if (this.props.OrderConsult.OrderData) {
                                this.setState({ ModalVisble: !this.state.ModalVisble })
                                this.props.FetchConsultOrder
                            } else {
                                RNToasty.Show({
                                    title: Strings.networkerror,
                                    fontFamily: 'Arial',
                                    position: 'bottom',
                                    tintColor: Colors.Red.Color
                                });
                            }
                        })
                }
                catch (error) {
                    error = 'Something Wrong';
                    RNToasty.Show({
                        title: error,
                        fontFamily: 'Arial',
                        position: 'bottom',
                        tintColor: Colors.Red.Color
                    });
                }
            } else {
                Alert.alert(
                    null,
                    `${Strings.ReachedCon}`,
                    [
                        { text: 'OK', onPress: () => this.props.navigation.popToTop() }
                    ],
                    { cancelable: false }
                )
            }
        } else if (orderdetails.Ordertype === 'special') {
            // Special Order Request
            if (this.props.OrderSpecial.Count <= 15) {

                var formdata = new FormData();
                formdata.append("order_type", orderdetails.Ordertype);
                formdata.append("has_files", orderdetails.HasFiles);
                formdata.append("execution_time", this.state.SelectServiceValue[1]);
                formdata.append("amount", this.state.SelectServiceValue[0]);
                formdata.append("details", orderdetails.Details);
                orderdetails.Images.forEach((image) => {
                    formdata.append('images[]', {
                        uri: image,
                        type: 'multipart/form-data',
                        name: 'image'
                    })
                });
                try {
                    this.props.postSpecialOrder(this.props.Login.Token, formdata)
                        .then(() => {
                            if (this.props.OrderSpecial.OrderData) {
                                this.setState({ ModalVisble: !this.state.ModalVisble })
                                this.props.FetchSpecialOrder
                            } else {
                                RNToasty.Show({
                                    title: Strings.networkerror,
                                    fontFamily: 'Arial',
                                    position: 'bottom',
                                    tintColor: Colors.Red.Color
                                });
                            }
                        })
                }
                catch (error) {
                    error = 'Something Wrong';
                    RNToasty.Show({
                        title: error,
                        fontFamily: 'Arial',
                        position: 'bottom',
                        tintColor: Colors.Red.Color
                    });
                }
            }
            else {
                Alert.alert(
                    null,
                    `${Strings.ReachedCon}`,
                    [
                        { text: 'OK', onPress: () => this.props.navigation.popToTop() }
                    ],
                    { cancelable: false }
                )
            }
        } else {
            // Contract Order Request
            if (this.props.OrderContract.Count <= 15) {

                var formdata = new FormData();
                formdata.append("order_type", orderdetails.Ordertype);
                formdata.append("has_files", orderdetails.HasFiles);
                formdata.append("execution_time", this.state.SelectServiceValue[1]);
                formdata.append("amount", this.state.SelectServiceValue[0]);
                formdata.append("details", orderdetails.Contract_Sub_Dur.Contract_Subject);
                formdata.append("contract_time", orderdetails.Contract_Sub_Dur.Contract_Duration);
                formdata.append("p_one_name", orderdetails.Party1[0].p1_name);
                formdata.append("p_one_national", orderdetails.Party1[1].p1_nationality);
                formdata.append("p_one_card", orderdetails.Party1[2].p1_nationalid);
                formdata.append("p_one_city", orderdetails.Party1[3].p1_city);
                formdata.append("p_one_region", orderdetails.Party1[4].p1_district);
                formdata.append("p_one_address", orderdetails.Party1[5].p1_nationaladdress);
                formdata.append("p_one_email", orderdetails.Party1[6].p1_email);
                formdata.append("p_one_phone", orderdetails.Party1[7].p1_phone);
                formdata.append("p_two_name", orderdetails.Party2[0].p2_name);
                formdata.append("p_two_national", orderdetails.Party2[1].p2_nationality);
                formdata.append("p_two_card", orderdetails.Party2[2].p2_nationalid);
                formdata.append("p_two_city", orderdetails.Party2[3].p2_city);
                formdata.append("p_two_region", orderdetails.Party2[4].p2_district);
                formdata.append("p_two_address", orderdetails.Party2[5].p2_nationaladdress);
                formdata.append("p_two_email", orderdetails.Party2[6].p2_email);
                formdata.append("p_two_phone", orderdetails.Party2[7].p2_phone);
                formdata.append("commitments", orderdetails.Commitments);
                formdata.append("special_terms", orderdetails.Special_Terms);
                formdata.append("partial_terms", orderdetails.Partial_Terms);
                formdata.append("other_terms", orderdetails.OtherTerms);
                formdata.append("contract_of_law", orderdetails.Court);
                orderdetails.Images.forEach((image) => {
                    formdata.append('images[]', {
                        uri: image,
                        type: 'multipart/form-data',
                        name: 'image'
                    })
                });

                try {
                    this.props.postContractOrder(this.props.Login.Token, formdata)
                        .then(() => {
                            if (this.props.OrderContract.OrderData) {
                                this.setState({ ModalVisble: !this.state.ModalVisble })
                            } else {
                                RNToasty.Show({
                                    title: Strings.networkerror,
                                    fontFamily: 'Arial',
                                    position: 'bottom',
                                    tintColor: Colors.Red.Color
                                });
                            }
                        })
                }
                catch (error) {
                    error = 'Something Wrong';
                    RNToasty.Show({
                        title: error,
                        fontFamily: 'Arial',
                        position: 'bottom',
                        tintColor: Colors.Red.Color
                    });
                }
            } else {
                Alert.alert(
                    null,
                    `${Strings.ReachedCon}`,
                    [
                        { text: 'OK', onPress: () => this.props.navigation.popToTop() }
                    ],
                    { cancelable: false }
                )
            }

        }
    }

    render() {
        const Navigation = this.props.navigation;  // To Handle Moving Between Screens

        let RTL = this.props.RTL;  // Declare RTL Redux State

        Strings.setLanguage(RTL ? 'en' : 'ar');  // To Change Language According to RTL Redux State

        const OrderDetails = this.props.route.params;

        console.log(OrderDetails);

        // Main Return
        return (
            <SafeAreaView style={Styles.MainView}>

                <Modal
                    isVisible={this.state.ModalVisble}
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                >
                    <View style={{ width: '75%', height: '35%', borderRadius: 10, backgroundColor: Colors.White.Color }}>
                        <View style={{ flexDirection: RTL ? 'row-reverse' : 'row', height: '10%', width: '100%' }}>

                            <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name='times-circle' size={FontSize.medium.fontsize} color={'red'} onPress={() => { this.ToggleModal(); this.props.navigation.popToTop(); }} />
                            </View>
                        </View>

                        <View style={{ width: '100%', height: '30%', justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: '50%', resizeMode: 'contain' }} source={require('../Assets/VectorSmartObject.png')} />
                        </View>


                        <View style={{ width: '100%', height: '17.5%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: FontSize.xxlarge.fontsize, color: 'red' }}>{Strings.thankU}</Text>
                        </View>


                        <View style={{ width: '100%', height: '20%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: FontSize.small.fontsize, textAlign: 'center', width: '90%', fontWeight: '600' }}>{Strings.Srequest}</Text>
                        </View>

                        <View style={{ width: '100%', height: '22.5%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: FontSize.mini.fontsize, textAlign: 'center', width: '90%' }}>{Strings.workon}</Text>
                        </View>
                    </View>

                </Modal>

                {/* Main Image */}
                <View style={Styles.ImageCon}>
                    <Image style={{ width: '100%', height: '100%', resizeMode: 'cover' }} source={require('../Assets/Layer866.png')} />
                </View>
                <ImageBackground style={{ width: '100%', height: Diem.height * 0.64 }} source={require('../Assets/Layer8570.png')}>

                    <View style={{ width: Diem.width, height: Diem.height * 0.44, alignItems: 'center' }}>

                        {/* Table Head */}
                        <View style={{ width: '100%', height: '15%', flexDirection: RTL ? 'row-reverse' : 'row' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={Styles.ServiceTxt}>{Strings.editable}</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={Styles.ServiceTxt}>{Strings.duration}</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={Styles.ServiceTxt}>{Strings.value}</Text>
                            </View>
                            <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center' }}>
                            </View>
                        </View>


                        <View style={{ width: '100%', height: '80%', flexDirection: RTL ? 'row' : 'row-reverse' }}>

                            {/* Radio Buttons */}
                            <View style={{ flex: 0.4 }}>
                                <RadioGroup
                                    onSelect={(index, value) => this.onSelect(index, value)}
                                    style={{ height: '100%', justifyContent: 'space-evenly' }}
                                    selectedIndex={0}
                                    color={Colors.Gray.Color}
                                    activeColor={Colors.SuccessGreen.Color}
                                    thickness={2}
                                >
                                    <View style={{ height: '33.3%', alignItems: 'center', justifyContent: 'center' }} value={['300 SAR', '5 days']} ></View>
                                    <View style={{ height: '33.3%', alignItems: 'center', justifyContent: 'center' }} value={['500 SAR', '48 hours']}></View>
                                    <View style={{ height: '33.3%', alignItems: 'center', justifyContent: 'center' }} value={['1000 SAR', '24 hours']}></View>
                                </RadioGroup>
                            </View>

                            {/* Value Column */}
                            <View style={{ flex: 1 }}>
                                <View style={{ height: '33.3%', justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ backgroundColor: 'red', width: '95%', height: '40%', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={Styles.ServiceTxt2}>{Strings._300}</Text>
                                    </View>
                                </View>
                                <View style={{ height: '33.3%', justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ backgroundColor: 'red', width: '95%', height: '40%', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={Styles.ServiceTxt2}>{Strings._500}</Text>
                                    </View>
                                </View>
                                <View style={{ height: '33.3%', justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ backgroundColor: 'red', width: '95%', height: '40%', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={Styles.ServiceTxt2}>{Strings._1000}</Text>
                                    </View>
                                </View>
                            </View>

                            {/* Duartion Column */}
                            <View style={{ flex: 1 }}>
                                <View style={{ height: '33.3%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={Styles.ServiceTxt3}>{Strings._5days}</Text>
                                </View>
                                <View style={{ height: '33.3%', justifyContent: 'center', alignItems: 'center', flexDirection: RTL ? 'row-reverse' : 'row' }}>
                                    <Text style={Styles.ServiceTxt4}>{Strings.hours}</Text>
                                    <Text style={Styles.ServiceTxt3}>{Strings._48}</Text>
                                </View>
                                <View style={{ height: '33.3%', justifyContent: 'center', alignItems: 'center', flexDirection: RTL ? 'row-reverse' : 'row' }}>
                                    <Text style={Styles.ServiceTxt4}>{Strings.hours}</Text>
                                    <Text style={Styles.ServiceTxt3}>{Strings._24}</Text>
                                </View>
                            </View>

                            {/* Editable Column */}
                            <View style={{ flex: 1 }}>
                                <View style={{ height: '33.3%', justifyContent: 'center', alignItems: 'center' }}>
                                </View>
                                <View style={{ height: '33.3%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={Styles.ServiceTxt1}>{Strings.once}</Text>
                                </View>
                                <View style={{ height: '33.3%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={Styles.ServiceTxt1}>{Strings.twice}</Text>
                                </View>
                            </View>

                        </View>

                    </View>

                    {/* Accept Terms & Conditiona */}
                    <View style={{ width: Diem.width, height: Diem.height * 0.08, flexDirection: RTL ? 'row-reverse' : 'row' }}>
                        <View style={{ flex: 5, alignItems: 'flex-end', justifyContent: 'center' }}>
                            <Text style={Styles.policyTxt(RTL)}>{Strings.policy}</Text>
                        </View>
                        <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
                            <CheckBox
                                center
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                                checked={this.state.TermsCheckBox}
                                checkedColor={Colors.SuccessGreen.Color}
                                uncheckedColor={Colors.Gray.Color}
                                onPress={() => this.setState({ TermsCheckBox: !this.state.TermsCheckBox })}
                            />
                        </View>
                    </View>

                    {/* Send Order Button */}
                    <View style={Styles.GRDTCon}>
                        <TouchableOpacity
                            activeOpacity={0.4}
                            disabled={this.state.TermsCheckBox ? false : true}
                            style={[Styles.GRDTBtn, { opacity: this.state.TermsCheckBox ? 1 : 0.6 }]}
                            onPress={() => this.SendOrder(OrderDetails)}
                        >
                            <LinearGradient start={{ x: 0, y: 2 }} end={{ x: 1, y: 2.2 }}
                                locations={[0, 0.5, 1]} colors={[Colors.Buttons.Color3, Colors.Buttons.Color2, Colors.Buttons.Color1]} style={Styles.GRDT}>
                                {this.props.OrderConsult.isLoading || this.props.OrderSpecial.isLoading ? <Loading Color={'white'} /> : <Text style={Styles.GRDTBtnTxt}>{Strings.selectServicee}</Text>}
                            </LinearGradient>
                        </TouchableOpacity>
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
    ServiceTxt: {
        fontSize: FontSize.msavg.fontsize,
    },
    ServiceTxt2: {
        fontSize: FontSize.medium.fontsize,
        color: Colors.White.Color,
        fontWeight: '700'
    },
    ServiceTxt3: {
        fontSize: FontSize.large.fontsize,
        fontWeight: '700'
    },
    ServiceTxt4: {
        fontSize: FontSize.medium.fontsize,
        fontWeight: '400'
    },
    policyTxt: RTL => ({
        fontSize: FontSize.mini.fontsize,
        marginRight: RTL ? '3%' : '-3%'
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

export default connect(mapToStateProps, Actions)(SelectService);