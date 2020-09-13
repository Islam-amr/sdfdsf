// Package Import
import React from 'react';
import { SafeAreaView, View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import IonIcon from 'react-native-vector-icons/Ionicons';




// Strings Import 
import Strings from '../Assets/Strings';

// Theme Import
import { Diem, Colors, FontSize, Fonts } from '../../Constant/Theme';

// Redux 
import { connect } from 'react-redux';

const mapToStateProps = state => ({
    RTL: state.Language.RTL,   // to Get RTL redux State
    Login: state.Login
});

// Custom Drawer Function 
const DrawerContent = (props) => {
    const RTL = props.RTL;  // RTL State Declare 
    Strings.setLanguage(RTL ? 'en' : 'ar');  // To Set Langugae Accroding to RTL State
    
    return (
        <View style={Styles.DrawerMainView}>
            <ImageBackground style={Styles.DrawerBackgroundImg} source={require('../Assets/Rectangle88781.png')} >
                <SafeAreaView>

                    {/* Logo Container */}
                    <View style={Styles.LogoCon}>
                        <Image style={Styles.Logo} source={require('../Assets/ssssss.png')} />
                    </View>

                    {/* User Data Container */}
                    <View style={Styles.UserNameCon}>
                        <Text style={Styles.UserName}>{props.Login.isAuthenticated ? props.Login.UserData.data.name : 'Loading...'}</Text>
                    </View>

                    {/* Drawer Item List  */}
                    <View style={Styles.DrawerContentCon}>
                        <DrawerContentScrollView {...props}>

                            {/* Home Drawer Item */}
                            <TouchableOpacity
                                onPress={() => props.navigation.navigate('Home')}
                                activeOpacity={0.5}
                                style={Styles.DrawerItemConActive(RTL)}
                            >
                                <View style={Styles.IconCon}>
                                    <IonIcon name="newspaper-outline" size={26} color={'gray'} />
                                </View>
                                <View style={Styles.DrawerTitleCon(RTL)}>
                                    <Text style={Styles.DrawerItemLabelActive} >{Strings.home}</Text>
                                </View>
                            </TouchableOpacity>

                            {/* Profile Drawer Item */}
                            <TouchableOpacity
                                onPress={() => props.navigation.navigate('Profile')}
                                activeOpacity={0.5}
                                style={Styles.DrawerItemCon(RTL)}
                            >
                                <View style={Styles.IconCon}>
                                    <Icon name='user' type='font-awesome' size={26} color={'white'} />
                                </View>
                                <View style={Styles.DrawerTitleCon(RTL)}>
                                    <Text style={Styles.DrawerItemLabel} >{Strings.profile}</Text>
                                </View>
                            </TouchableOpacity>

                            {/* Notifications Drawer Item */}
                            <TouchableOpacity
                                onPress={() => props.navigation.navigate('Notifications')}
                                activeOpacity={0.5}
                                style={Styles.DrawerItemCon(RTL)}
                            >
                                <View style={Styles.IconCon}>
                                    <IonIcon name="notifications-outline" size={26} color={'white'} />
                                </View>
                                <View style={Styles.DrawerTitleCon(RTL)}>
                                    <Text style={Styles.DrawerItemLabel} >{Strings.notifications}</Text>
                                </View>
                            </TouchableOpacity>

                            {/* Orders Drawer Item */}
                            <TouchableOpacity
                                onPress={() => props.navigation.navigate('Orders')}
                                activeOpacity={0.5}
                                style={Styles.DrawerItemCon(RTL)}
                            >
                                <View style={Styles.IconCon}>
                                    <Icon name='assignment' type='matrial' size={26} color={'white'} />
                                </View>
                                <View style={Styles.DrawerTitleCon(RTL)}>
                                    <Text style={Styles.DrawerItemLabel} >{Strings.orders}</Text>
                                </View>
                            </TouchableOpacity>

                            {/* Settings Drawer Item */}
                            <TouchableOpacity
                                onPress={() => props.navigation.navigate('Settings')}
                                activeOpacity={0.5}
                                style={Styles.DrawerItemCon(RTL)}
                            >
                                <View style={Styles.IconCon}>
                                    <IonIcon name="settings-outline" size={26} color={'white'} />
                                </View>
                                <View style={Styles.DrawerTitleCon(RTL)}>
                                    <Text style={Styles.DrawerItemLabel} >{Strings.settings}</Text>
                                </View>
                            </TouchableOpacity>

                            {/* Contact Us Drawer Item */}
                            <TouchableOpacity
                                onPress={() => props.navigation.navigate('ContactUs')}
                                activeOpacity={0.5}
                                style={Styles.DrawerItemCon(RTL)}
                            >
                                <View style={Styles.IconCon}>
                                    <IonIcon name="people-outline" size={26} color={'white'} />
                                </View>
                                <View style={Styles.DrawerTitleCon(RTL)}>
                                    <Text style={Styles.DrawerItemLabel} >{Strings.contactus}</Text>
                                </View>
                            </TouchableOpacity>

                            {/* Terms & Conditions Drawer Item */}
                            <TouchableOpacity
                                onPress={() => props.navigation.navigate('TermsAndConditions')}
                                activeOpacity={0.5}
                                style={Styles.DrawerItemCon(RTL)}
                            >
                                <View style={Styles.IconCon}>
                                    <Icon name='check-square' type='font-awesome' size={26} color={'white'} />
                                </View>
                                <View style={Styles.DrawerTitleCon(RTL)}>
                                    <Text style={Styles.DrawerItemLabel} >{Strings.terms}</Text>
                                </View>
                            </TouchableOpacity>

                            {/* Log Out Drawer Item */}
                            <TouchableOpacity
                                onPress={() => props.navigation.reset({ index: 0, routes: [{ name: 'Login' }], })}
                                activeOpacity={0.5}
                                style={Styles.DrawerItemCon(RTL)}
                            >
                                <View style={Styles.IconCon}>
                                    <IonIcon name="log-out-outline" size={26} color={'white'} />
                                </View>
                                <View style={Styles.DrawerTitleCon(RTL)}>
                                    <Text style={Styles.DrawerItemLabel} >{Strings.logout}</Text>
                                </View>
                            </TouchableOpacity>

                        </DrawerContentScrollView>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    )
};


const Styles = StyleSheet.create({
    DrawerMainView: {
    },
    DrawerBackgroundImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    LogoCon: {
        width: '100%',
        height: Diem.height * 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Logo: {
        width: '65%',
        height: '65%',
        resizeMode: 'contain',
        tintColor: Colors.White.Color
    },
    UserNameCon: {
        width: '100%',
        height: Diem.height * 0.05,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    UserName: {
        color: Colors.White.Color,
        fontSize: FontSize.medium.fontsize,
        fontWeight: '700'
    },
    DrawerContentCon: {
        width: '100%',
        height: Diem.height * 0.70,
        padding: 0,
        margin: 0,
        marginTop: 0,
        paddingTop: 0,
    },
    DrawerItemCon: RTL => ({
        flex: 1,
        height: Diem.height * 0.07,
        flexDirection: RTL ? 'row' : 'row-reverse'
    }),
    DrawerItemConActive: RTL => ({
        flex: 1,
        height: Diem.height * 0.07,
        flexDirection: RTL ? 'row' : 'row-reverse',
        backgroundColor: Colors.ActiveDrawer.Color
    }),
    DrawerTitleCon: RTL => ({
        flex: 4,
        justifyContent: 'center',
        alignItems: RTL ? 'flex-start' : 'flex-end'
    }),
    DrawerItemLabel: {
        color: Colors.White.Color,
        fontSize: FontSize.small.fontsize,
    },
    DrawerItemLabelActive: {
        color: 'gray',
        fontSize: FontSize.small.fontsize,
    },
    IconCon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default connect(mapToStateProps)(DrawerContent);