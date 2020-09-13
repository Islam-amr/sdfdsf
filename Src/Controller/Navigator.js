// Package Import
import React, { Component } from 'react';
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
});

const RTL = ConfigureStore().getState().Language.RTL;  // Declare RTL state From Redux Store


Strings.setLanguage(RTL ? 'en' : 'ar');  // to Handle Language Change 


// Header & Drawer Style
const Styles = StyleSheet.create({
    Header: {
        backgroundColor: Colors.Primary.Color,
        height: Diem.height * 0.11
    },
    HeaderTitle: {
        fontSize: FontSize.medium.fontsize,
        color: Colors.White.Color,
        textAlign: RTL ? 'left' : 'right',
    },
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
    headerTitleStyle: Styles.HeaderTitle,
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
    const Stack = createStackNavigator();
    const HeaderEntry2RTL = RTL ? { headerLeft: () => null, headerRight: () => goBack({ navigation }) } : { headerRight: () => null, headerLeft: () => goBack({ navigation }) }
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} options={{ title: Strings.entry, ...StackOption }} />

            <Stack.Screen name='Register' component={Register} options={{ title: Strings.registerScreen, ...StackOption, ...HeaderEntry2RTL }} />

            <Stack.Screen name='VerifyAccount' component={VerifyAccount} options={{ title: Strings.verifyAccount, ...StackOption }} />

        </Stack.Navigator>
    )
};

// Home Stack Screens
const HomeScreen = ({ navigation }) => {
    const Stack = createStackNavigator();
    const HeaderRTL = RTL ? { headerLeft: () => OpenDrawer({ navigation }) } : { headerRight: () => OpenDrawer({ navigation }) };
    const Header2RTL = RTL ? { headerLeft: () => OpenDrawer({ navigation }), headerRight: () => goBack({ navigation }) } : { headerRight: () => OpenDrawer({ navigation }), headerLeft: () => goBack({ navigation }) }
    return (
        <Stack.Navigator initialRouteName='ShowTasks'>

            <Stack.Screen name='ShowTasks' component={ShowsTaks}
                options={{ title: Strings.showTasks, ...StackOption, ...HeaderRTL }} />

            <Stack.Screen name='ReviewConsult' component={ReviewConsult}
                options={{ title: Strings.reviewAndConsult, ...StackOption, ...Header2RTL }} />

            <Stack.Screen name='ReviewConsult2' component={ReviewConsult2}
                options={{ title: Strings.reviewAndConsult, ...StackOption, ...Header2RTL }} />

            <Stack.Screen name='DraftingContract' component={DraftingContract}
                options={{ title: Strings.draftingContract, ...StackOption, ...Header2RTL }} />

            <Stack.Screen name='DraftingContract2' component={DraftingContract2}
                options={{ title: Strings.draftingContract2, ...StackOption, ...Header2RTL }} />

            <Stack.Screen name='DraftingContract3' component={DraftingContract3}
                options={{ title: Strings.draftingContract3, ...StackOption, ...Header2RTL }} />

            <Stack.Screen name='DraftingContract4' component={DraftingContract4}
                options={{ title: Strings.draftingContract3, ...StackOption, ...Header2RTL }} />

            <Stack.Screen name='DraftingContract5' component={DraftingContract5}
                options={{ title: Strings.partiesObli, ...StackOption, ...Header2RTL }} />

            <Stack.Screen name='DraftingContract6' component={DraftingContract6}
                options={{ title: Strings.partiesObli, ...StackOption, ...Header2RTL }} />

            <Stack.Screen name='DraftingContract7' component={DraftingContract7}
                options={{ title: Strings.penalAndSpec, ...StackOption, ...Header2RTL }} />

            <Stack.Screen name='DraftingContract8' component={DraftingContract8}
                options={{ title: Strings.finAcc, ...StackOption, ...Header2RTL }} />

            <Stack.Screen name='DraftingContract9' component={DraftingContract9}
                options={{ title: Strings.jurisdiction, ...StackOption, ...Header2RTL }} />

            <Stack.Screen name='SpecialRequests' component={SpecialRequests}
                options={{ title: Strings.specialRequests, ...StackOption, ...Header2RTL }} />

            <Stack.Screen name='SpecialRequests2' component={SpecialRequests2}
                options={{ title: Strings.specialRequests, ...StackOption, ...Header2RTL }} />

            <Stack.Screen name='SelectService' component={SelectService}
                options={{ title: Strings.selectServicee, ...StackOption, ...Header2RTL }} />


        </Stack.Navigator>
    )
};

// Profile Stack Screen
const ProfileScreen = ({ navigation }) => {
    const Stack = createStackNavigator();
    const HeaderRTL = RTL ? { headerLeft: () => OpenDrawer({ navigation }) } : { headerRight: () => OpenDrawer({ navigation }) };
    return (
        <Stack.Navigator>
            <Stack.Screen name='Profile' component={Profile} options={{ title: Strings.profile, ...StackOption, ...HeaderRTL }} />
        </Stack.Navigator>
    )
};


// Notifications Stack Screen
const NotificationsScreen = ({ navigation }) => {
    const Stack = createStackNavigator();
    const HeaderRTL = RTL ? { headerLeft: () => OpenDrawer({ navigation }) } : { headerRight: () => OpenDrawer({ navigation }) };
    return (
        <Stack.Navigator>
            <Stack.Screen name='Notifications' component={Notifications} options={{ title: Strings.notifications, ...StackOption, ...HeaderRTL }} />
        </Stack.Navigator>
    )
};

// Orders Stack Screen
const OrdersScreen = ({ navigation }) => {
    const Stack = createStackNavigator();
    const HeaderRTL = RTL ? { headerLeft: () => OpenDrawer({ navigation }) } : { headerRight: () => OpenDrawer({ navigation }) };
    return (
        <Stack.Navigator>
            <Stack.Screen name='Orders' component={Orders} options={{ title: Strings.orders, ...StackOption, ...HeaderRTL }} />
        </Stack.Navigator>
    )
};

// Settings Stack Screen
const SettingsScreen = ({ navigation }) => {
    const Stack = createStackNavigator();
    const HeaderRTL = RTL ? { headerLeft: () => OpenDrawer({ navigation }) } : { headerRight: () => OpenDrawer({ navigation }) };
    return (
        <Stack.Navigator>
            <Stack.Screen name='Settings' component={Settings} options={{ title: Strings.settings, ...StackOption, ...HeaderRTL }} />
        </Stack.Navigator>
    )
};

// Contact Stack Screen
const ContactUsScreen = ({ navigation }) => {
    const Stack = createStackNavigator();
    const HeaderRTL = RTL ? { headerLeft: () => OpenDrawer({ navigation }) } : { headerRight: () => OpenDrawer({ navigation }) };
    return (
        <Stack.Navigator>
            <Stack.Screen name='ContactUs' component={ContactUs} options={{ title: Strings.contactus, ...StackOption, ...HeaderRTL }} />
        </Stack.Navigator>
    )
};

// Terms and Conditions Stack Screen
const TermsAndConditionsScreen = ({ navigation }) => {
    const Stack = createStackNavigator();
    const HeaderRTL = RTL ? { headerLeft: () => OpenDrawer({ navigation }) } : { headerRight: () => OpenDrawer({ navigation }) };
    return (
        <Stack.Navigator>
            <Stack.Screen name='TermsAndConditions' component={TermsAndConditions} options={{ title: Strings.terms, ...StackOption, ...HeaderRTL }} />
        </Stack.Navigator>
    )
};

// Drawer Screens
const DrawerNavigator = ({ navigation }) => {
    const Drawer = createDrawerNavigator();
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerType='slide'
                drawerPosition={RTL ? 'left' : 'right'}
                drawerContentOptions={{ activeBackgroundColor: '#5cbbff', activeTintColor: '#ffffff' }}
                drawerContent={props => <DrawerContent {...props} />}
                drawerStyle={{ width: Diem.width * 0.75 }}
            >
                <Drawer.Screen name='Login' component={LoginScreen} options={{ gestureEnabled: false }} />
                <Drawer.Screen name='Home' component={HomeScreen} />
                <Drawer.Screen name='Profile' component={ProfileScreen} />
                <Drawer.Screen name='Notifications' component={NotificationsScreen} />
                <Drawer.Screen name='Orders' component={OrdersScreen} />
                <Drawer.Screen name='Settings' component={SettingsScreen} />
                <Drawer.Screen name='TermsAndConditions' component={TermsAndConditionsScreen} />
                <Drawer.Screen name='ContactUs' component={ContactUsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
};

// Main Navigator Class
class Container extends Component {
    render() {
        return (
            <DrawerNavigator />
        )
    };
};

export default connect(mapToStateProps)(Container);

