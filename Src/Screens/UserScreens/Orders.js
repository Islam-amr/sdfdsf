// Package Import
import React, { Component } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image, ImageBackground, Button, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
            ModalVisble: true
        }
    }

    ToggleModal() {
        this.setState({ ModalVisble: !this.state.ModalVisble })
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

        // Main Return
        return (
            <ImageBackground style={{ width: '100%', height: '100%', resizeMode: 'cover' }} source={require('../../Assets/Layer991.png')} >

                <SafeAreaView style={Styles.MainView}>

                    <Modal
                        isVisible={this.state.ModalVisble}
                        style={{ justifyContent: 'center', alignItems: 'center' }}
                    >
                        <View style={{ width: '75%', height: '35%', borderRadius: 10, backgroundColor: Colors.White.Color }}>
                            <View style={{ flexDirection: RTL ? 'row-reverse' : 'row', height: '10%', width: '100%' }}>

                                <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Icon name='times-circle' size={FontSize.medium.fontsize} color={'red'} onPress={() => this.ToggleModal()} />
                                </View>
                            </View>

                            <View style={{ width: '100%', height: '30%', justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={{ width: '50%', resizeMode: 'contain' }} source={require('../../Assets/VectorSmartObject.png')} />
                            </View>


                            <View style={{ width: '100%', height: '17.5%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: FontSize.xxlarge.fontsize, color: 'red' }}>{Strings.thankU}</Text>
                            </View>


                            <View style={{ width: '100%', height: '17.5%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: FontSize.small.fontsize, textAlign: 'center', width: '90%', fontWeight: '600' }}>{Strings.Srequest}</Text>
                            </View>

                            <View style={{ width: '100%', height: '25%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: FontSize.mini.fontsize, textAlign: 'center', width: '90%' }}>{Strings.workon}</Text>
                            </View>
                        </View>

                    </Modal>

                    {/* Saygha Logo  */}
                    <View style={Styles.LogoCon}>
                        <Image style={{ width: '40%', resizeMode: 'contain' }} source={require('../../Assets/VectorSmartObject.png')} />
                    </View>

                    {/* <ScrollView style={Styles.OrdersCon}>

                    </ScrollView> */}

                    {this.props.FetchContractOrder.OrderData.map((item, index) => {
                        return (
                            <View key={index}>
                                <Text>{item.id}</Text>
                                <Text>{item.order_type}</Text>

                            </View>
                        )
                    })

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
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    OrdersCon: {
        width: Diem.width,
        height: '80%',
    }
});

export default connect(mapToStateProps, Actions)(Orders);