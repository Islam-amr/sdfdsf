// Package Import
import { Platform, StatusBar, Dimensions, PixelRatio } from 'react-native';


//------------------- Width & Height -------------//

let Customheight; // To Handle Actual Device height

// If Statment to Handle Android Devices Notch
if (Platform.OS === 'android') {
    const HasNotch = StatusBar.currentHeight > 24;
    if (HasNotch === true) {
        Customheight = Dimensions.get('window').height;
    } else {
        Customheight = Dimensions.get('window').height - StatusBar.currentHeight;
    };
} else {
    Customheight = Dimensions.get('window').height;
};

// Final Responsive Dimensions List
const Diem = {
    width: Dimensions.get('window').width,
    height: Customheight
};

//------------- End of Width & Height ------------//


//------------- Responsive Font Size -------------// 

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');  // Declare Dimensions

const Scale = SCREEN_WIDTH / 320; // Iphone 5 Width

// Responsive Font Size 
function ActuatedNormalize(Size) {
    const NewSize = Scale * Size;
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(NewSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(NewSize)) - 2
    }
};

// Custom Font Size List Declartion
const FontSize = {
    tiny: {
        fontsize: ActuatedNormalize(10)
    },
    mini: {
        fontsize: ActuatedNormalize(12)
    },
    msavg: {
        fontsize: ActuatedNormalize(13.5)
    },
    small: {
        fontsize: ActuatedNormalize(15)
    },
    medium: {
        fontsize: ActuatedNormalize(17)
    },
    large: {
        fontsize: ActuatedNormalize(20)
    },
    xlarge: {
        fontsize: ActuatedNormalize(24)
    },
    xxlarge: {
        fontsize: ActuatedNormalize(27)
    },
    xmedium: {
        fontsize: ActuatedNormalize(18)
    },
};

//-------- End of Responsive Font Size ---------// 


//------------- Font Family -------------// 

// Font Family List Declaration
const Fonts = {

};

//---------- End of Font Family ----------// 


//---------- Colors ----------// 

// Theme Colors Declaration
const Colors = {
    Primary: {
        Color: '#4d9ffb'
    },
    White: {
        Color: '#FFFFFF'
    },
    Gray: {
        Color: 'gray'
    },
    Buttons: {
        Color1: 'rgb(9,31,135)',
        Color2: 'rgb(8,76,191)',
        Color3: '#4d9ffb',
    },
    GrayButton: {
        Color1: '#242321',
        Color2: '#686868',
    },
    ActiveDrawer: {
        Color: '#2e3030'
    },
    SuccessGreen: {
        Color: '#5cb85c'
    }
};

//------- End of Colors --------// 

export { Diem, FontSize, Fonts, Colors }; 