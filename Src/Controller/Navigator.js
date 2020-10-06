// Package Import
import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Strings Import 
import Strings from '../Assets/Strings';

// Theme Import
import { Diem, Colors, FontSize } from '../../Constant/Theme';

// Drawer Content Import
import DrawerContent from '../Components/DrawerContent';

//Screens
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import VerifyAccount from '../Screens/VerifyAccount';
import ForgotPassword from '../Screens/ForgotPassword';
import ForgotPassword2 from '../Screens/ForgotPassword2';
import ShowsTaks from '../Screens/ShowTasks';
import ReviewConsult from '../Screens/ReviewConsult';
import ReviewConsult2 from '../Screens/ReviewConsult2';
import DraftingContract from '../Screens/DraftingContract';
import DraftingContract2 from '../Screens/DraftingContract2';
import DraftingContract3 from '../Screens/DraftingContract3';
import DraftingContract4 from '../Screens/DraftingContract4';
import DraftingContract5 from '../Screens/DraftingContract5';
import DraftingContract6 from '../Screens/DraftingContract6';
import DraftingContract7 from '../Screens/DraftingContract7';
import DraftingContract8 from '../Screens/DraftingContract8';
import DraftingContract9 from '../Screens/DraftingContract9';
import SpecialRequests from '../Screens/SpecialRequests';
import SpecialRequests2 from '../Screens/SpecialRequests2';
import TermsAndConditions from '../Screens/TermsAndConditions';
import ContactUs from '../Screens/ContactUs';
import Settings from '../Screens/Settings';
import SelectService from '../Screens/SelectService';
import Profile from '../Screens/UserScreens/Profile';
import Notifications from '../Screens/UserScreens/Notifications';
import Orders from '../Screens/UserScreens/Orders';

// Redux 
import { connect } from 'react-redux';
import { ConfigureStore } from '../../Src/Redux/Store/ConfigureStore';



const mapToStateProps = state => ({
    RTL: state.Language.RTL,   // to Get RTL redux State
    UserData: state.UserData
});

const { store } = ConfigureStore();

let RTL = store.getState().Language.RTL;


// to Handle Language Change 


// Header & Drawer Style
const Styles = StyleSheet.create({
    Header: {
        backgroundColor: Colors.Primary.Color,
        height: Diem.height * 0.11
    },
    HeaderTitle: RTL => ({
        fontSize: FontSize.medium.fontsize,
        color: Colors.White.Color,
        textAlign: RTL ? 'left' : 'right',
    }),
    HeaderLeft: {
        width: Diem.width * 0.15,
        height: '100%',
        alignItems: 'center'
    },
    HeaderRight: {
        width: Diem.width * 0.15,
        height: '100%',
        alignItems: 'center'
    },
    DrawerStyle: {
        backgroundColor: Colors.Primary.Color,
        width: Diem.width,
        height: Diem.height * 0.88,
        marginTop: Diem.height * 0.12,
        borderTopWidth: 1,
    },
});

// Stack Option List 
const StackOption = {
    headerStyle: Styles.Header,
    headerTitleAlign: 'left',
    headerLeftContainerStyle: Styles.HeaderLeft,
    headerRightContainerStyle: Styles.HeaderRight,
    headerBackTitleVisible: true
};

// Go Back Function  
const goBack = (props) => {
    const navigation = props.navigation;
    return (
        <TouchableOpacity activeOpacity={0.4} onPress={() => navigation.goBack()}>
            <Image style={{ width: Diem.width * 0.05, resizeMode: 'contain' }} source={require('../Assets/Shape.png')} />
        </TouchableOpacity>
    );
};

// Toggle Drawer Function
const OpenDrawer = (props) => {
    const navigation = props.navigation;
    return (
        <TouchableOpacity activeOpacity={0.4} onPress={() => navigation.toggleDrawer()}>
            <Image style={{ width: Diem.width * 0.06, resizeMode: 'contain' }} source={require('../Assets/Menu.png')} />
        </TouchableOpacity>
    );
};

// Login Stack Screens
const LoginScreen = ({ navigation }) => {
    RTL = store.getState().Language.RTL;
    const Stack = createStackNavigator();

    const HeaderEntry2RTL = RTL ? { headerLeft: () => null, headerRight: () => goBack({ navigation }) } : { headerRight: () => null, headerLeft: () => goBack({ navigation }) }
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} options={{ title: Strings.entry, ...StackOption, headerTitleStyle: Styles.HeaderTitle(RTL) }} />

            <Stack.Screen name='Register' component={Register} options={{ title: Strings.registerScreen, ...StackOption, headerTitleStyle: Styles.HeaderTitle(RTL), ...HeaderEntry2RTL }} />

            <Stack.Screen name='VerifyAccount' component={VerifyAccount} options={{ title: Strings.verifyAccount, ...StackOption, headerTitleStyle: Styles.HeaderTitle(RTL) }} />

            <Stack.Screen name='Forgot' component={ForgotPassword} options={{ title: Strings.forgot, ...StackOption, headerTitleStyle: Styles.HeaderTitle(RTL), ...HeaderEntry2RTL }} />

            <Stack.Screen name='Forgot2' component={ForgotPassword2} options={{ title: Strings.forgot, ...StackOption, headerTitleStyle: Styles.HeaderTitle(RTL), ...HeaderEntry2RTL }} />

        </Stack.Navigator>
    )
};

// Home Stack Screens
const HomeScreen = ({ navigation }) => {

    const Stack = createStackNavigator();
    RTL = store.getState().Language.RTL;

    const HeaderRTL = RTL ? { headerLeft: () => OpenDrawer({ navigation }) } : { headerRight: () => OpenDrawer({ navigation }) };
    const Header2RTL = RTL ? { headerLeft: () => OpenDrawer({ navigation }), headerRight: () => goBack({ navigation }) } : { headerRight: () => OpenDrawer({ navigation }), headerLeft: () => goBack({ navigation }) }
    return (
        <Stack.Navigator initialRouteName='ShowTasks'>

            <Stack.Screen name='ShowTasks' component={ShowsTaks}
                options={{ title: Strings.showTasks, headerTitleStyle: Styles.HeaderTitle(RTL), ...StackOption, ...HeaderRTL }} />

            <Stack.Screen name='ReviewConsult' component={ReviewConsult}
                options={{ title: Strings.reviewAndConsult, headerTitleStyle: Styles.HeaderTitle(RTL), ...StackOption, ...Header2RTL }} />

            <Stack.Screen name='ReviewConsult2' component={ReviewConsult2}
                options={{ title: Strings.reviewAndConsult, headerTitleStyle: Styles.HeaderTitle(RTL), ...StackOption, ...Header2RTL }} />

            <Stack.Screen name='DraftingContract' component={DraftingContract}
                options={{ title: Strings.draftingContract, headerTitleStyle: Styles.HeaderTitle(RTL), ...StackOption, ...Header2RTL }} />

            <Stack.Screen name='DraftingContract2' component={DraftingContract2}
                options={{ title: Strings.draftingContract2, headerTitleStyle: Styles.HeaderTitle(RTL), ...StackOption, ...Header2RTL }} />

            <Stack.Screen name='DraftingContract3' component={DraftingContract3}
                options={{ title: Strings.draftingContract3, headerTitleStyle: Styles.HeaderTitle(RTL), ...StackOption, ...Header2RTL }} />

            <Stack.Screen name='DraftingContract4' component={DraftingContract4}
                options={{ title: Strings.draftingContract3, headerTitleStyle: Styles.HeaderTitle(RTL), ...StackOption, ...Header2RTL }} />

            <Stack.Screen name='DraftingContract5' component={DraftingContract5}
                options={{ title: Strings.partiesObli, headerTitleStyle: Styles.HeaderTitle(RTL), ...StackOption, ...Header2RTL }} />

            <Stack.Screen name='DraftingContract6' component={DraftingContract6}
                options={{ title: Strings.partiesObli, headerTitleStyle: Styles.HeaderTitle(RTL), ...StackOption, ...Header2RTL }} />

            <Stack.Screen name='DraftingContract7' component={DraftingContract7}
                options={{ title: Strings.penalAndSpec, headerTitleStyle: Styles.HeaderTitle(RTL), ...StackOption, ...Header2RTL }} />

            <Stack.Screen name='DraftingContract8' component={DraftingContract8}
                options={{ title: Strings.finAcc, headerTitleStyle: Styles.HeaderTitle(RTL), ...StackOption, ...Header2RTL }} />

            <Stack.Screen name='DraftingContract9' component={DraftingContract9}
                options={{ title: Strings.jurisdiction, headerTitleStyle: Styles.HeaderTitle(RTL), ...StackOption, ...Header2RTL }} />

            <Stack.Screen name='SpecialRequests' component={SpecialRequests}
                options={{ title: Strings.specialRequests, headerTitleStyle: Styles.HeaderTitle(RTL), ...StackOption, ...Header2RTL }} />

            <Stack.Screen name='SpecialRequests2' component={SpecialRequests2}
                options={{ title: Strings.specialRequests, headerTitleStyle: Styles.HeaderTitle(RTL), ...StackOption, ...Header2RTL }} />

            <Stack.Screen name='SelectService' component={SelectService}
                options={{ title: Strings.selectServicee, headerTitleStyle: Styles.HeaderTitle(RTL), ...StackOption, ...Header2RTL }} />


        </Stack.Navigator>
    )
};

// Profile Stack Screen
const ProfileScreen = ({ navigation }) => {
    const Stack = createStackNavigator();
    RTL = store.getState().Language.RTL;

    const HeaderRTL = RTL ? { headerLeft: () => OpenDrawer({ navigation }) } : { headerRight: () => OpenDrawer({ navigation }) };
    return (
        <Stack.Navigator>
            <Stack.Screen name='Profile' component={Profile} options={{ title: Strings.profile, ...StackOption, ...HeaderRTL, headerTitleStyle: Styles.HeaderTitle(RTL) }} />
        </Stack.Navigator>
    )
};


// Notifications Stack Screen
const NotificationsScreen = ({ navigation }) => {
    const Stack = createStackNavigator();
    RTL = store.getState().Language.RTL;

    const HeaderRTL = RTL ? { headerLeft: () => OpenDrawer({ navigation }) } : { headerRight: () => OpenDrawer({ navigation }) };
    return (
        <Stack.Navigator>
            <Stack.Screen name='Notifications' component={Notifications} options={{ title: Strings.notifications, ...StackOption, ...HeaderRTL, headerTitleStyle: Styles.HeaderTitle(RTL) }} />
        </Stack.Navigator>
    )
};

// Orders Stack Screen
const OrdersScreen = ({ navigation }) => {
    const Stack = createStackNavigator();
    RTL = store.getState().Language.RTL;

    const HeaderRTL = RTL ? { headerLeft: () => OpenDrawer({ navigation }) } : { headerRight: () => OpenDrawer({ navigation }) };
    return (
        <Stack.Navigator>
            <Stack.Screen name='Orders' component={Orders} options={{ title: Strings.orders, ...StackOption, ...HeaderRTL, headerTitleStyle: Styles.HeaderTitle(RTL) }} />
        </Stack.Navigator>
    )
};

// Settings Stack Screen
const SettingsScreen = ({ navigation }) => {
    const Stack = createStackNavigator();
    RTL = store.getState().Language.RTL;

    const HeaderRTL = RTL ? { headerLeft: () => OpenDrawer({ navigation }) } : { headerRight: () => OpenDrawer({ navigation }) };
    return (
        <Stack.Navigator>
            <Stack.Screen name='Settings' component={Settings} options={{ title: Strings.settings, ...StackOption, ...HeaderRTL, headerTitleStyle: Styles.HeaderTitle(RTL) }} />
        </Stack.Navigator>
    )
};

// Contact Stack Screen
const ContactUsScreen = ({ navigation }) => {
    const Stack = createStackNavigator();
    RTL = store.getState().Language.RTL;

    const HeaderRTL = RTL ? { headerLeft: () => OpenDrawer({ navigation }) } : { headerRight: () => OpenDrawer({ navigation }) };
    return (
        <Stack.Navigator>
            <Stack.Screen name='ContactUs' component={ContactUs} options={{ title: Strings.contactus, ...StackOption, ...HeaderRTL, headerTitleStyle: Styles.HeaderTitle(RTL) }} />
        </Stack.Navigator>
    )
};

// Terms and Conditions Stack Screen
const TermsAndConditionsScreen = ({ navigation }) => {
    const Stack = createStackNavigator();
    RTL = store.getState().Language.RTL;

    const HeaderRTL = RTL ? { headerLeft: () => OpenDrawer({ navigation }) } : { headerRight: () => OpenDrawer({ navigation }) };
    return (
        <Stack.Navigator>
            <Stack.Screen name='TermsAndConditions' component={TermsAndConditions} options={{ title: Strings.terms, ...StackOption, ...HeaderRTL, headerTitleStyle: Styles.HeaderTitle(RTL) }} />
        </Stack.Navigator>
    )
};

// Drawer Screens
const DrawerNavigator = (props) => {
    const Drawer = createDrawerNavigator();

    console.log(props.UserData)

    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerType='slide'
                drawerPosition={props.RTL ? 'left' : 'right'}
                drawerContentOptions={{ activeBackgroundColor: '#5cbbff', activeTintColor: '#ffffff' }}
                drawerContent={props => <DrawerContent {...props} />}
                drawerStyle={{ width: Diem.width * 0.75 }}
            >
                {!(props.UserData) ?
                    <Drawer.Screen name='Login' component={LoginScreen} options={{ gestureEnabled: false }} />
                    :
                    <>
                        <Drawer.Screen name='Home' component={HomeScreen} />
                        <Drawer.Screen name='Profile' component={ProfileScreen} />
                        <Drawer.Screen name='Notifications' component={NotificationsScreen} />
                        <Drawer.Screen name='Orders' component={OrdersScreen} />
                        <Drawer.Screen name='Settings' component={SettingsScreen} />
                        <Drawer.Screen name='TermsAndConditions' component={TermsAndConditionsScreen} />
                        <Drawer.Screen name='ContactUs' component={ContactUsScreen} />
                    </>
                }
            </Drawer.Navigator>
        </NavigationContainer>
    )
};

// Main Navigator Class
class Container extends Component {
    render() {
        Strings.setLanguage(this.props.RTL ? 'en' : 'ar');
        return (
            <DrawerNavigator RTL={this.props.RTL} UserData={this.props.UserData.Token} />
        )
    };
};

export default connect(mapToStateProps)(Container);

