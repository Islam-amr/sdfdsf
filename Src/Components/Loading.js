// Package Import
import React from 'react';
import { Text, View, ScrollView, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { SkypeIndicator } from 'react-native-indicators'

// Theme Import 
import { Diem, Colors, FontSize, Fonts } from '../../Constant/Theme';

// Styles
const Styles = StyleSheet.create({
    loadingView: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
});

// Loading Function Component 
export const Loading = (props) => {
    return (
        <View style={Styles.loadingView}>
            <SkypeIndicator size={30} color={props.Color} />
        </View>
    )
};