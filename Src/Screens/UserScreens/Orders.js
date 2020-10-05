// Package Import
import React, { Component } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image, ImageBackground, Button, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal'

// Strings Import 
import Strings from '../../Assets/Strings';

// Theme Import
import { Diem, Colors, FontSize } from '../../../Constant/Theme';

// Redux 
import { connect } from 'react-redux';
import * as Actions from '../../Redux/Actions/OrdersAction';

const mapToStateProps = state => ({
    RTL: state.Language.RTL,   // to Get RTL redux State
    Login: state.Login, // To Get Token
    FetchConsultOrder: state.FetchConsultOrder,
    FetchSpecialOrder: state.FetchSpecialOrder,
    FetchContractOrder: state.FetchContractOrder,
})

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TabState: 'Contract',
        }
    }

    componentDidMount() {
        this.props.fetchConsultOrder(this.props.Login.Token)
        this.props.fetchSpecialOrder(this.props.Login.Token)
        this.props.fetchContractOrder(this.props.Login.Token)
    }



    render() {

        const Navigation = this.props.navigation;  // To Handle Moving Between Screens

        let RTL = this.props.RTL;  // Declare RTL Redux State

        Strings.setLanguage(RTL ? 'en' : 'ar');  // To Change Language According to RTL Redux State

        const ModalState = this.props.route.params;


        const RenderEmpty = (props) => {
            return (
                <View style={{ width: Diem.width, height: Diem.height * 0.55, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: FontSize.xlarge.fontsize, padding: '2%', textAlign: RTL ? 'left' : 'right' }}>{Strings.norders}</Text>
                </View>
            )
        };

        const RenderOrders = (props) => {
            const Data = props.Data;
            const RenderOrder = ({ item, index }) => {
                return (
                    <View style={{ width: Diem.width, height: Diem.height * 0.12, justifyContent: 'center', alignItems: 'center', marginVertical: Diem.height * 0.02 }}>
                        <View style={{ width: '90%', height: '90%', borderColor: '#aba8a7', borderRadius: 10, borderWidth: 1, alignItems: 'center' }}>
                            <View style={{ width: '90%', height: '77.5%', marginTop: '1%' }}>
                                <View style={{ flexDirection: 'row', flex: 1 }}>
                                    <View style={{ flex: 1, justifyContent: 'center' }}>
                                        <Text style={{ color: 'gray', fontSize: FontSize.tiny.fontsize }}>
                                            {
                                                item.order_type === 'consultation'
                                                    ?
                                                    item.consultation.created_at.substring(0, 10)
                                                    : item.order_type === 'special' ?
                                                        item.special.created_at.substring(0, 10)
                                                        :
                                                        item.contract.created_at.substring(0, 10)

                                            }
                                        </Text>
                                    </View>
                                    <View style={{ flex: 1, justifyContent: 'center' }}>
                                        <Text style={{ fontSize: FontSize.small.fontsize }}>
                                            {
                                                item.order_type === 'consultation'
                                                    ?
                                                    item.consultation.details.substring(0, 17) + '...'
                                                    : item.order_type === 'special' ?
                                                        item.special.details.substring(0, 17) + '...'
                                                        :
                                                        item.contract.details.substring(0, 17) + '...'

                                            }
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <Text>
                                        Order No.
                                        </Text>
                                    <Text>
                                        #{item.id}
                                    </Text>
                                </View>
                            </View>

                        </View>
                        <View style={{ width: '35%', height: '35%', position: 'absolute', bottom: '-10%', left: '10%', justifyContent: 'center', alignItems: 'center' }}>
                            <LinearGradient start={{ x: 0, y: 2 }} end={{ x: 1, y: 2.2 }}
                                locations={[0, 0.5, 1]} colors={['#4a9c5f', '#65b77a', '#4a9c5f']} style={Styles.GRDT2}>
                                <Text style={Styles.GRDTBtnTxt2(RTL)}>تم الطلب بنجاح</Text>
                            </LinearGradient>
                        </View>
                    </View>
                )
            };

            return (
                <FlatList
                    data={Data}
                    renderItem={RenderOrder}
                    ListEmptyComponent={RenderEmpty}
                    keyExtractor={(item) => item.id.toString()}
                />
            )

        }


        // Main Return
        return (
            <ImageBackground style={{ width: '100%', height: '100%', resizeMode: 'cover' }} source={require('../../Assets/Layer991.png')} >

                <SafeAreaView style={Styles.MainView}>

                    {/* Saygha Logo  */}
                    <View style={Styles.LogoCon}>
                        <Image style={{ width: '40%', resizeMode: 'contain' }} source={require('../../Assets/VectorSmartObject.png')} />
                    </View>

                    <View style={{ flexDirection: RTL ? 'row' : 'row-reverse', justifyContent: 'center', alignItems: 'center', }}>
                        <View style={Styles.GRDTCon}>
                            <TouchableOpacity activeOpacity={0.4} style={Styles.GRDTBtn} onPress={() => this.setState({ TabState: 'Contract' })}>
                                <LinearGradient start={{ x: 0, y: 2 }} end={{ x: 1, y: 2.2 }}
                                    locations={[0, 0.5, 1]} colors={this.state.TabState === 'Contract' ? [Colors.Primary.Color, Colors.Primary.Color, Colors.Primary.Color] : ['#bbbbbb', '#bbbbbb', '#bbbbbb']} style={Styles.GRDT}>
                                    <Text style={Styles.GRDTBtnTxt(RTL)}>{Strings.ContractOrders}</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        <View style={Styles.GRDTCon}>
                            <TouchableOpacity activeOpacity={0.4} style={Styles.GRDTBtn} onPress={() => this.setState({ TabState: 'Consult' })}>
                                <LinearGradient start={{ x: 0, y: 2 }} end={{ x: 1, y: 2.2 }}
                                    locations={[0, 0.5, 1]} colors={this.state.TabState === 'Consult' ? [Colors.Primary.Color, Colors.Primary.Color, Colors.Primary.Color] : ['#bbbbbb', '#bbbbbb', '#bbbbbb']} style={Styles.GRDT}>
                                    <Text style={Styles.GRDTBtnTxt(RTL)}>{Strings.ConsultationOrders}</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        <View style={Styles.GRDTCon}>
                            <TouchableOpacity activeOpacity={0.4} style={Styles.GRDTBtn} onPress={() => this.setState({ TabState: 'Special' })}>
                                <LinearGradient start={{ x: 0, y: 2 }} end={{ x: 1, y: 2.2 }}
                                    locations={[0, 0.5, 1]} colors={this.state.TabState === 'Special' ? [Colors.Primary.Color, Colors.Primary.Color, Colors.Primary.Color] : ['#bbbbbb', '#bbbbbb', '#bbbbbb']} style={Styles.GRDT}>
                                    <Text style={Styles.GRDTBtnTxt(RTL)}>{Strings.SpecialOrders}</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {
                        this.state.TabState === 'Contract' ?
                            <RenderOrders Data={this.props.FetchContractOrder.OrderData} />
                            : this.state.TabState === 'Special' ?
                                <RenderOrders Data={this.props.FetchSpecialOrder.OrderData} />
                                :
                                <RenderOrders Data={this.props.FetchConsultOrder.OrderData} />
                    }

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
    LogoCon: {
        width: Diem.width,
        height: Diem.height * 0.17,
        justifyContent: 'center',
        alignItems: 'center'
    },
    OrdersCon: {
        width: Diem.width,
        height: '80%',
    },
    GRDTCon: {
        flex: 1,
        height: Diem.height * 0.09,
        justifyContent: 'center',
        alignItems: 'center'
    },
    GRDT: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: Colors.Gray.Color,
        justifyContent: 'center',
        alignItems: 'center'
    },
    GRDT2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: Colors.Gray.Color,
        justifyContent: 'center',
        alignItems: 'center'
    },
    GRDTBtn: {
        width: '98.5%',
        height: '65%',
    },
    GRDTBtnTxt: RTL => ({
        color: Colors.White.Color,
        fontSize: RTL ? FontSize.msavg.fontsize : FontSize.msavg.fontsize,
        textAlign: 'center'
    }),
    GRDTBtnTxt2: RTL => ({
        color: Colors.White.Color,
        fontSize: FontSize.mini.fontsize,
        textAlign: 'center',
        marginHorizontal: '10%'

    })
});

export default connect(mapToStateProps, Actions)(Orders);